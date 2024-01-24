import NavBar from "../Components/navbar/navbar";
import "../Components/Styles/contact.css";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer/footer";
import BannerCall from "../Components/bannercall/bannercall";
import ScrollToTopButton from "../Components/scrollToTop/scrollBtn";
import HeroPages from "../Components/HeroPages/HeroPages";
import PhoneForwardedIcon from "@mui/icons-material/PhoneForwarded";
import EmailIcon from "@mui/icons-material/Email";
import NavigationIcon from "@mui/icons-material/Navigation";

const Home = () => (
  <>
    <section className="contact-page">
      <NavBar />
      <HeroPages name="Contact" />
      <div className="container">
        <div className="contact-div">
          <div className="contact-div__text">
            <h2>Need more information?</h2>
            <p>
              We are a diverse team of experts excelling in various areas of
              research, development, and learning. With over 15 years of
              collective experience, we're here to assist you.
            </p>
            <Link to="/Contact">
              <PhoneForwardedIcon />
              &nbsp; +40 74655555
            </Link>
            <Link to="/Contact">
              <EmailIcon />
              &nbsp; rentacar@gmail.com
            </Link>
            <Link to="/Contact">
              <NavigationIcon />
              &nbsp; Bucharest, Romania
            </Link>
          </div>
          <div className="contact-div__form">
            <form>
              <label>
                Full Name <b>*</b>
              </label>
              <input type="text" placeholder='E.g: "Joe Shmoe"'></input>

              <label>
                Email <b>*</b>
              </label>
              <input type="email" placeholder="youremail@example.com"></input>

              <label>
                Tell us about it <b>*</b>
              </label>
              <textarea placeholder="Write Here.."></textarea>

              <button type="submit">&nbsp; Send Message</button>
            </form>
          </div>
        </div>
      </div>
      <ScrollToTopButton />
      <BannerCall />
      <Footer />
    </section>
  </>
);

export default Home;
