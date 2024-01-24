import NavBar from "../Components/navbar/navbar";

import PlanSection from "../Components/plansection/plan";

import ChooseUs from "../Components/whyChooseUs/chooseUs";

import Footer from "../Components/Footer/footer";
import ScrollToTopButton from "../Components/scrollToTop/scrollBtn";

const Home = () => (
  <div>
    <NavBar />

    <PlanSection />

    <ChooseUs />
    <ScrollToTopButton />

    <Footer />
  </div>
);

export default Home;
