import "./herosection.css";
import toyotaimg from "../../assets/toyota.png";
import pataportocalie from "../../assets/pata_portocalie.png";
//
//
const Hero = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <img className="bg-shape" src={pataportocalie} alt="img-bg" />
        <div className="hero__content">
          <div className="hero__content__text">
            <h4>Rent a Car</h4>
            <h1>
              Do it <span>FAST</span> and <span>EASY</span>
            </h1>
            <p>
              Discover the ideal car for your journey. Enjoy unbeatable prices,
              unlimited miles, and flexible pick-up options, ensuring a seamless
              and unforgettable travel experience.
            </p>
          </div>
          <img src={toyotaimg} alt="car-img" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
