import Hero from "../Components/herosection/herosection";
import NavBar from "../Components/navbar/navbar";
import BookingNow from "../Components/booking/bookingnow";
import PlanSection from "../Components/plansection/plan";
const Home = () => (
  <div>
    <NavBar />
    <Hero />
    <BookingNow />
    <PlanSection />
  </div>
);

export default Home;
