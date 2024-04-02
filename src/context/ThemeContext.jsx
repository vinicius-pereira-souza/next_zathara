"use client";
import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext(null);

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (localStorage.getItem("theme")) {
      setTheme(localStorage.getItem("theme"));
    } else {
      localStorage.setItem("theme", theme);
      setTheme("light");
    }
  }, [theme]);

  const toggleThemeValue = () => {
    if (localStorage.getItem("theme") == "light") {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    } else {
      setTheme("light");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleThemeValue }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const { theme, toggleThemeValue } = useContext(ThemeContext);

  return {
    theme,
    toggleThemeValue,
  };
};
