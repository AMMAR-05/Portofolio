import React, { useContext } from "react";
import "./ThemeSwitcher.css";
import { ThemeContext } from "../UI/themeContext";
import { FaRegGem } from "react-icons/fa";
function ThemeSwitcher() {
  const theme = useContext(ThemeContext);

  return (
    <div className="theme_switcher" onClick={theme.toggleTheme}>
      <FaRegGem />
    </div>
  );
}

export default ThemeSwitcher;
