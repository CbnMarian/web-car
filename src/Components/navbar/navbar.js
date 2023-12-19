import React from "react";
import "./navbar.css";
import carLogo from "../../assets/1carlogo.png";
import Burger from "./burger";

const NavBar = () => {
  return (
    <div className="container-nav-bar">
      <div>
        <img src={carLogo} alt="logo" />
      </div>
      <Burger />

      <div className="navbar__buttons">
        <a className="navbar__buttons__signIn" href="/signin">
          Sign In
        </a>
        <a className="navbar__buttons__Register" href="/register">
          Register
        </a>
      </div>
    </div>
  );
};

export default NavBar;
