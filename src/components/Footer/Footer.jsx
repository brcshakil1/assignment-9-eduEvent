import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="footer p-10 bg-[#222] text-white">
      <aside>
        <img className=" w-20 md:w-28" src={logo} alt="EduEvent" />
        <p>
          Edu Event Ltd.
          <br />
          Providing reliable event management since 1992
        </p>
      </aside>
      <nav>
        <header className="footer-title">Services</header>
        <a className="link link-hover">Workshops and Webinars</a>
        <a className="link link-hover">Career Fairs</a>
        <a className="link link-hover">Educational Conferences</a>
        <a className="link link-hover">Training Programs etc.</a>
      </nav>
      <nav>
        <header className="footer-title">Company</header>
        <a className="link link-hover">About us</a>
        <Link to="/contact">Contact</Link>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav>
        <header className="footer-title">Legal</header>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
    </footer>
  );
};

export default Footer;
