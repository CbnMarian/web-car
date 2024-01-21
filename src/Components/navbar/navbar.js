import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./navbar.css";
import carLogo from "../../assets/1carlogo.png";
import Burger from "./burger";

const NavBar = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className="container-nav-bar" data-aos="fade-down">
      <div>
        <img src={carLogo} alt="logo" />
      </div>
      <Burger />

      <div className="navbar__buttons">
        <Link to="/NoPage" className="navbar__buttons__signIn">
          Sign In
        </Link>
        <Link to="/NoPage" className="navbar__buttons__Register">
          Register
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
