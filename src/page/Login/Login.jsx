import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import toast from "react-hot-toast";

const Login = () => {
  const { userLogin, googleSignIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleGoogleSignUp = () => {
    googleSignIn()
      .then((result) => {
        if (result.user) {
          toast.success("User created successfully!");
          navigate(location?.state ? location.state : "/");
        }
      })
      .catch((err) => toast.error(err.message));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    userLogin(email, password)
      .then((result) => {
        if (result.user) {
          toast.success("User logged in successfully!");
          navigate(location?.state ? location.state : "/");
        }
      })
      .catch((err) => {
        if (err) {
          toast.error(err.message);
        }
      });
  };

  return (
    <div className=" min-h-screen py-20">
      <div className="hero-content py-8  md:py-14">
        <div className=" w-full md:w-[600px] mx-auto border border-black py-10 md:py-14 px-6 md:px-10">
          <form onSubmit={handleLogin} className="">
            <h2 className="text-2xl md:text-4xl font-semibold text-center text-[#333]">
              Welcome back
            </h2>
            <div className="form-control">
              <label className="label pb-3">
                <span className="label-text text-lg">Email</span>
              </label>
              <input
                type="email"
                placeholder="name@email.com"
                name="email"
                className="border border-black rounded py-2 px-4"
                required
              />
            </div>
            <div className="form-control py-5">
              <label className="label pb-3">
                <span className="label-text text-lg">Password</span>
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                name="password"
                className="py-2 px-4 border border-black rounded"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control py-5 ">
              <button className="btn bg-[#1861c5] hover:bg-[#3e73be] text-white">
                Login
              </button>
            </div>
          </form>
          <div className="flex justify-center items-center gap-2 ">
            <div className="h-[1px] w-[100px] md:w-[160px] bg-gray-500"></div>
            <p className="text-black text-xl pb-1.5">or</p>
            <div className="h-[1px] w-[100px] md:w-[160px] bg-gray-500"></div>
          </div>
          <div
            onClick={handleGoogleSignUp}
            className="flex items-center border border-black p-4 md:px-6 rounded-md cursor-pointer mt-5"
          >
            <FcGoogle className="text-xl" />
            <h2 className="mx-auto text-sm md:text-xl font-semibold text-[#333]">
              Continue with google
            </h2>
          </div>
          <p className="text-center text-lg pt-4">
            New to EduEvent?{" "}
            <Link className="text-[#1861c5] font-bold" to="/signUp">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
