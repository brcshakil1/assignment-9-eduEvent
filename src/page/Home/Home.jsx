import { useEffect } from "react";
import Banner from "../../components/Banner/Banner";
import Contact from "../Contact/Contact";
import Services from "../Services/Services";
import Team from "../Team/Team";
import Aos from "aos";
import "aos/dist/aos.css";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div>
      <Banner />
      <div className="max-w-7xl mx-auto" data-aos="fade-up">
        <Services />
      </div>
      <div data-aos="fade-up">
        <Team />
      </div>
      <div data-aos="fade-up">
        <Contact />
      </div>
      <div data-aos="fade-up">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
