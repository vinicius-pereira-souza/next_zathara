"use client";
import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext(null);

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const html = document.querySelector("html");

    if (localStorage.getItem("theme")) {
      setTheme(localStorage.getItem("theme"));
    } else {
      localStorage.setItem("theme", theme);
      setTheme("light");
    }

    if (html.classList.contains("null")) {
      html.classList.remove("null");
      html.classList.add(theme);
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

    const html = document.querySelector("html");
    if (html.classList.contains("light")) {
      html.classList.add("dark");
      html.classList.remove("light");
    } else {
      html.classList.remove("dark");
      html.classList.add("light");
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
