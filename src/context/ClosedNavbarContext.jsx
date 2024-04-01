"use client";
import { createContext, useState, useContext } from "react";

export const ClosedNavbarContext = createContext(null);

export const ClosedNavbarContextProvider = ({ children }) => {
  const [closedNavbar, SetClosedNavbar] = useState(false);

  const handleClosedNavbar = () => {
    SetClosedNavbar(!closedNavbar);
  };

  return (
    <ClosedNavbarContext.Provider value={[closedNavbar, handleClosedNavbar]}>
      {children}
    </ClosedNavbarContext.Provider>
  );
};

export const useClosedNavbar = () => {
  const [closedNavbar, handleClosedNavbar] = useContext(ClosedNavbarContext);

  return [closedNavbar, handleClosedNavbar];
};
