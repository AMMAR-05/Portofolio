// import React, { useEffect, useState } from "react";
import React, { useState, useEffect } from "react";
import Navbar from "./components/Layout/Navbar/Navbar";
import Intro from "./components/Introduction/Intro";
import Projects from "../src/components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Layout/Footer/Footer";
import SubIcon from "./components/UI/SubIcon";
import HomeLoading from "./components/UI/HomeLoading";
import { ThemeContext } from "./components/UI/themeContext";
import ThemeSwitcher from "./components/UI/ThemeSwitcher";
function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme(theme === "" ? "dark" : "");
  };
  const [homeIsLoading, setHomeIsLoading] = useState(false);

  useEffect(() => {
    setHomeIsLoading(true);

    setTimeout(() => {
      setHomeIsLoading(false);
    }, 5000);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {/* Home Loading */}
      {homeIsLoading && <HomeLoading />}
      <Navbar />
      <div className="App" id={theme}>
        {/* Navbar */}
        <Navbar />
        <main className="main">
          {/* Intro */}
          <Intro />

          {/* Projects */}
          <Projects />

          {/* Contact */}
          <Contact />

          {/* Footer */}
          <Footer />

          {/* Sub Icon */}
          <SubIcon />

          {/* Theme Switcher */}
          <ThemeSwitcher />
        </main>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
