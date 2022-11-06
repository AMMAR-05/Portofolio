import React, { useContext } from "react";
import "./ThemeSwitcher.css";
import { ThemeContext } from "../UI/themeContext";

function ThemeSwitcher() {
  const theme = useContext(ThemeContext);

  return (
    <div className="theme_switcher" onClick={theme.toggleTheme}>
      {theme.theme === "" ? `Light Mode` : `Dark Mode`}
    </div>
  );
}

export default ThemeSwitcher;
