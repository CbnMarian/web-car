import "./bannercall.css";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const BannerCall = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  });

  return (
    <section className="book-banner" data-aos="fade-up">
      <div className="book-banner__overlay"></div>
      <div className="container">
        <div className="text-content">
          <h2>Book a car by getting in touch with us</h2>
          <span>
            <h3>+40 74655555</h3>
          </span>
        </div>
      </div>
    </section>
  );
};

export default BannerCall;
