import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import { RiMenuFill } from "react-icons/ri";
import { GrClose } from "react-icons/gr";
import userImg from "../../assets/user.png";

import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
import toast from "react-hot-toast";

const Navbar = () => {
  const [isTrue, setIsTrue] = useState(false);
  const { user, userLogout, loading } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleMenuToggle = () => {
    setIsTrue(!isTrue);
  };

  // user logout
  const handleLogout = () => {
    userLogout()
      .then(() => {
        toast("User logged out");
        navigate("/");
      })
      .catch((err) => toast(err.message));
  };

  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
      <li>
        <NavLink to="/team">Team</NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink to="/sendMessage">Send Message</NavLink>
          </li>
          <li>
            <NavLink to="/profile">Profile</NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="flex justify-between items-center p-4 max-w-7xl mx-auto relative">
      <div onClick={handleMenuToggle} className=" block md:hidden">
        {isTrue ? (
          <GrClose className="text-2xl z-50 absolute top-28 right-4 cursor-pointer" />
        ) : (
          <RiMenuFill className="text-2xl cursor-pointer" />
        )}
      </div>
      <div>
        <Link to="/">
          <img className="w-28 md:w-36" src={logo} alt="" />
        </Link>
      </div>
      {/* mobile nav start */}
      <div
        className={`absolute md:hidden top-24 left-0 z-20 md:z-0 w-full h-screen md:h-auto bg-white md:bg-none py-8 px-10 ${
          isTrue ? "block" : "hidden"
        }`}
      >
        {user && (
          <div className="block md:hidden">
            <div className="flex items-center gap-3 mb-5 ">
              <div className="w-14 h-14 grid place-items-center border-2 rounded-full">
                <img
                  className="rounded-full"
                  src={`${user?.photoURL || userImg}`}
                />
              </div>
              <h2 className="font-bold">{user?.displayName}</h2>
            </div>
          </div>
        )}
        <hr className="mt-3" />
        <ul className="  md:flex gap-6 space-y-3 my-5">{navLinks}</ul>
        <hr />
        {user && (
          <button
            onClick={handleLogout}
            className="py-2 px-4 bg-[#0095bd] rounded-md text-white font-bold mt-5"
          >
            Logout
          </button>
        )}
      </div>
      {/* mobile nav end */}
      <ul className="hidden md:flex gap-5 text-lg">{navLinks}</ul>

      <div className="flex items-center gap-3">
        {user ? (
          <div className="hidden md:block dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={`${user?.photoURL || userImg}`} />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between" title={user?.displayName}>
                  {user?.displayName.slice(0, 15)}...
                </a>
              </li>
              <li onClick={handleLogout}>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        ) : (
          !loading && (
            <Link to="/login" className="text-lg">
              <button className="py-2 px-4 bg-[#0095bd] rounded-md text-white font-bold">
                Login
              </button>
            </Link>
          )
        )}
      </div>
    </div>
  );
};

export default Navbar;
