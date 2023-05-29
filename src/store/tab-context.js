import React, { createContext, useState } from "react";

export const TabContext = createContext({
  activeTabs: {},
  handleTabChange: () => {},
  setInitialTabs: () => {},
});

const ContextProvider = ({ children }) => {
  const [activeTabs, setActiveTabs] = useState({});

  const handleTabChange = (groupId, tabIndex) => {
    setActiveTabs((prevActiveTabs) => ({
      ...prevActiveTabs,
      [groupId]: tabIndex,
    }));
  };

  const setInitialTabs = (groupId, initialTabIndex) => {
    setActiveTabs((prevActiveTabs) => ({
      ...prevActiveTabs,
      [groupId]: initialTabIndex,
    }));
  };

  const contextValue = {
    activeTabs,
    handleTabChange,
    setInitialTabs,
  };

  return (
    <TabContext.Provider value={contextValue}>{children}</TabContext.Provider>
  );
};

export default ContextProvider;
