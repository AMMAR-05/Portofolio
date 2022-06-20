import React from "react";
import "./intro.css";
import AmmarImg from "./images/Ammar.JPG";
import { FaDev } from "react-icons/fa";
import { MdLocationCity } from "react-icons/md";
function Intro() {
  return (
    <section className="intro">
      <div className="intro__image-container">
        <img className="intro__image" src={AmmarImg} alt="" />
      </div>

      <div className="intro_info">
        <div className="intro__text">
          {/* Title */}
          <h2>Hi, I'm Ammar. I design & build user interfaces.</h2>

          {/* Job */}
          <div className="intro__job">
            <FaDev className="intro__icon" />
            <p>Web Developer</p>
          </div>

          {/* Location */}
          <div className="intro__location">
            <MdLocationCity className="intro__icon" />
            <p>Germany, Duesseldorf</p>
          </div>
        </div>
      </div>

      {/* More Info */}
      <div className="moreInfo">
        <p>Take a look at my projects</p>
        <p>More about me</p>
        <p>Contact me</p>
      </div>
    </section>
  );
}

export default Intro;
