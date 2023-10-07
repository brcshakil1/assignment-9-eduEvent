import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="min-h-screen grid place-items-center">
      <div>
        <h2 className="text-9xl font-light">OOPS!</h2>
        <div className="text-center py-4">
          <p className="uppercase">4o4 - the page can{`'`}t found</p>
          <Link to="/">
            <button className="bg-[#0095bd] py-3 px-5 font-bold text-white mt-2 uppercase rounded-md">
              go to homepage
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
