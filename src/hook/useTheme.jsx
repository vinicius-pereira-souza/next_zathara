"use client";
import { useState, useEffect } from "react";

export const useTheme = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (localStorage.getItem("theme")) {
      setTheme(localStorage.getItem("theme"));
    } else {
      localStorage.setItem("theme", theme);
      setTheme("light");
    }
  }, [theme]);

  useEffect(() => {
    const html = document.querySelector("html");
    html.classList.add(localStorage.getItem("theme"));
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

  return {
    theme,
    toggleThemeValue,
  };
};
