import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./plan.css";

import transparent1 from "../../assets/transparent1.png";
import transparent2 from "../../assets/transparent2.png";
import transparent3 from "../../assets/transparent3.png";

const PlanSection = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  });
  return (
    <section className="plan-section">
      <div className="container">
        <div className="plan-container" data-aos="fade-up">
          <div className="plan-container-title">
            <h3>Easy & Fast</h3>
            <h2>
              Plan your trip <span>NOW</span>
            </h2>
          </div>
          <div className="plan-container-boxes">
            <div className="plan-container-inside">
              <div>
                <img src={transparent1} alt="circle" />
              </div>

              <h3>Select your ride</h3>
              <p>
                We offers a big range of vehicles for all your driving needs. We
                have the perfect car to meet your needs
              </p>
            </div>
            <div className="plan-container-inside">
              <img src={transparent2} alt="circle" />

              <h3>Contact Us!</h3>
              <p>
                Our knowledgeable and friendly operators are always ready to
                help with any questions or concerns
              </p>
            </div>
            <div className="plan-container-inside">
              <img src={transparent3} alt="circle" />

              <h3>Let's drive</h3>
              <p>
                Whether you're hitting the open road, we've got you covered with
                our wide range of cars
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default PlanSection;
