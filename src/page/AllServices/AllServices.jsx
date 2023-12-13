import { useQuery } from "@tanstack/react-query";
import Service from "../../components/Service/Service";
import { useState } from "react";
import Loading from "../../components/Loading/Loading";

const AllServices = () => {
  const [category, setCategory] = useState("");
  const limit = 6;
  const [page, setPage] = useState(1);

  const { data, isPending } = useQuery({
    queryKey: ["all-services", category, page],
    queryFn: async () => {
      const res = await fetch(
        `https://edu-event-server-site.vercel.app/services?category=${category}&page=${page}&limit=${limit}`
      );
      const data = res.json();
      return data;
    },
  });

  const totalPage = Math.ceil(data?.totalServices / limit);
  console.log(totalPage);

  const handlePrev = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };
  const handleNext = () => {
    if (page < totalPage) {
      setPage(page + 1);
    }
  };

  if (isPending) {
    return <Loading />;
  }
  console.log(data);

  return (
    <div className="max-w-7xl mx-auto p-5">
      <h1 className="text-center text-2xl font-bold md:text-4xl py-10 md:py-14">
        Our All services
      </h1>
      <div className="md:w-72 flex flex-col md:ml-6 md:mt-0 my-5 ">
        <label className="text-base font-semibold leading-none text-gray-800">
          Filter by Category
        </label>
        <select
          className="text-base leading-none text-gray-900 p-3 
                  focus:oultine-none focus:border-[#1861c5] mt-4
                   bg-gray-100 border rounded border-gray-200
                    placeholder-gray-100 "
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        >
          <option value="">All</option>
          <option value="Education">Education</option>
          <option value="Technology">Technology</option>
          <option value="Culinary">Culinary</option>
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {data?.result &&
          data?.result?.map((service) => (
            <Service key={service?._id} service={service} />
          ))}
      </div>
      {data?.totalServices > 6 ? (
        <div className="text-center pb-5">
          <button
            onClick={handlePrev}
            className="btn btn-md mr-3 border border-slate-400"
          >
            Prev
          </button>
          <div className="join my-5">
            {Array(totalPage)
              ?.fill(0)
              ?.map((item, idx) => {
                const pageNumber = idx + 1;
                return (
                  <button
                    key={pageNumber}
                    onClick={() => setPage(pageNumber)}
                    className={`join-item btn border border-slate-400 ${
                      page === pageNumber ? "bg-slate-400" : "btn-md"
                    }`}
                  >
                    {pageNumber}
                  </button>
                );
              })}
          </div>
          <button
            onClick={handleNext}
            className="btn btn-md ml-3 border-slate-400"
          >
            Next
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default AllServices;
