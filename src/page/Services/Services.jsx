import { Link } from "react-router-dom";
import Service from "../../components/Service/Service";
import useServices from "../../hooks/useServices";

const Services = () => {
  const [services, isPending] = useServices();

  if (isPending) {
    return <div>loading...</div>;
  }

  return (
    <div className="mt-48 md:mt-28 md:mb-24">
      <h2 className="text-center text-2xl uppercase  md:text-4xl font-bold border-[#333] text-[#333] w-[280px] md:w-[380px] mx-auto border-l-4 border-r-4 md:mb-10 mb-6 ">
        Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
        {services &&
          services
            .splice(0, 6)
            ?.map((service) => <Service key={service._id} service={service} />)}
      </div>
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
