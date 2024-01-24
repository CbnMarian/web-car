import React, { useState, useEffect } from "react";
import styled from "styled-components";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";

const Button = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: ${({ visible }) => (visible ? "block" : "none")};
  background-color: #ff4d30;
  color: #fff;
  border: none;
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  z-index: 999;

  &:hover {
    background-color: #ff4224;
  }
`;

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Adjust the scroll threshold as needed
    setIsVisible(scrollTop > 300);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Button visible={isVisible} onClick={scrollToTop}>
      <KeyboardDoubleArrowUpIcon />
    </Button>
  );
};

export default ScrollToTopButton;
