import { useLoaderData } from "react-router-dom";
import Service from "../../components/Service/Service";

const Services = () => {
  const data = useLoaderData();

  return (
    <div className="mt-48 md:mt-28 md:mb-24">
      <h2 className="text-center text-2xl uppercase  md:text-4xl font-bold border-[#333] text-[#333] w-[280px] md:w-[380px] mx-auto border-l-4 border-r-4 md:mb-10 mb-6 ">
        Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
        {data.services.map((service) => (
          <Service key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
