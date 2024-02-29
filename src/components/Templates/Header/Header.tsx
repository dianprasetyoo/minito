import React from "react";
import Banner from "../../../assets/images/cover/banner.svg";
import Logo from "../../../assets/images/logo/logo.svg";
import { Button, TextField } from "../../index";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <div>
        <div className="header-container">
        <div className="logo">
            <img src={Logo} alt="Logo"/>
            </div>
          <div className="header-left">
            
            <div className={"header-nav font-bold"}>
              <a href="/">Home</a>
              <a href="/">Category</a>
              <a href="/">About</a>
              <a href="/">Contact</a>
            </div>
          </div>
          <div className={"header-right"}>
          <TextField
          placeholder={"Search something here!"}
          // icon={false}
          // type={"flat"}
        />
          <Button label={"Join the community"} type={"fill"} size={"medium"} />
          <div className={"header-profile"}>
          <div className={"header-profile-identity"}>
            {/* <Profile /> */}
            <span className="font-normal text-primary">VND</span>
          </div>
          <span className="chevron bottom"></span>
        </div>
        </div>
        </div> 
        <div className="header-container-mobile"> </div>
        <img src={Banner} alt="Logo" className="header-image" />
      </div>
    </header>
  );
};

export default Header;
