import Navbar from "./components/Layout/Navbar/Navbar";
import Intro from "./components/Introduction/Intro";
import Projects from "../src/components/Projects/Projects";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
// import { SectionsContainer, Section } from "react-fullpage";

function App() {
  // let options = {
  //   activeClass: "active", // the class that is appended to the sections links
  //   anchors: ["home", "projects", "about", "contact"], // the anchors for each sections
  //   arrowNavigation: false, // use arrow keys
  //   className: "SectionContainer", // the class name for the section container
  //   delay: 1000, // the scroll animation speed
  //   navigation: false, // use dots navigatio
  //   scrollBar: false, // use the browser default scrollbar
  //   sectionClassName: "Section", // the section class name
  //   verticalAlign: false, // align the content of each section vertical
  // };

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
    </div>
  );
}

export default App;
