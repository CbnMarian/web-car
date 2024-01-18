import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./herosection.css";
import toyotaimg from "../../assets/toyota.png";
import pataportocalie from "../../assets/pata_portocalie.png";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
//
//
const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  });
  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="hero__content" data-aos="fade-up">
          <img className="bg-shape" src={pataportocalie} alt="img-bg" />
          <div className="hero__content__text" data-aos="fade-right">
            <h4>Rent a Car</h4>
            <h1>
              Do it <span>FAST</span> and <span>EASY</span>
            </h1>
            <p>
              Discover the ideal car for your journey. Enjoy unbeatable prices,
              unlimited miles, and flexible pick-up options, ensuring a seamless
              and unforgettable travel experience.
            </p>
            <div className="hero__content__btn">
              <a className="hero__content__btn__book" href="/book-ride">
                Book Ride{" "}
                <CheckCircleOutlineOutlinedIcon style={{ marginLeft: "8px" }} />
              </a>
              <a className="hero__content__btn__learn" href="/learn-more">
                Learn More <ArrowForwardIosIcon style={{ marginLeft: "8px" }} />
              </a>
            </div>
          </div>
          <img className="hero__content__car" src={toyotaimg} alt="car-img" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
