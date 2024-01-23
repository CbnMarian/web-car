import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import NavBar from "../Components/navbar/navbar";
import HeroPages from "../Components/HeroPages/HeroPages";
import Rent from "../assets/from outside/rent.jpg";
import Footer from "../Components/Footer/footer";
import PlanSection from "../Components/plansection/plan";
import "../Components/Styles/About.css";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import ConstructionIcon from "@mui/icons-material/Construction";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div>
      <>
        <section className="about-page">
          <NavBar />
          <HeroPages name="About" />
          <div className="container" data-aos="fade-down">
            <div className="about-main">
              <img className="about-main__img" src={Rent} alt="car-renting" />
              <div className="about-main__text">
                <h3>About Company</h3>
                <h2>
                  Engine starts, adventure begins. Road beckons, stories unfold.
                </h2>
                <p>
                  In the cottage, certainty mingles with her shyness. The
                  gentleman, assertive, places instruments, his entreaties
                  occasionally affronting. A pretense of exquisite encounters
                  warmly invites. Weeks pass quietly, vexed and uncertain.
                  Motionless, no precaution to affronting imprudence. My
                  indulgence, a disposal attended to with strength.
                </p>
                <div className="about-main__text__icons" data-aos="fade-down">
                  <div className="about-main__Text__icons__box">
                    <LocationCityIcon style={{ color: "#ff4d30" }} />
                    <span>
                      <h4>10</h4>
                      <p>Car Types</p>
                    </span>
                  </div>

                  <div className="about-main__Text__icons__box">
                    <DirectionsCarIcon style={{ color: "#ff4d30" }} />
                    <span>
                      <h4>2</h4>
                      <p>Rental Outlets</p>
                    </span>
                  </div>

                  <div className="about-main__Text__icons__box">
                    <ConstructionIcon style={{ color: "#ff4d30" }} />
                    <span>
                      <h4>7</h4>
                      <p>Repair Shop</p>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <PlanSection />

          <Footer />
        </section>
      </>
    </div>
  );
};

export default Home;
