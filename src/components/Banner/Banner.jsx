import { useEffect, useState } from "react";

const Banner = () => {
  const [index, setIndex] = useState(0);
  const [slides, setSlides] = useState([]);

  //   called carousal data
  useEffect(() => {
    fetch("/slides.json")
      .then((res) => res.json())
      .then((data) => setSlides(data));
  });

  //   used setInterval for index
  useEffect(() => {
    const interval = setInterval(() => {
      if (index < slides.length - 1) {
        setIndex(index + 1);
      } else {
        setIndex(0);
      }
    }, 4000);

    return () => {
      clearInterval(interval);
    };
  }, [index, slides.length]);

  console.log(index);

  return (
    <div>
      <div
        className="md:h-[500px] bg-cover"
        style={{ backgroundImage: `url(${slides[index].url})` }}
      >
        <h1>Banner</h1>
      </div>
    </div>
  );
};

export default Banner;
