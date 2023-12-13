import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { BsCurrencyDollar } from "react-icons/bs";

const ServiceDetails = () => {
  const { id } = useParams();
  const { data: service, isPending: isServicePending } = useQuery({
    queryKey: ["all-services"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/services/${id}`);
      const data = res.json();
      return data;
    },
  });
  console.log(service);

  if (isServicePending) {
    return <div>loading...</div>;
  }

  //   const { title, description, img, price } = serviceDetails;

  return (
    <div className=" max-w-7xl mx-auto my-10 md:my-20 p-4">
      <div>
        <img src={service?.img} alt="" />
        <h2 className="text-3xl  md:text-5xl mt-8 md:mb-10 mb:6 md:mt-14 my-4 text-bold border-l-2 border-[#333] border-r-2 text-[#333] text-center">
          {service?.title}
        </h2>
        <p className="text-base md:text-lg">{service?.description}</p>
        <p className="pt-4">
          <span className="flex items-center border border-[#333] w-[250px] p-4 font-semibold">
            Event price: <BsCurrencyDollar />
            {service?.price}
          </span>
        </p>
      </div>
      <Link to="/sendMessage">
        <button className="text-white font-bold font-lg uppercase bg-[#1861c5] hover:bg-[#3c73be] py-4 px-6 mt-4 w-[200px]">
          Send a message
        </button>
      </Link>
    </div>
  );
};

export default ServiceDetails;
