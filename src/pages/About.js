import NavBar from "../Components/navbar/navbar";
import HeroPages from "../Components/HeroPages/HeroPages";
import Rent from "../assets/from outside/rent.jpg";
import Footer from "../Components/Footer/footer";
import PlanSection from "../Components/plansection/plan";
import "../Components/Styles/About.css";
const Home = () => (
  <div>
    <>
      <section className="about-page">
        <NavBar />
        <HeroPages name="About" />
        <div className="container">
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
              <div className="about-main__text__icons">
                <div className="about-main__Text__icons__box">
                  <img alt="img" />
                  <span>
                    <h4>xx</h4>
                    <p>car</p>
                  </span>
                </div>

                <div className="about-main__Text__icons__box">
                  <img alt="img" />
                  <span>
                    <h4>xx</h4>
                    <p>car</p>
                  </span>
                </div>

                <div className="about-main__Text__icons__box">
                  <img alt="img" />
                  <span>
                    <h4>xx</h4>
                    <p>car</p>
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

export default Home;
