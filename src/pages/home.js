import Hero from "../Components/herosection/herosection";
import NavBar from "../Components/navbar/navbar";
import BookingNow from "../Components/booking/bookingnow";
import PlanSection from "../Components/plansection/plan";
import PickCar from "../Components/pickcar/pickcar";
import Banner from "../Components/banner/banner";

const Home = () => (
  <div>
    <NavBar />
    <Hero />
    <BookingNow />
    <PlanSection />
    <PickCar />
    <Banner />
  </div>
);

export default Home;
