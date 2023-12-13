import { useQuery } from "@tanstack/react-query";
import Service from "../../components/Service/Service";

const AllServices = () => {
  const { data: services, isPending } = useQuery({
    queryKey: ["all-services"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/services");
      const data = res.json();
      return data;
    },
  });

  if (isPending) {
    return <div>loading</div>;
  }
  console.log(services);

  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-center text-2xl font-bold md:text-4xl py-10 md:py-14">
        Our All services
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {services &&
          services?.map((service) => (
            <Service key={service?._id} service={service} />
          ))}
      </div>
    </div>
  );
};

export default AllServices;
