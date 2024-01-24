import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  z-index: 99;
  position: sticky;
  top: 0;
  margin: 0;

  li {
    list-style-type: none;
    display: inline-block;
    padding: 10px;
    text-decoration: none;
    color: #000;
    font-weight: bold;
    transition: color 0.3s ease;
    &:hover {
      cursor: pointer;
      color: #ff4d30;
    }

    a {
      text-decoration: none;
      color: inherit;
    }
  }

  @media (max-width: 900px) {
    flex-flow: column nowrap;
    background-color: #ffffff;
    position: fixed;
    top: 0;
    right: ${({ open }) => (open ? "0" : "-100%")};
    height: 100vh;
    width: 100%;
    gap: 1rem;
    padding: 10px;
    transition: right 0.3s ease-in-out;
    align-items: center;
    z-index: 100;
    justify-content: center;
    font-size: 24px;

    li {
      color: #000000;

      font-weight: 500;
      white-space: nowrap;

      a {
        text-decoration: none;
        color: inherit;
        white-space: nowrap;
      }
    }
  }
`;
const RightNav = ({ open, handleClose }) => {
  const handleItemClick = () => {
    handleClose();
  };

  return (
    <Ul open={open}>
      <li>
        <Link to="/" onClick={handleItemClick}>
          Home
        </Link>
      </li>
      <li>
        <Link to="/About" onClick={handleItemClick}>
          About
        </Link>
      </li>
      <li>
        <Link to="/VehicleModels" onClick={handleItemClick}>
          Vehicles Models
        </Link>
      </li>
      <li>
        <Link to="/Testimonials" onClick={handleItemClick}>
          Testimonials
        </Link>
      </li>
      <li>
        <Link to="/NoPage" onClick={handleItemClick}>
          Our Team
        </Link>
      </li>
      <li>
        <Link to="/NoPage" onClick={handleItemClick}>
          Contact
        </Link>
      </li>
    </Ul>
  );
};

export default RightNav;
