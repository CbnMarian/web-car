import "./pickcar.css";
import aygo from "../../assets/aygo.png";

const PickCar = () => {
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
              <button id="btn-1" className="">
                Audi A1
              </button>
              <button id="btn-1" className="">
                VW Golf 6
              </button>
              <button id="btn-1" className="">
                Toyota Aygo
              </button>
              <button id="btn-1" className="">
                BMW 320W
              </button>
              <button id="btn-1" className="">
                Mercedes-Bens GLK
              </button>
              <button id="btn-1" className="">
                Lexus Nx300h
              </button>
            </div>
            <div className="box-cars">
              <div className="pick-car">
                <img src={aygo} alt="car" />
              </div>
              <div className="pick-description">
                <div className="pick-description-price">
                  <span>$ 1</span> / rent per day
                </div>
                <div className="pick-description-table">
                  <div className="pick-description__table__col">
                    <span>Model</span>
                    <span>XXX</span>
                  </div>
                  <div className="pick-description__table__col">
                    <span>Mark</span>
                    <span>XXX</span>
                  </div>
                  <div className="pick-description__table__col">
                    <span>Year</span>
                    <span>XXX</span>
                  </div>
                  <div className="pick-description__table__col">
                    <span>Doors</span>
                    <span>XXX</span>
                  </div>
                  <div className="pick-description__table__col">
                    <span>Ac</span>
                    <span>XXX</span>
                  </div>
                  <div className="pick-description__table__col">
                    <span>Transmission</span>
                    <span>XXX</span>
                  </div>
                  <div className="pick-description__table__col">
                    <span>Fuel</span>
                    <span>XXX</span>
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
