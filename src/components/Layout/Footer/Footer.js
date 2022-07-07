import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <footer className="copyWriteName">
      <h2>
        AMMAR <span className="year_span">2022</span>
        <span className="copyWriteIcon">&copy;</span>
      </h2>
      {/* <img className="logo_footer" src={FooterImage} alt="logoFooter" /> */}
    </footer>
  );
}

export default Footer;
