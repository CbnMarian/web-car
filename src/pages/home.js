import Hero from "../Components/herosection/herosection";
import NavBar from "../Components/navbar/navbar";
import BookingNow from "../Components/booking/bookingnow";
import PlanSection from "../Components/plansection/plan";
import PickCar from "../Components/pickcar/pickcar";
import Banner from "../Components/banner/banner";
import ChooseUs from "../Components/whyChooseUs/chooseUs";
import Testimonials from "../Components/Testimonialss/testimonials";
import FAQ, { faqs } from "../Components/FAQ/FAQ";
import Download from "../Components/download/download";
import Footer from "../Components/Footer/footer";
import ScrollToTopButton from "../Components/scrollToTop/scrollBtn";

const Home = () => (
  <div>
    <NavBar />
    <Hero />
    <BookingNow />
    <PlanSection />
    <PickCar />
    <Banner />
    <ChooseUs />
    <Testimonials />
    <FAQ data={faqs} />
    <Download />
    <ScrollToTopButton />
    <Footer />
  </div>
);

export default Home;
