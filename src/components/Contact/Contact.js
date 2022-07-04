import React, { useState } from "react";
import "./Contact.css";
import emailjs from "emailjs-com";
import { GiModernCity } from "react-icons/gi";
import { BiCurrentLocation } from "react-icons/bi";
import { HiOutlineMail } from "react-icons/hi";
import { BiMobileAlt } from "react-icons/bi";
import FooterImage from "../Layout/Navbar/images/logo.svg";

function Contact() {
  const [emailSent, setEmailSent] = useState("");
  const [emailSentStaus, setEmailStatus] = useState(false);

  const sendEmail = (e) => {
    setEmailSent(<h3 className="email_status_pending eResult">Sending...</h3>);
    e.preventDefault();
    emailjs
      .sendForm(
        "service_nt23vph",
        "template_o4hb4w8",
        e.target,
        "jrMElmmillptPAm8a"
      )
      .then((res) => {
        setEmailStatus(true);
        setEmailSent(
          <h3 className="email_status_success eResult">
            Email sent successfully
          </h3>
        );
      })
      .catch((err) => {
        setEmailStatus(false);
        setEmailSent(
          <h3 className="email_status_faild eResult">Email Faild</h3>
        );
      });
  };
  return (
    <section className="contact" id="contact">
      <form onSubmit={sendEmail} className="email_container">
        <label htmlFor="fname">Your Name</label>
        <input type="text" id="fname" name="fname" required />

        <label htmlFor="user_email">Your Email</label>
        <input type="email" id="user_email" name="user_email" required />

        <label htmlFor="message">Your Message</label>
        <textarea
          type="text"
          id="message"
          name="message"
          placeholder="write your message"
          required
        />

        <button className="email_btn">Send</button>
        {emailSent}
      </form>

      <div className="contact_infos">
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
