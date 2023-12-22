import React, { useState } from "react";
import "./pickcar.css";
import aygo from "../../assets/aygo.png";
import data from "../../assets/data.json";

// Import all car images
import audia1Img from "../../assets/audia1.png";
import golf6Img from "../../assets/golf6.png";
import aygoImg from "../../assets/aygo.png";
import bmw320Img from "../../assets/320w.png";
import glkImg from "../../assets/glk.png";
import nx300Img from "../../assets/nx300.png";

const carImages = {
  audi_a1: audia1Img,
  vw_golf_6: golf6Img,
  toyota_aygo: aygoImg,
  bmw_320: bmw320Img,
  mercedes_benz_glk: glkImg,
  lexus_nx300h: nx300Img,
};

const PickCar = () => {
  const [selectedCar, setSelectedCar] = useState(aygo);
  const [selectedCarData, setSelectedCarData] = useState(null);
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (carKey) => {
    const carData = data.cars.find((car) => car[carKey]);
    if (carData) {
      const selectedCarImage = carImages[carKey];
      setSelectedCar(selectedCarImage);
      setSelectedCarData(carData[carKey]);
      setActiveButton(carKey);
    }
  };

  return (
    <section className="pick-section">
      <div className="container">
        <div className="pick-container">
          <div className="pick-title">
            <h3>Vehicle Model</h3>
            <h2>Our rental fleet</h2>
          </div>
          <div className="pick-container-car-content">
            <div className="pick-box">
              {data.cars.map((car) => {
                const carKey = Object.keys(car)[0];
                return (
                  <button
                    key={carKey}
                    id={`btn-${carKey}`}
                    className={activeButton === carKey ? "active" : ""}
                    onClick={() => handleButtonClick(carKey)}
                  >
                    {car[carKey].model}
                  </button>
                );
              })}
            </div>
            <div className="box-cars">
              <div className="pick-car">
                <img src={selectedCar} alt="car" />
              </div>
              <div className="pick-description">
                <div className="pick-description-price">
                  <span> {selectedCarData?.price_per_day || "45"} &#8364;</span>{" "}
                  / rent per day
                </div>
                <div className="pick-description-table">
                  <div className="pick-description__table__col">
                    <span>Model</span>
                    <span>{selectedCarData?.model || "Aygo"}</span>
                  </div>
                  <div className="pick-description__table__col">
                    <span>Mark</span>
                    <span>{selectedCarData?.mark || "Toyota"}</span>
                  </div>
                  <div className="pick-description__table__col">
                    <span>Year</span>
                    <span>{selectedCarData?.make_year || "2020"}</span>
                  </div>
                  <div className="pick-description__table__col">
                    <span>Doors</span>
                    <span>{selectedCarData?.doors || "5"}</span>
                  </div>
                  <div className="pick-description__table__col">
                    <span>Ac</span>
                    <span>{selectedCarData?.ac || "YES"}</span>
                  </div>
                  <div className="pick-description__table__col">
                    <span>Transmission</span>
                    <span>{selectedCarData?.transmission || "Manual"}</span>
                  </div>
                  <div className="pick-description__table__col">
                    <span>Fuel</span>
                    <span>{selectedCarData?.fuel || "Gasoline + LPG"}</span>
                  </div>
                </div>
                <a className="reserve-now" href="#booking__section">
                  Reserve Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PickCar;
