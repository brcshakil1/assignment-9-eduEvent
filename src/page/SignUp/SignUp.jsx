import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import toast from "react-hot-toast";
import { updateProfile } from "firebase/auth";

const SignUp = () => {
  const { createUser, googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleCreateUser = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;

    if (name === "" || name === " ") {
      toast.error("Full name is required");
      return;
    }

    if (confirmPassword === "" || confirmPassword === " ") {
      toast.error("Confirm password is required");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Password doesn't match");
      return;
    }

    createUser(email, password)
      .then((result) => {
        if (result.user) {
          toast.success("User created successfully!");
          navigate("/");
        }
        updateProfile(result.user, { displayName: name });
      })
      .catch((err) => toast.error(err.message));
  };

  const handleGoogleSignUp = () => {
    googleSignIn()
      .then((result) => {
        if (result.user) {
          toast.success("User created successfully!");
          navigate("/");
        }
      })
      .catch((err) => toast.error(err.message));
  };

  return (
    <div className=" min-h-screen py-20">
      <div className="hero-content py-8  md:py-14">
        <div className=" w-full md:w-[600px] border border-black py-10 md:py-14 px-6 md:px-10">
          <form onSubmit={handleCreateUser} className="">
            <h2 className="text-2xl md:text-4xl font-semibold text-center">
              Sign up
            </h2>
            <div className="form-control">
              <label className="label pb-3">
                <span className="label-text text-lg uppercase">Full name</span>
              </label>
              <input
                type="text"
                placeholder="Enter your full name"
                name="name"
                className="border border-black py-2 px-4 rounded"
              />
            </div>
            <div className="form-control">
              <label className="label pb-3">
                <span className="label-text text-lg uppercase">Email</span>
              </label>
              <input
                type="email"
                placeholder="name@email.com"
                name="email"
                className="border border-black py-2 px-4 rounded"
                required
              />
            </div>
            <div className="form-control py-5">
              <label className="label pb-3">
                <span className="label-text text-lg uppercase">Password</span>
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                name="password"
                className="py-2 px-4 border border-black rounded"
                required
              />
            </div>
            <div className="form-control pb-5">
              <label className="label pb-3">
                <span className="label-text text-lg uppercase">
                  Confirm password
                </span>
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                name="confirmPassword"
                className="py-2 px-4 border border-black rounded"
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
          <div
            onClick={handleGoogleSignUp}
            className="flex items-center border border-black p-4 md:px-6 rounded-md cursor-pointer mt-5"
          >
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
