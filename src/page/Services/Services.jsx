import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Services = () => {
  const [topServices, setTopServices] = useState([]);

  useEffect(() => {
    axios.get("./services.json").then((res) => setTopServices(res.data));
  }, []);

  return (
    <div className="mt-48 md:mt-28 md:mb-24 max-w-7xl mx-auto">
      <h2 className="text-center text-2xl uppercase  md:text-4xl font-bold border-[#333] text-[#333] w-[280px] md:w-[380px] mx-auto border-l-4 border-r-4 md:mb-10 mb-6 ">
        Our Top Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {topServices?.map((service) => (
          <div
            key={service?.id}
            className="group relative rounded-md overflow-hidden"
          >
            <div className="h-[280px] md:h-[350px]">
              <img
                className="h-full w-full object-cover"
                src={service?.img}
                alt={service?.title}
              />
            </div>

            <div className="bg-[#333] p-4">
              <h2 className="text-2xl text-white font-semibold pb-2">
                {service?.title.slice(0, 16)}..
              </h2>
            </div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4"></div>
      <div className="text-center">
        <Link to="all-services">
          <button className="bg-[#1861C5] hover:bg-[#1860c5d3] rounded-md text-white font-bold py-2 px-4">
            See All Services
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Services;
