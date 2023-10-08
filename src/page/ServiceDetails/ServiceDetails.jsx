import { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { BsCurrencyDollar } from "react-icons/bs";

const ServiceDetails = () => {
  const [serviceDetails, setServiceDetails] = useState(null);
  const data = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);

  useEffect(() => {
    const findItem = data.services.find((service) => service.id === idInt);
    setServiceDetails(findItem);
  }, [idInt, data.services]);

  //   const { title, description, img, price } = serviceDetails;

  return (
    <div className=" max-w-7xl mx-auto my-10 md:my-20 p-4">
      <div>
        <img src={serviceDetails?.img} alt="" />
        <h2 className="text-3xl  md:text-5xl mt-8 md:mb-10 mb:6 md:mt-14 my-4 text-bold border-l-2 border-r-2 text-center">
          {serviceDetails?.title}
        </h2>
        <p>{serviceDetails?.description}</p>
        <p className="pt-4">
          <span className="flex items-center border w-[250px] p-4">
            Event price: <BsCurrencyDollar />
            {serviceDetails?.price}
          </span>
        </p>
      </div>
      <Link to="/sendMessage">
        <button className="text-white font-lg uppercase bg-[#0095bd] py-4 px-6 mt-4 w-[200px]">
          Send a message
        </button>
      </Link>
    </div>
  );
};

export default ServiceDetails;
