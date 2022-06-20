import React from "react";
import "./About.css";
import { MdOutlineComputer } from "react-icons/md";
function About() {
  return (
    <div className="about">
      {/* Deatils */}
      <div className="about__details">
        <span className="about__title">web development</span>
        <MdOutlineComputer className="about__icon" />
        <h2 className="about__job">full stack developer</h2>
      </div>

      {/* Skills */}
      <div className="skills">
        <h2 className="skills__title">technical skills</h2>
        <div className="skills__list">
          HTML | CSS | JAVASCRIPT | REACT | NEXT.JS | BOOTSTRAP | TAILWIND |
          SASS | NODE.JS | EXPRESSE | MONGODB | GIT | MYSQL
        </div>
      </div>
      <div className="skills__rate">
        <span className="skills__rate__javascript">javascript</span>
        <span className="skills__rate__react">react</span>
        <span className="skills__rate__html">html</span>
        <span className="skills__rate__css">css</span>
      </div>
    </div>
  );
}

export default About;
