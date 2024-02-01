import Footer from "../Components/Footer/footer";
import BannerCall from "../Components/bannercall/bannercall";
import HeroPages from "../Components/HeroPages/HeroPages";
import Testimonials from "../Components/Testimonialss/testimonials";
import ScrollToTopButton from "../Components/scrollToTop/scrollBtn";
import Nav from "../Components/nav/nav";

const Home = () => (
  <div>
    <div>
      <>
        <section className="testimonial-page">
          <Nav />
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
