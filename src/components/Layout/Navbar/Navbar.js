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
      <Link
        to="intro"
        spy={true}
        smooth={true}
        duration={900}
        className="logo-container"
      >
        <img className="logo" src={Logo} alt="logo" />
      </Link>

      {/* Menu of links */}
      <ul className="menu pointer">
        <li>
          <Link
            to="about"
            activeClass="active"
            spy={true}
            smooth={true}
            duration={900}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="projects"
            activeClass="active"
            spy={true}
            smooth={true}
            duration={900}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            activeClass="active"
            spy={true}
            smooth={true}
            duration={900}
          >
            Contact
          </Link>
        </li>
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
          href="https://www.linkedin.com/in/ammar-danoura/"
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
