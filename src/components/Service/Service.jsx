import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";
import { BsCurrencyDollar } from "react-icons/bs";

const Service = ({ service }) => {
  const { _id, title, description, img, price } = service;
  // console.log(service);
  return (
    <div className="group relative rounded-md overflow-hidden">
      <div className="h-[280px] md:h-[350px]">
        <img className="h-full w-full object-cover" src={img} alt={title} />
      </div>
      <div className="h-full w-full absolute flex justify-center items-center transition-bg duration-500 ease-in-out group-hover:bg-[#00000073] top-0 left-0">
        <Link to={`/services/${_id}`}>
          <button
            className="uppercase bg-[#1861c5] hidden group-hover:block text-white py-3 px-4 rounded"
            data-aos="fade-up"
          >
            Show Details
          </button>
        </Link>
      </div>
      <div className="bg-[#333] p-4">
        <h2 className="text-2xl text-white font-semibold pb-2">
          {title.slice(0, 16)}..
        </h2>
        <p className="text-white">{description.slice(0, 84)}...</p>
        <p className="text-white w-[200px] py-3 px-4 mt-3 flex items-center gap-2 border">
          Price:{" "}
          <span className="flex items-center gap-1">
            <BsCurrencyDollar /> {price}
          </span>
        </p>
      </div>
    </div>
  );
};

Service.propTypes = {
  service: PropTypes.object,
};

export default Service;
