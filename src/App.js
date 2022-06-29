import Navbar from "./components/Layout/Navbar/Navbar";
import Intro from "./components/Introduction/Intro";
import Projects from "../src/components/Projects/Projects";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Layout/Footer/Footer";

function App() {
  return (
    <div className="App">
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
