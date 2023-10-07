import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className=" min-h-screen py-20">
      <div className="hero-content py-8  md:py-14">
        <div className=" w-full md:w-[600px] border border-black py-10 md:py-14 px-6 md:px-10">
          <form className="">
            <h2 className="text-2xl md:text-4xl font-semibold text-center">
              Sign up
            </h2>
            <div className="form-control">
              <label className="label pb-3">
                <span className="label-text text-lg">Enter your full name</span>
              </label>
              <input
                type="text"
                placeholder="name@email.com"
                name="name"
                className="border border-black py-2 px-4"
                required
              />
            </div>
            <div className="form-control">
              <label className="label pb-3">
                <span className="label-text text-lg">Email</span>
              </label>
              <input
                type="email"
                placeholder="name@email.com"
                name="email"
                className="border border-black py-2 px-4"
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
                className="py-2 px-4 border border-black"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control py-5">
              <label className="label pb-3">
                <span className="label-text text-lg">Password</span>
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                name="confirmPassword"
                className="py-2 px-4 border border-black"
                required
              />
            </div>
            <div className="form-control py-5 ">
              <button className="btn bg-[#0095bd] text-white">Sign up</button>
            </div>
          </form>
          <div className="flex justify-center items-center gap-2 ">
            <div className="h-[1px] w-[100px] md:w-[160px] bg-gray-500"></div>
            <p className="text-black text-xl pb-1.5">or</p>
            <div className="h-[1px] w-[100px] md:w-[160px] bg-gray-500"></div>
          </div>
          <div className="flex items-center border border-black md:mx-8 mx-6 p-4 md:px-6 rounded-md cursor-pointer mt-5">
            <FcGoogle className="text-xl" />
            <h2 className="mx-auto text-lg md:text-xl font-semibold ">
              Continue with google
            </h2>
          </div>
          <p className="text-center text-lg pt-4">
            Already have an account on EduEvent?{" "}
            <Link className="text-blue-600" to="/login">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
