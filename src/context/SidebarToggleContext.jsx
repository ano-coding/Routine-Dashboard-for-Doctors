import { createContext, useState } from "react";

export const SidebarToggleContext = createContext();

const SidebarToggleProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleSidebarToggle = () => {
    setIsSidebarOpen((prevState) => !prevState);
  };

  return (
    <SidebarToggleContext.Provider
      value={{ isSidebarOpen, handleSidebarToggle }}
    >
      {children}
    </SidebarToggleContext.Provider>
  );
};

export default SidebarToggleProvider;
