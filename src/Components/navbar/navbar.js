import React from "react";
import "./navbar.css";

const NavBar = () => {
  return (
    <div className="container-nav-bar">
      <div>
        <img src="../../assets/new-profile.jpg" alt="logo" />
      </div>
      <ul className="navbar__middle">
        <li>Home</li>
        <li>About</li>
        <li>Vehicle Models</li>
        <li>Testimonials</li>
        <li>Our Team</li>
        <li>Contact</li>
      </ul>
      <div className="navbar__buttons">
        <a className="navbar__buttons__signIn" href="#">
          Sign In
        </a>
        <a className="navbar__buttons__Register" href="#">
          Register
        </a>
      </div>
      <div className="mobile-hamb">X</div>
    </div>
  );
};

export default NavBar;
