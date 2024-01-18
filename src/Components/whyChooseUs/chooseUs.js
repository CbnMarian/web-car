import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./chooseUs.css";
import cars from "../../assets/cars.png";
import attention from "../../assets/attention.png";
import bluebmw from "../../assets/bmwblue.png";
import dollar from "../../assets/dollar sign.png";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const ChooseUs = () => {
  return (
    <section className="choose-section">
      <div className="container" data-aos="fade-up">
        <div choose-contaienr>
          <img className="choose-container__img" src={cars} alt="cars-fundal" />
        </div>
        <div className="text-container">
          <div className="text-container__left">
            <h4>Why To Pick Us!</h4>
            <h2>
              Explore our unbeatable offers, delivering the best value you'll
              ever find!
            </h2>
            <p>
              Explore unmatched savings with our extraordinary deals! We are
              committed to delivering unparalleled value, ensuring you access
              premium services and products without straining your budget. Dive
              into a world of unbeatable offers tailored to enhance your renting
              experience. Don't let this opportunity slip away – seize the
              chance to save significantly and embark on a journey of
              affordability and excellence!
            </p>
            <a href="#home">
              Find Details
              <ArrowForwardIosIcon style={{ marginLeft: "8px" }} />
            </a>
          </div>
          <div className="text-container__right">
            <div className="text-container__right__box">
              <img src={bluebmw} alt="IMG" />
              <div className="text-container__right__box__text">
                <h4>Discover the Boundless Beauty</h4>
                <p>
                  Elevate your road trip experience with our premium fleet of
                  vehicles, perfect for your cross-country adventures.
                </p>
              </div>
            </div>
            <div className="text-container__right__box">
              <img src={dollar} alt="IMG" />
              <div className="text-container__right__box__text">
                <h4>All Inclusive</h4>
                <p>
                  Your All-Inclusive Journey Starts with Transparent Pricing.
                </p>
              </div>
            </div>
            <div className="text-container__right__box">
              <img src={attention} alt="IMG" />
              <div className="text-container__right__box__text">
                <h4>No Hidden Charges</h4>
                <p>
                  Unwind with Our Honest and Transparent Pricing - No Hidden
                  Charges, Only Peace of Mind.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
