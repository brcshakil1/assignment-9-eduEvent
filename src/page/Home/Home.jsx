import Banner from "../../components/Banner/Banner";
import Contact from "../Contact/Contact";
import Services from "../Services/Services";
import Team from "../Team/Team";

const Home = () => {
  return (
    <div>
      <Banner />
      <div className="max-w-7xl mx-auto">
        <Services />
      </div>
      <Team />
      <Contact />
    </div>
  );
};

export default Home;
