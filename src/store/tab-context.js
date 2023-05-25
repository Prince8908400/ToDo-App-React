import React, { useState, createContext, useEffect } from "react";

export const TabContext = createContext();

const ContextProvider = ({ children }) => {
  const [activeTabs, setActiveTabs] = useState([]);
  const [initialTabs, setInitialTabs] = useState([]);
  useEffect(() => {
    const initialActiveTabs = Array.from(new Set(initialTabs)).reduce(
      (acc, tabId) => {
        const obj = {
          [tabId]: 0
        }
        acc.push(obj);
        return acc;
      },
      []
    );

    setActiveTabs(initialActiveTabs)
  }, [initialTabs])



  const handleTabChange = (id, tab) => {
    const getIndex = activeTabs?.findIndex(element => Object.keys(element)[0] === id);
    activeTabs[getIndex][id] = tab;
    console.log(activeTabs);
    setActiveTabs([...activeTabs], activeTabs[getIndex][id] = tab)
  };

  return (
    <TabContext.Provider value={{ activeTabs, handleTabChange, setInitialTabs, initialTabs }}>
      {children}
    </TabContext.Provider>
  );
};

export default ContextProvider;
