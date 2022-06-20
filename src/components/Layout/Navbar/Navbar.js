import React from "react";
import { Link } from "react-scroll";
import "./Navbar.css";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";
function Navbar() {
  return (
    <nav className="navi">
      {/* Brand */}
      <h1 className="brand">AMMAR DANOURA</h1>

      {/* Menu of links */}
      <ul className="menu pointer">
        <Link to="intro" spy={true} smooth={true} offset={0} duration={700}>
          Home
        </Link>
        <Link
          to="projects"
          spy={true}
          smooth={true}
          offset={100}
          duration={700}
        >
          projects
        </Link>
        <Link to="about" spy={true} smooth={true} offset={50} duration={700}>
          About
        </Link>
        <Link to="contact" spy={true} smooth={true} offset={50} duration={700}>
          Contact
        </Link>
      </ul>

      {/* Social media Icons */}
      <div className="social__icon">
        <Link to="/">
          <AiOutlineInstagram className="instagram__icon" />
        </Link>
        <Link to="/">
          <AiOutlineLinkedin className="linkedin__icon" />
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
