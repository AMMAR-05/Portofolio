import Navbar from "./components/Layout/Navbar/Navbar";
import Intro from "./components/Introduction/Intro";
import Projects from "../src/components/Projects/Projects";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Footer from "./components/Layout/Footer/Footer";
function App(props) {
  return (
    <div className="App">
      {/* Navbar */}
      <Navbar />
      {/* Home */}
      <Intro />
      {/* Projects */}
      <Projects />
      {/* About */}
      <About />
      {/* Contact */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
