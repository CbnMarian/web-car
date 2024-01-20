import React from "react";
import styled from "styled-components";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  z-index: 99;

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
      text-decoration: none; /* Remove underline */
      color: inherit; /* Inherit the color from the parent li */
    }
  }

  @media (max-width: 900px) {
    flex-flow: column nowrap;
    background-color: #ffffff;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 100%;
    padding-top: 3.5rem;
    padding: 10px;
    transition: transform 0.3s ease-in-out;
    align-items: center;

    li {
      color: #000000;
      cursor: pointer;
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
        <a href="/Home" onClick={handleItemClick}>
          Home
        </a>
      </li>
      <li>
        <a href="/About" onClick={handleItemClick}>
          About
        </a>
      </li>
      <li>
        <a href="*" onClick={handleItemClick}>
          Vehicles Models
        </a>
      </li>

      <li>
        <a href="*" onClick={handleItemClick}>
          Testimonials
        </a>
      </li>
      <li>
        <a href="*" onClick={handleItemClick}>
          Our Team
        </a>
      </li>
      <li>
        <a href="*" onClick={handleItemClick}>
          Contact
        </a>
      </li>
    </Ul>
  );
};

export default RightNav;
