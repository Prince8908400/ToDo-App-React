import React, { useContext, useEffect } from "react";
import PropTypes from "prop-types";
import { TabContext } from "../../store/tab-context";

// styles
import { StyledTab, TabItem } from "./Tab.style";

function Tabs({ children, variant, id, ...rest }) {
  const { activeTabs, handleTabChange, setInitialTabs } = useContext(TabContext);

  useEffect(() => {
    setInitialTabs(prev => new Set([...prev, id]));
  }, []);

  const handleClick = (tabId) => {
    handleTabChange(id, tabId);
  };

  const activeTab = activeTabs[id] || 0;

  return (
    <StyledTab {...rest} variant={variant}>
      {React.Children.map(children, (child, index) => {
        if (React.isValidElement(child)) {
          const { title, disabled } = child.props;
          return (
            <TabItem
              id={index}
              className={activeTab === index ? "active" : ""}
              disabled={disabled}
              variant={variant}
              onClick={() => handleClick(index)}
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

export { TabItem };
export default Tabs;
