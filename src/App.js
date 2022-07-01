import { useEffect, useState } from "react";
import Navbar from "./components/Layout/Navbar/Navbar";
import Intro from "./components/Introduction/Intro";
import Projects from "../src/components/Projects/Projects";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import HomeLoading from "./components/UI/HomeLoading";
// import Footer from "./components/Layout/Footer/Footer";

// import Logo from "./components/Layout/Navbar/images/logo.svg";

function App() {
  const [homeIsLoading, setHomeIsLoading] = useState(false);

  useEffect(() => {
    setHomeIsLoading(true);
    setTimeout(() => {
      setHomeIsLoading(false);
    }, 7000);
  }, []);

  return (
    <div className="App">
      {/* Home Loading */}
      {homeIsLoading && <HomeLoading />}

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

      {/* <Footer /> */}
    </div>
  );
}

export default App;
