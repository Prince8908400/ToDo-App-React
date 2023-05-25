import React, { useContext } from "react";
import PropTypes from "prop-types";
import { TabContext } from "../../store/tab-context";

// styles
import { StyledTab, TabItem } from "./Tab.style";

function Tabs({ children, variant, id, ...rest }) {
  const { activeTabs, handleTabChange } = useContext(TabContext);

  const handleClick = (event, tabId) => {
    handleTabChange(id, tabId);
  };

  const activeTab = activeTabs[id] || 1;

  return (
    <StyledTab {...rest} variant={variant}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          const { id: tabId, title, disabled } = child.props;
          return (
            <TabItem
              id={tabId}
              className={activeTab === tabId ? "active" : ""}
              disabled={disabled}
              variant={variant}
              onClick={(event) => handleClick(event, tabId)}
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

Tabs.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Tabs;
