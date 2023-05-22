import { useState, createContext } from "react";

export const TabContext = createContext({
  tab: 1,
  handleTabChange: () => {},
});

const ContextProvider = ({ children }) => {
  const [active, setActive] = useState(1);

  const handleTabChange = (id) => {
    setActive(id);
  };

  const value = {
    tab: active,
    handleTabChange,
  };

  return <TabContext.Provider value={value}>{children}</TabContext.Provider>;
};

export default ContextProvider;
