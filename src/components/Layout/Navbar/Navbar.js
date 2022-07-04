import React from "react";
import "./Navbar.css";
import { Link } from "react-scroll";
import { AiOutlineLinkedin } from "react-icons/ai";
import { AiOutlineGithub } from "react-icons/ai";
import Logo from "./images/logo.svg";
function Navbar() {
  return (
    <nav className="navi">
      {/* Brand */}
      <div className="logo-container">
        <img className="logo" src={Logo} alt="logo" />
      </div>

      {/* Menu of links */}
      <ul className="menu pointer">
        <Link
          activeClass="active"
          spy={true}
          to="intro"
          smooth={true}
          duration={900}
        >
          Home
        </Link>
        <Link
          activeClass="active"
          spy={true}
          to="projects"
          smooth={true}
          duration={900}
        >
          Projects
        </Link>
        <Link
          activeClass="active"
          spy={true}
          to="about"
          smooth={true}
          duration={900}
        >
          About
        </Link>
        <Link
          activeClass="active"
          spy={true}
          to="contact"
          smooth={true}
          duration={900}
        >
          Contact
        </Link>
      </ul>

      {/* Social media Icons */}
      <div className="social__icon">
        <a
          href="https://github.com/AMMAR-05"
          className="githubLink"
          target="blank"
        >
          <AiOutlineGithub className="github__icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/ammar-danoura-794b49227/"
          className="linkedinLink"
          target="blank"
        >
          <AiOutlineLinkedin className="linkedin__icon" />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
