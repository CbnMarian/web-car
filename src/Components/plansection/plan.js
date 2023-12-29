import "./plan.css";
import orangeCircle from "../../assets/transparent.png";
import CarRentalOutlinedIcon from "@mui/icons-material/CarRentalOutlined";
import PhoneForwardedOutlinedIcon from "@mui/icons-material/PhoneForwardedOutlined";
import SurfingOutlinedIcon from "@mui/icons-material/SurfingOutlined";

const PlanSection = () => {
  return (
    <section className="plan-section">
      <div className="container">
        <div className="plan-container">
          <div className="plan-container-title">
            <h3>Easy & Fast</h3>
            <h2>
              Plan your trip <span>NOW</span>
            </h2>
          </div>
          <div className="plan-container-boxes">
            <div className="plan-container-inside">
              <div>
                <img src={orangeCircle} alt="circle" />
                <span>
                  <CarRentalOutlinedIcon style={{ fontSize: "66px" }} />
                </span>
              </div>

              <h3>Select your ride</h3>
              <p>
                We offers a big range of vehicles for all your driving needs. We
                have the perfect car to meet your needs
              </p>
            </div>
            <div className="plan-container-inside">
              <img src={orangeCircle} alt="circle" />
              <span>
                <PhoneForwardedOutlinedIcon style={{ fontSize: "66px" }} />
              </span>
              <h3>Contact Us!</h3>
              <p>
                Our knowledgeable and friendly operators are always ready to
                help with any questions or concerns
              </p>
            </div>
            <div className="plan-container-inside">
              <img src={orangeCircle} alt="circle" />
              <span>
                <SurfingOutlinedIcon style={{ fontSize: "66px" }} />
              </span>
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
