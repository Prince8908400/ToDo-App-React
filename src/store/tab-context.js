import React, { useState, createContext } from "react";

export const TabContext = createContext();

const ContextProvider = ({ children }) => {
  const [activeTabs, setActiveTabs] = useState({});

  const handleTabChange = (id, tab) => {
    setActiveTabs((prevActiveTabs) => ({
      ...prevActiveTabs,
      [id]: tab,
    }));
  };

  return (
    <TabContext.Provider value={{ activeTabs, handleTabChange }}>
      {children}
    </TabContext.Provider>
  );
};

export default ContextProvider;
