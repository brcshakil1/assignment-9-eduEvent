import { useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const countries = [
  "United Arab Emirates",
  "Saudi Arabia",
  "Palestine",
  "Turkey",
  "Germany",
  "United States",
  "United Kingdom",
];

const SendMessage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [country, setCountry] = useState(countries[0]);
  const [message, setMessage] = useState("");

  console.log(country);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    // emailjs id and keys
    const serviceId = "service_kc46yhk";
    const templateId = "template_s05xx7l";
    const publicKey = "FiB_IkbuhKKe4K17T";

    const templateParams = {
      name: name,
      from_name: email,
      country: country,
      company: company,
      message: message,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((res) => {
        if (res.status === 200) {
          toast.success("Email sent successfully!");
          form.reset();
        }
      })
      .catch((err) => console.error("Error sending email:", err));
  };

  return (
    <div>
      <div className="relative bg-gradient-to-b from-[#1861c5] to-[#04306e] h-96 w-full">
        <div className="w-full flex items-center justify-center my-12">
          <form
            onSubmit={handleSubmit}
            className="absolute top-20 md:top-40 bg-white shadow-2xl rounded py-12 lg:px-28 px-8"
          >
            <p className="md:text-3xl text-xl font-bold leading-7 text-center text-gray-700">
              Send a message for your event!
            </p>
            <div className="md:flex items-center mt-12">
              <div className="md:w-72 flex flex-col">
                <label className="text-base font-semibold leading-none text-gray-800">
                  Name
                </label>
                <input
                  tabIndex={0}
                  aria-label="Please input name"
                  type="name"
                  onChange={(e) => setName(e.target.value)}
                  className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-[#1861c5] mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100"
                  placeholder="Please input  name"
                  required
                />
              </div>
              <div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4">
                <label className="text-base font-semibold leading-none text-gray-800">
                  Email Address
                </label>
                <input
                  tabIndex={0}
                  aria-label="Please input email address"
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-[#1861c5] mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100"
                  placeholder="Please input email address"
                  required
                />
              </div>
            </div>
            <div className="md:flex items-center mt-8">
              <div className="md:w-72 flex flex-col">
                <label className="text-base font-semibold leading-none text-gray-800">
                  Company name
                </label>

                <input
                  tabIndex={0}
                  role="input"
                  aria-label="Please input company name"
                  type="name"
                  onChange={(e) => setCompany(e.target.value)}
                  className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-[#1861c5] mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100 "
                  placeholder="Please input company name"
                  required
                />
              </div>
              <div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4">
                <label className="text-base font-semibold leading-none text-gray-800">
                  Country
                </label>
                <select
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  className="text-base leading-none text-gray-900 p-3 
                  focus:oultine-none focus:border-[#1861c5] mt-4
                   bg-gray-100 border rounded border-gray-200
                    placeholder-gray-100 "
                  required
                >
                  {countries?.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div>
              <div className="w-full flex flex-col mt-8">
                <label className="text-base font-semibold leading-none text-gray-800">
                  Message
                </label>
                <textarea
                  tabIndex={0}
                  aria-label="leave a message"
                  role="textbox"
                  type="name"
                  onChange={(e) => setMessage(e.target.value)}
                  className="h-36 text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-[#1861c5] mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100 resize-none"
                  defaultValue={""}
                />
              </div>
            </div>
            <p className="text-xs leading-3 text-gray-600 mt-4">
              By clicking submit you agree to our terms of service, privacy
              policy and how we use data as stated
            </p>
            <div className="flex items-center justify-center w-full">
              <button
                type="submit"
                className="mt-9 text-base font-semibold leading-none text-white py-4 px-10 bg-[#1861c5] rounded hover:bg-[#3c73be] focus:ring-2 focus:ring-offset-2 focus:outline-none"
              >
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SendMessage;
