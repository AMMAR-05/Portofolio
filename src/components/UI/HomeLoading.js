import React from "react";
import "./HomeLoading.css";
// import Logo from "../Layout/Navbar/images/logo.svg";

function homeLoading() {
  return (
    <div className="loading_bg">
      {/* <div className="logo_container_loading">
        <img className="logo_loading" src={Logo} alt="logo" />
      </div> */}
      <h2 className="animate_charcter">
        <span className="text">DO SOMETHING GREAT</span>
      </h2>
    </div>
  );
}

export default homeLoading;
