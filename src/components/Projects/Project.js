import React from "react";
import "./Project.css";
import { Link } from "react-router-dom";
import ProjectImage from "./images/Bat.png";
function Project() {
  return (
    <Link to="/projectdetails" className="project">
      <img className="project__image" src={ProjectImage} alt="bat" />
      <h2 className="project__title">Pet Taker</h2>
      <p className="project__description">A full-stack real life project</p>
      <div className="project__technologies">
        <span>REACT</span>
        <span>NODE</span>
        <span>HTML</span>
        <span>CSS</span>
      </div>
      <Link to="/" className="project__link">
        See More
      </Link>
    </Link>
  );
}

export default Project;
