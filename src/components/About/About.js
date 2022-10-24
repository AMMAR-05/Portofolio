import React from "react";
import "./About.css";
import { FaReact } from "react-icons/fa";
import { ImHtmlFive2 } from "react-icons/im";
import { SiCss3 } from "react-icons/si";
import { IoLogoSass } from "react-icons/io";
import { SiBootstrap } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { FaGitSquare } from "react-icons/fa";
import { FiFigma } from "react-icons/fi";
import { SiAdobephotoshop } from "react-icons/si";
function About() {
  return (
    <section className="about" id="about">
      <div className="aboutme">
        <span className="aboutme_title">About me</span>
        <h3>Born on Syria, living in Germany.</h3>
        <h3>Studied Full-Stack Software Engineering at DCI, Berlin.</h3>
        <h3>Aside from coding, I enjoy designing websites.</h3>
      </div>
      <div className="skills">
        <h2 className="skills_title">Skills</h2>
        <SiJavascript className="skills_icon js_icon" />
        <FaReact className="skills_icon react_icon" />
        <SiRedux className="skills_icon redux_icon" />

        <ImHtmlFive2 className="skills_icon html_icon" />
        <SiCss3 className="skills_icon css_icon" />
        <IoLogoSass className="skills_icon sass_icon" />
        <SiTailwindcss className="skills_icon twc_icon" />
        <SiBootstrap className="skills_icon bt_icon" />

        <FaGitSquare className="skills_icon git_icon" />
        <FaNode className="skills_icon node_icon" />

        <FiFigma className="skills_icon figma_icon" />
        <SiAdobephotoshop className="skills_icon ps_icon" />

        {/* <h3>Html | Css | Sass | Bootstrap | Tailwind</h3>
        <h3>Javascript | React | Redux | Node.js | Git</h3>
        <h3>Figma | Photoshop </h3> */}
      </div>
    </section>
  );
}

export default About;
