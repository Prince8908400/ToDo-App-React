import React, { useContext } from "react";
import { TabPanel, TabContentWrapper } from "./Tab.style";
import { TabContext } from "../../store/tab-context";

const TabPanels = ({ id, children }) => {
  const { activeTabs } = useContext(TabContext);
  const activeTab = activeTabs[id] || 0;

  return (
    <TabContentWrapper>
      {React.Children.map(children, (child, index) => {
        if (React.isValidElement(child)) {
          return (
            <TabPanel>{activeTab === index ? child : null}</TabPanel>
          );
        }
      })}
    </TabContentWrapper>
  )
}

export { TabPanel };
export default TabPanels;
