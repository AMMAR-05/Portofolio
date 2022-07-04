import React from "react";
import Navbar from "./components/Layout/Navbar/Navbar";
import Intro from "./components/Introduction/Intro";
import Projects from "../src/components/Projects/Projects";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <>
      <div className="App">
        {/* Home Loading */}

        {/* Navbar */}
        <Navbar />

        {/* Intro */}

        <Intro />

        {/* Projects */}
        <Projects />

        {/* About */}
        <About />

        {/* Contact */}
        <Contact />
      </div>
    </>
  );
}

export default App;
