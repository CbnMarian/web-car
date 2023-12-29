import "./chooseUs.css";
import React from "react";
import cars from "../../assets/cars.png";

const ChooseUs = () => {
  return (
    <section className="choose-section">
      <div className="container">
        <div choose-contaienr>
          <img className="choose-container__img" src={cars} />
        </div>
        <div className="text-container">
          <div className="text-container__left">
            <h4>why us</h4>
            <h2>Best value</h2>
            <p>lorem iplsmul</p>
            <a href="#home">Find Details</a>
          </div>
          <div className="text-container__right">
            <div className="text-container__right__box">
              <img></img>
              <div className="text-container__right__box__text">
                <h4>bla bla</h4>
                <p>Text text</p>
              </div>
            </div>
            <div className="text-container__right__box">
              <img></img>
              <div className="text-container__right__box__text">
                <h4>bla bla</h4>
                <p>Text text</p>
              </div>
            </div>
            <div className="text-container__right__box">
              <img></img>
              <div className="text-container__right__box__text">
                <h4>bla bla</h4>
                <p>Text text</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
