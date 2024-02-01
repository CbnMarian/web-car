import logo from "../../assets/1carlogo.png";
import "./nav.css";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

const Nav = ({ open, handleClose }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [menuOpen]);

  return (
    <section className="nav-box">
      <div>
        <a href="#home" onClick={handleLinkClick}>
          <img className="logo" src={logo} alt="" />
        </a>
      </div>
      <div
        className="menu"
        onClick={() => {
          setMenuOpen(!menuOpen);
        }}
      >
        {menuOpen ? (
          <CloseIcon sx={{ fontSize: 35 }} />
        ) : (
          <MenuIcon sx={{ fontSize: 35 }} />
        )}
      </div>
      <ul className={`ul-nav-box ${menuOpen ? "open" : ""}`}>
        <li>
          <Link to="/" onClick={handleLinkClick}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/About" onClick={handleLinkClick}>
            About
          </Link>
        </li>
        <li>
          <Link to="/VehicleModels" onClick={handleLinkClick}>
            Vehicles Models
          </Link>
        </li>
        <li>
          <Link to="/Testimonials" onClick={handleLinkClick}>
            Testimonials
          </Link>
        </li>
        <li>
          <Link to="/Contact" onClick={handleLinkClick}>
            Contact
          </Link>
        </li>
      </ul>
    </section>
  );
};

export default Nav;
