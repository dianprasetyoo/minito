import React from "react";
import Banner from "../../../assets/images/cover/banner.svg";
import BannerMobile from "../../../assets/images/cover/banner-mobile.svg";
import Logo from "../../../assets/images/logo/logo.svg";
import { Button, TextField } from "../../index";
import "./Header.css";
import Hamburger from "../../../assets/icons/hamburger.svg";
import Search from "../../../assets/icons/search.svg";

const Header = () => {
  return (
    <header>
      <div>
        <div className="header-container">
          <img src={Logo} alt="Logo" />
          <div className="header-left">
            <div className={"header-nav font-bold"}>
              <a href="/">Home</a>
              <a href="/">Category</a>
              <a href="/">About</a>
              <a href="/">Contact</a>
            </div>
          </div>
          <div className={"header-right"}>
            <TextField placeholder={"Search something here!"} />
            <Button
              label={"Join the community"}
              type={"fill"}
              size={"medium"}
            />
            <div className={"header-profile"}>
              <div className={"header-profile-identity"}>
                <span className="font-normal text-primary">VND</span>
              </div>
              <span className="chevron bottom"></span>
            </div>
          </div>
        </div>
        <div className="header-content">
          <div style={{ flex: 1 }}>
            <h1 className="text-xxl font-bold text-content">One more friend</h1>
            <h2 className="text-xl font-medium text-content">
              Thousands more fun!
            </h2>
            <p className="text-sm font-medium text-content">
              Having a pet means you have more joy, a new friend, a happy person
              who will always be with you to have fun. We have 200+ different
              pets that can meet your needs!
            </p>
            <div className="button-header-content">
              <div style={{ marginRight: 24 }}>
                <Button
                  label={"View Intro"}
                  type={"outlined"}
                  size={"medium"}
                />
              </div>
              <Button label={"Explore Now"} type={"fill"} size={"medium"} />
            </div>
          </div>
          <div style={{ flex: 1 }}>
            <img
              src={require("../../../assets/images/cover/main-banner.png")}
              alt="Main Banner"
              style={{ height: "76.5vh" }}
            />
          </div>
        </div>

        <div style={{ zIndex: 100, position: "relative" }}>
          <div className="header-container-mobile">
            <img src={Hamburger} alt="Menu" />
            <img src={Logo} alt="Logo" />
            <img src={Search} alt="Search" />
          </div>
          <div className="header-content-mobile">
            <h1 className="text-xxl font-bold text-content-mobile">
              One more friend
            </h1>
            <h2 className="text-xl font-medium text-content-mobile">
              Thousands more fun!
            </h2>
            <p className="text-sm font-medium text-content-mobile">
              Having a pet means you have more joy, a new friend, a happy person
              who will always be with you to have fun. We have 200+ different
              pets that can meet your needs!
            </p>
          </div>
          <div className="main-banner-mobile">
            <img
              src={require("../../../assets/images/cover/main-banner.png")}
              alt="Main Banner"
              style={{ height: "80%", marginTop: 80 , flex: 1 }}
            />
          </div>
        </div>
        <img src={Banner} alt="Logo" className="header-image" />
        <img src={BannerMobile} alt="Logo" className="header-image-mobile" />
      </div>
    </header>
  );
};

export default Header;
