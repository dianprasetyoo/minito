import React from "react";
import Banner from "../../../assets/images/cover/banner.svg";
import Logo from "../../../assets/images/logo/logo.svg";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <div>
        <div className="header-container">
          <div className="header-left">
            <img src={Logo} alt="Logo" className="header" />
            <div
              className={"header-nav font-bold"}
            >
              <a href="/">Home</a>
              <a href="/">Category</a>
              <a href="/">About</a>
              <a href="/">Contact</a>
            </div>
          </div>
        </div>
        <img src={Banner} alt="Logo" className="header-image" />
      </div>
    </header>
  );
};

export default Header;
