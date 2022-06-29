import React from "react";
import "./Contact.css";
import { GiModernCity } from "react-icons/gi";
import { BiCurrentLocation } from "react-icons/bi";
import { HiOutlineMail } from "react-icons/hi";
import { BiMobileAlt } from "react-icons/bi";
import FooterImage from "../Layout/Navbar/images/logo.svg";

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="email_container">
        <label for="fname">Your Name</label>
        <input type="text" id="fname" name="fname" />

        <label for="email">Your Email</label>
        <input type="text" id="email" name="email" />

        <label for="message">Your Message</label>
        <textarea
          type="text"
          id="message"
          name="message"
          placeholder="write your message"
        />

        <button className="email_btn">Send</button>
      </div>
      <div className="contact_infos">
        <h3 className="contact_title">Contact</h3>
        <div className="personal_info">
          <div>
            <GiModernCity className="contact_icon" />
            <p className="myCity">Germany, Duesseldorf</p>
          </div>
          <div>
            <BiCurrentLocation className="contact_icon" />
            <p className="myAdress">Chemnitzer Str. 45</p>
          </div>
          <div>
            <HiOutlineMail className="contact_icon" />
            <p className="myEmail">ammardan.5d@gmail.com</p>
          </div>
          <div>
            <BiMobileAlt className="contact_icon" />
            <p className="myNumber">+49 &#40;0&#41; 15778812707</p>
          </div>
        </div>
        {/* <div className="personal_icon">
          <p>Icon1</p>
          <p>Icon2</p>
          <p>Icon3</p>
        </div> */}
      </div>
      <div className="copyWriteName">
        <h2>
          AMMAR <span className="year_span">2022</span>
          <span className="copyWriteIcon">&copy;</span>
        </h2>
        <img className="logo_footer" src={FooterImage} alt="logoFooter" />
      </div>
    </section>
  );
}

export default Contact;
