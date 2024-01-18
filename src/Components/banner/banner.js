import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import "./banner.css";

const Banner = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  });
  return (
    <section className="banner-section">
      <div className="container">
        <div className="banner-content" data-aos="fade-up">
          <div className="banner-content_text">
            <h2>
              Unlock Affordable Adventures! Drive the Savings with Our
              Budget-Friendly Car Rentals!
            </h2>
            <p>
              Directly form the Airport. <span>24/7</span> Support
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
