import React, { useState } from "react";
import "./Contact.css";
import emailjs from "emailjs-com";

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
      <form onSubmit={sendEmail} className="form_container">
        <div className="form_inputs">
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
        </div>
      </form>
    </section>
  );
}

export default Contact;
