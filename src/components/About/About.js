import React from "react";
import "./About.css";
function About() {
  return (
    <section className="about" id="about">
      <div className="aboutme">
        <h2 className="aboutme-title">About me</h2>
        <h3>Born on Syria, living in Germany.</h3>
        <h3>Studied Full-Stack Software Engineering at DCI, Berlin.</h3>
        <h3>Aside from coding, I enjoy designing websites.</h3>
      </div>
      <div className="skills">
        <h2 className="skills-title">Skills</h2>
        <h3>Html | Css | Sass | Bootstrap | Tailwind</h3>
        <h3>Javascript | React | Redux | Node.js | Git</h3>
        <h3>Figma | Photoshop | Illustrator </h3>
      </div>
    </section>
  );
}

export default About;
