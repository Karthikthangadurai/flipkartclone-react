import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Slidebar = () => {
  const images = [
    "https://rukminim2.flixcart.com/fk-p-flap/3240/540/image/8c2598b5c820a42b.jpg?q=60",
    "https://rukminim1.flixcart.com/fk-p-flap/3240/540/image/fa2015a749786364.jpg?q=60",
    "https://rukminim1.flixcart.com/fk-p-flap/3240/540/image/1f9c9ad24c2bc37b.jpg?q=60",
    "https://rukminim1.flixcart.com/fk-p-flap/3240/540/image/5b309e98775e22e4.jpg?q=60",
  ];

  const [current, setCurrent] = useState(0);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="relative w-full mx-auto my-4 overflow-hidden border shadow">
      <div
        className="flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}>
        {images.map((src, index) => (
          <img key={index} src={src} alt={`slide-${index}`} className="w-full flex-shrink-0" />
        ))}
      </div>

      {/* Left Button */}
      <button onClick={prevSlide} className="absolute top-1/2 left-4 transform -translate-y-1/2 text-xs md:text-base bg-white/70 hover:bg-white p-1 md:p-2 rounded-full shadow">
        <FaArrowLeft />
      </button>

      {/* Right Button */}
      <button onClick={nextSlide} className="absolute top-1/2 right-4 transform -translate-y-1/2 text-xs md:text-base bg-white/70 hover:bg-white p-1 md:p-2 rounded-full shadow">
        <FaArrowRight />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-2 h-1 md:w-3 md:h-3 rounded-full cursor-pointer ${
              current === index ? "bg-blue-500" : "bg-gray-300"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Slidebar;
