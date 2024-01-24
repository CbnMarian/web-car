import React, { useState, useEffect } from "react";
import styled from "styled-components";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
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
    <Button display={isVisible ? "block" : "none"} onClick={scrollToTop}>
      <KeyboardDoubleArrowUpIcon />
    </Button>
  );
};

const Button = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: ${({ display }) => display};
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

export default ScrollToTopButton;
