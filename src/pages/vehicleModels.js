import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import HeroPages from "../Components/HeroPages/HeroPages";
import NavBar from "../Components/navbar/navbar";
import CarImg1 from "../assets/review/car2.png";
import CarImg2 from "../assets/review/car1.png";
import CarImg3 from "../assets/review/car3.png";
import CarImg4 from "../assets/review/car4.png";
import CarImg5 from "../assets/review/car5.png";
import CarImg6 from "../assets/review/car6.png";

import "../Components/Styles/vehicleModels.css";

import Footer from "../Components/Footer/footer";
import BannerCall from "../Components/bannercall/bannercall";
import ScrollToTopButton from "../Components/scrollToTop/scrollBtn";
const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div>
      <div>
        <section className="models-section">
          <NavBar />
          <HeroPages name="Models" />
          <div className="container">
            <div className="models-div">
              <div className="models-div__box" data-aos="fade-down">
                <div className="models-div__box__img">
                  <img src={CarImg1} alt="car_img" />
                  <div className="models-div__box__descr">
                    <div className="models-div__box__descr__name-price">
                      <div className="models-div__box__descr__name-price__name">
                        <p>Audi A1</p>
                        <span>stars</span>
                      </div>
                      <div className="models-div__box__descr__name-price__price">
                        <h4>$25</h4>
                        <p>per day</p>
                      </div>
                    </div>
                    <div className="models-div__box__descr__name-price__details">
                      <span>
                        <p> icon car</p>audi &nbsp;
                      </span>
                      <span style={{ textAlign: "right" }}>
                        4/5 &nbsp; <p>icon car</p>
                      </span>
                      <span>
                        <p>icon car</p> &nbsp; Manual
                      </span>
                      <span style={{ textAlign: "right" }}>
                        Diesel &nbsp; <p>icon car</p>
                      </span>
                    </div>
                    <div>
                      <a className="reserve-now" href="/">
                        RESERVE NOW
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="models-div__box" data-aos="fade-down">
                <div className="models-div__box__img">
                  <img src={CarImg2} alt="car_img" />
                  <div className="models-div__box__descr">
                    <div className="models-div__box__descr__name-price">
                      <div className="models-div__box__descr__name-price__name">
                        <p>Toyota Aygo</p>
                        <span>stars</span>
                      </div>
                      <div className="models-div__box__descr__name-price__price">
                        <h4>$20</h4>
                        <p>per day</p>
                      </div>
                    </div>
                    <div className="models-div__box__descr__name-price__details">
                      <span>
                        <p> icon car</p>audi &nbsp;
                      </span>
                      <span style={{ textAlign: "right" }}>
                        4/5 &nbsp; <p>icon car</p>
                      </span>
                      <span>
                        <p>icon car</p> &nbsp; Manual
                      </span>
                      <span style={{ textAlign: "right" }}>
                        Diesel &nbsp; <p>icon car</p>
                      </span>
                    </div>
                    <div>
                      <a className="reserve-now" href="/">
                        RESERVE NOW
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="models-div__box" data-aos="fade-down">
                <div className="models-div__box__img">
                  <img src={CarImg3} alt="car_img" />
                  <div className="models-div__box__descr">
                    <div className="models-div__box__descr__name-price">
                      <div className="models-div__box__descr__name-price__name">
                        <p>Vw Golf</p>
                        <span>stars</span>
                      </div>
                      <div className="models-div__box__descr__name-price__price">
                        <h4>$30</h4>
                        <p>per day</p>
                      </div>
                    </div>
                    <div className="models-div__box__descr__name-price__details">
                      <span>
                        <p> icon car</p>audi &nbsp;
                      </span>
                      <span style={{ textAlign: "right" }}>
                        4/5 &nbsp; <p>icon car</p>
                      </span>
                      <span>
                        <p>icon car</p> &nbsp; Manual
                      </span>
                      <span style={{ textAlign: "right" }}>
                        Diesel &nbsp; <p>icon car</p>
                      </span>
                    </div>
                    <div>
                      <a className="reserve-now" href="/">
                        RESERVE NOW
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="models-div__box" data-aos="fade-down">
                <div className="models-div__box__img">
                  <img src={CarImg4} alt="car_img" />
                  <div className="models-div__box__descr">
                    <div className="models-div__box__descr__name-price">
                      <div className="models-div__box__descr__name-price__name">
                        <p>Bmw 320</p>
                        <span>stars</span>
                      </div>
                      <div className="models-div__box__descr__name-price__price">
                        <h4>$55</h4>
                        <p>per day</p>
                      </div>
                    </div>
                    <div className="models-div__box__descr__name-price__details">
                      <span>
                        <p> icon car</p>audi &nbsp;
                      </span>
                      <span style={{ textAlign: "right" }}>
                        4/5 &nbsp; <p>icon car</p>
                      </span>
                      <span>
                        <p>icon car</p> &nbsp; Manual
                      </span>
                      <span style={{ textAlign: "right" }}>
                        Diesel &nbsp; <p>icon car</p>
                      </span>
                    </div>
                    <div>
                      <a className="reserve-now" href="/">
                        RESERVE NOW
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="models-div__box" data-aos="fade-down">
                <div className="models-div__box__img">
                  <img src={CarImg5} alt="car_img" />
                  <div className="models-div__box__descr">
                    <div className="models-div__box__descr__name-price">
                      <div className="models-div__box__descr__name-price__name">
                        <p>Mercedes </p>
                        <span>stars</span>
                      </div>
                      <div className="models-div__box__descr__name-price__price">
                        <h4>$60</h4>
                        <p>per day</p>
                      </div>
                    </div>
                    <div className="models-div__box__descr__name-price__details">
                      <span>
                        <p> icon car</p>audi &nbsp;
                      </span>
                      <span style={{ textAlign: "right" }}>
                        4/5 &nbsp; <p>icon car</p>
                      </span>
                      <span>
                        <p>icon car</p> &nbsp; Manual
                      </span>
                      <span style={{ textAlign: "right" }}>
                        Diesel &nbsp; <p>icon car</p>
                      </span>
                    </div>
                    <div>
                      <a className="reserve-now" href="/">
                        RESERVE NOW
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="models-div__box" data-aos="fade-down">
                <div className="models-div__box__img">
                  <img src={CarImg6} alt="car_img" />
                  <div className="models-div__box__descr">
                    <div className="models-div__box__descr__name-price">
                      <div className="models-div__box__descr__name-price__name">
                        <p>Lexus</p>
                        <span>stars</span>
                      </div>
                      <div className="models-div__box__descr__name-price__price">
                        <h4>$70</h4>
                        <p>per day</p>
                      </div>
                    </div>
                    <div className="models-div__box__descr__name-price__details">
                      <span>
                        <p> icon car</p>audi &nbsp;
                      </span>
                      <span style={{ textAlign: "right" }}>
                        4/5 &nbsp; <p>icon car</p>
                      </span>
                      <span>
                        <p>icon car</p> &nbsp; Manual
                      </span>
                      <span style={{ textAlign: "right" }}>
                        Diesel &nbsp; <p>icon car</p>
                      </span>
                    </div>
                    <div>
                      <a className="reserve-now" href="/">
                        RESERVE NOW
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <BannerCall />
          <ScrollToTopButton />

          <Footer />
        </section>
      </div>
    </div>
  );
};
export default Home;
