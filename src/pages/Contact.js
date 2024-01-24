import NavBar from "../Components/navbar/navbar";

import PlanSection from "../Components/plansection/plan";

import ChooseUs from "../Components/whyChooseUs/chooseUs";

import Footer from "../Components/Footer/footer";
import BannerCall from "../Components/bannercall/bannercall";
import ScrollToTopButton from "../Components/scrollToTop/scrollBtn";

const Home = () => (
  <div>
    <NavBar />

    <PlanSection />

    <ChooseUs />

    <BannerCall />
    <ScrollToTopButton />
    <Footer />
  </div>
);

export default Home;
