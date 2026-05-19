import React, { useEffect, useState } from "react";

export const Banner = ({ images = [] }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!images.length) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000); 

    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="relative w-full h-[400px] overflow-hidden rounded-xl">
      

      {images.map((img, i) => (
        <img
          key={i}
          src={img?.image?.original}
          className={`
            absolute inset-0 w-full h-full object-contain object-top
            transition-opacity duration-700 ease-in-out
            ${i === index ? "opacity-100" : "opacity-0"}
          `}
        />
      ))}

      <div className="absolute inset-0 bg-black/40" />

      <div className="absolute bottom-6 left-6 text-white z-10">
        <h2 className="text-xl md:text-3xl font-bold">
          Featured Shows
        </h2>
        <p className="text-sm text-gray-200">
          Trending picks for you
        </p>
      </div>
    </div>
  );
};