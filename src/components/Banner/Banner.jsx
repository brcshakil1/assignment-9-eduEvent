import { useEffect, useState } from "react";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";

const Banner = () => {
  const [slides, setSlides] = useState([]);
  const [index, setIndex] = useState(0);

  //   next and previous slide
  const handleNextSlide = () => {
    if (index < slides.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  };

  const handlePrevSlide = () => {
    setIndex(index - 1);
    if (index === 0) {
      setIndex(slides.length - 1);
    }
  };

  // fetch slider data
  useEffect(() => {
    fetch("/slides.json")
      .then((res) => res.json())
      .then((data) => setSlides(data));
  }, []);

  // used setInterval for index
  useEffect(() => {
    const interval = setInterval(() => {
      if (index < slides.length - 1) {
        setIndex(index + 1);
      } else {
        setIndex(0);
      }
    }, 6000);
    return () => clearInterval(interval);
  }, [index, slides.length]);

  // console.log();

  return (
    <div
      className="h-[300px] md:h-[500px] bg-cover bg-[#363636b3] bg-blend-overlay"
      style={{
        backgroundImage: `url(${slides[index]?.image || slides[1]?.image})`,
      }}
    >
      <div className="max-w-7xl mx-auto md:grid md:place-items-end w-full h-full relative">
        <div className="flex justify-between absolute top-1/2 -translate-y-1/2 w-full">
          <div
            onClick={handlePrevSlide}
            className="w-[35px] h-[35px] md:w-[50px] md:h-[50px] rounded-full bg-gray-700 grid place-items-center border border-white cursor-pointer"
          >
            <AiOutlineLeft className="text-white text-xl md:text-2xl" />
          </div>
          <div
            onClick={handleNextSlide}
            className="w-[35px] h-[35px] md:w-[50px] md:h-[50px] rounded-full bg-gray-700 grid place-items-center border border-white cursor-pointer"
          >
            <AiOutlineRight className="text-white text-xl md:text-2xl" />
          </div>
        </div>
        <div className="p-4 absolute top-52 left-1/2 -translate-x-1/2 md:static md:px-6 md:py-8 space-y-2 w-[90%] md:w-[500px]  bg-white shadow-2xl md:bg-opacity-80 text-black md:-mr-20 md:mb-20 ">
          <h2 className=" text-xl md:text-3xl font-bold ">
            {slides[index]?.text?.eventTitle ||
              slides[index]?.text?.featuredSpeaker ||
              slides[index]?.text?.earlyBirdDiscount}
          </h2>
          <hr />
          <p className="font-semibold">
            {slides[index]?.text?.dateLocation ||
              slides[index]?.text?.highlights ||
              slides[index]?.text?.eventTheme}
          </p>
          {slides[index]?.text?.cta ? (
            <p className="border py-2 text-center border-black font-bold max-w-[170px]">
              {slides[index]?.text?.cta}
            </p>
          ) : (
            <p className="font-semibold">
              {slides[index]?.text?.testimonial ||
                slides[index]?.text?.contactInfo}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Banner;
