import { AiFillPhone } from "react-icons/ai";
import { MdAttachEmail } from "react-icons/md";
import { FaRegAddressBook } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";

const Contact = () => {
  const data = useLoaderData();
  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="my-10 md:my-20">
        <h2 className="text-center text-2xl uppercase  md:text-4xl font-bold border-black text-black w-[280px] md:w-[380px] mx-auto border-l-4 border-r-4 md:mb-10 mb-6">
          Contact with us
        </h2>
        <p className=" text-center max-w-full md:max-w-[650px] mx-auto">
          {data?.company?.description}
        </p>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 my-6 md:my-10">
          <div className=" flex flex-col gap-2 items-center justify-center py-20 shadow-lg">
            <MdAttachEmail className="text-3xl" />
            <p>{data?.company?.contact?.email}</p>
          </div>
          <div className=" flex flex-col gap-2 items-center justify-center py-20 shadow-lg">
            <AiFillPhone className="text-3xl" />
            <p>{data?.company?.contact?.phone}</p>
          </div>
          <div className=" flex flex-col gap-2 items-center justify-center py-20 shadow-lg">
            <FaRegAddressBook className="text-3xl" />
            <p>{data?.company?.contact?.address}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
