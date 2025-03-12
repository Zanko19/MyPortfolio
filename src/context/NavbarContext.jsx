import { createContext, useContext, useState } from "react";

const NavbarContext = createContext();

export const NavbarProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <NavbarContext.Provider value={{ isOpen, toggleMenu, closeMenu }}>
      {children}
    </NavbarContext.Provider>
  );
};

export const useNavbar = () => useContext(NavbarContext);
