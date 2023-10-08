import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";
const Service = ({ service }) => {
  const { id, title, description, img } = service;

  return (
    <Link to={`/services/${id}`}>
      <div className="group cursor-pointer relative rounded-md overflow-hidden">
        <div className="h-[280px] md:h-[350px]">
          <img className="h-full w-full object-cover" src={img} alt={title} />
        </div>
        <div className="h-full w-full absolute transition-bg duration-500 ease-in-out group-hover:bg-[#00000073] top-0 left-0"></div>
        <div className="bg-gray-600 p-4">
          <h2 className="text-2xl font-semibold pb-2">
            {title.slice(0, 16)}..
          </h2>
          <p className="">{description.slice(0, 84)}...</p>
        </div>
      </div>
    </Link>
  );
};

Service.propTypes = {
  service: PropTypes.object,
};

export default Service;
