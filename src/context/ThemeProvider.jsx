// src/context/ThemeContext.jsx
import { useState, useEffect } from "react";
import { ThemeContexts } from "./ThemeContext";

const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setDarkMode(!darkMode);
  };

  return (
    <ThemeContexts value={{ darkMode, toggleTheme, name: "sohel" }}>
      {children}
    </ThemeContexts>
  );
};

export default ThemeProvider;
