"use client";
import { createContext, useState, useContext } from "react";

export const ClosedNavbarContext = createContext(null);

export const ClosedNavbarContextProvider = ({ children }) => {
  const [closedNavbar, SetClosedNavbar] = useState(false);

  const handleClosedNavbar = () => {
    SetClosedNavbar(!closedNavbar);
    const container = document.querySelector("#container");

    if (closedNavbar) {
      container.classList.add("ml-[240px]");
      container.classList.remove("ml-[85px]");
    } else {
      container.classList.remove("ml-[240px]");
      container.classList.add("ml-[85px]");
    }
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
