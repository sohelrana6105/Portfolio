import React, { useContext } from "react";
import { ThemeContexts } from "../../context/ThemeContext";
import { LuSun } from "react-icons/lu";
import { RiMoonClearLine } from "react-icons/ri";
import { motion } from "framer-motion";

const ThemeButton = () => {
  const { darkMode, toggleTheme } = useContext(ThemeContexts);

  return (
    <motion.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
      transition={{ duration: 0.3, ease: "easeInOut" }} // <- tween effect
      className="dark:bg-gray-900"
    >
      {darkMode ? <LuSun size={24} /> : <RiMoonClearLine size={24} />}
    </motion.button>
  );
};

export default ThemeButton;
