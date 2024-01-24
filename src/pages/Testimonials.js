import NavBar from "../Components/navbar/navbar";

import Footer from "../Components/Footer/footer";
import BannerCall from "../Components/bannercall/bannercall";
import HeroPages from "../Components/HeroPages/HeroPages";
import Testimonials from "../Components/Testimonialss/testimonials";
import ScrollToTopButton from "../Components/scrollToTop/scrollBtn";

const Home = () => (
  <div>
    <div>
      <>
        <section className="testimonial-page">
          <NavBar />
          <HeroPages name="Testimonials" />
          <Testimonials />
          <ScrollToTopButton />
          <BannerCall />
          <Footer />
        </section>
      </>
    </div>
  </div>
);

export default Home;
