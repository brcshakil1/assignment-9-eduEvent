import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import { RiMenuFill } from "react-icons/ri";
import { GrClose } from "react-icons/gr";

import { useState } from "react";

const Navbar = () => {
  const [isTrue, setIsTrue] = useState(false);

  const handleMenuToggle = () => {
    setIsTrue(!isTrue);
  };

  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/services">Services</NavLink>
      </li>
      <li>
        <NavLink to="/about">About Us</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
    </>
  );

  return (
    <div className="flex justify-between items-center py-8 px-4 max-w-7xl mx-auto relative">
      <div onClick={handleMenuToggle} className=" block md:hidden">
        {isTrue ? (
          <GrClose className="text-2xl z-50 absolute top-28 right-4 cursor-pointer" />
        ) : (
          <RiMenuFill className="text-2xl cursor-pointer" />
        )}
      </div>
      <div>
        <Link to="/">
          <img className="w-32 md:w-40" src={logo} alt="" />
        </Link>
      </div>
      <div
        className={`absolute md:hidden top-24 left-0 z-20 md:z-0 w-full h-screen md:h-auto bg-white md:bg-none py-8 px-10 ${
          isTrue ? "block" : "hidden"
        }`}
      >
        <div className="block md:hidden">
          <div className="flex items-center gap-3 mb-5 ">
            <div className="w-14 h-14 grid place-items-center border-2 rounded-full">
              <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
            <h2 className="font-bold">Bayazid</h2>
          </div>
        </div>
        <hr />
        <ul className="  md:flex gap-6 space-y-3 my-5">{navLinks}</ul>
      </div>
      <ul className="hidden md:flex gap-5 text-lg">{navLinks}</ul>

      <div className="flex items-center gap-3">
        <button className="py-2 px-4 bg-[#0095bd] rounded-md text-white font-bold">
          <Link to="/login" className="text-lg">
            Login
          </Link>
        </button>
        <div className="hidden md:block dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
