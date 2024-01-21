import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./navbar.css";
import carLogo from "../../assets/1carlogo.png";
import Burger from "./burger";

const NavBar = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  });
  return (
    <div className="container-nav-bar" data-aos="fade-down">
      <div>
        <img src={carLogo} alt="logo" />
      </div>
      <Burger />

      <div className="navbar__buttons">
        <a className="navbar__buttons__signIn" href="/NoPage">
          Sign In
        </a>
        <a className="navbar__buttons__Register" href="/NoPage">
          Register
        </a>
      </div>
    </div>
  );
};

export default NavBar;
