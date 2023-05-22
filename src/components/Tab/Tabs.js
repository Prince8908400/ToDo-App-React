import React, { useContext } from "react";
import PropTypes from "prop-types";
import { TabContext } from "../../store/tab-context";

// styles
import { StyledTab, TabItem } from "./Tab.style";

function Tabs({ children, onTabChange, variant, ...rest }) {
  const tabCtx = useContext(TabContext);

  const handleClick = (event) => {
    onTabChange(event);
  };

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <StyledTab onClick={onTabChange} {...rest} variant={variant}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          const { id, title, disabled } = child.props;
          return (
            <TabItem
              id={id}
              className={tabCtx.tab === id ? "active" : ""}
              disabled={disabled}
              variant={variant}
              onClick={(event) => handleClick(event, variant)}
            >
              {title}
            </TabItem>
          );
        }
        return child;
      })}
    </StyledTab>
  );
}

Tabs.defaultProps = {
  onTabChange: () => {},
};

Tabs.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]).isRequired,
  onTabChange: PropTypes.func,
};

export default Tabs;
