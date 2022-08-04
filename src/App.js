import React, { useEffect, useState } from "react";
import Navbar from "./components/Layout/Navbar/Navbar";
import Intro from "./components/Introduction/Intro";
import Projects from "../src/components/Projects/Projects";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Layout/Footer/Footer";
import SubIcon from "./components/UI/SubIcon";
import HomeLoading from "./components/UI/HomeLoading";
function App() {
  const [homeIsLoading, setHomeIsLoading] = useState(false);

  useEffect(() => {
    setHomeIsLoading(true);

    setTimeout(() => {
      setHomeIsLoading(false);
    }, 8000);
  }, []);

  return (
    <div className="App">
      {/* Home Loading */}
      {homeIsLoading && <HomeLoading />}
      {/* Navbar */}
      <Navbar />
      <main className="main">
        {/* Intro */}
        <Intro />

        {/* Projects */}
        <Projects />

        {/* About */}
        <About />

        {/* Contact */}
        <Contact />

        {/* Footer */}
        <Footer />
        {/* Sub Icon */}
        <SubIcon />
      </main>
    </div>
  );
}

export default App;
