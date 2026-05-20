import React, { useEffect, useState } from 'react';

export const Banner = ({ shows = [] }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!shows.length) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % shows.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [shows]);

  return (
    <div className="relative mb-4 w-full h-[350px] overflow-hidden rounded-xl bg-gradient-to-br from-[#3B0764] via-[#1A0A2E] to-[#09090B]">
      {shows?.map((show, i) => (
        <img
          key={i}
          src={show?.image?.original}
          className={`
            absolute inset-0 w-full h-full object-contain
            transition-opacity duration-700 ease-in-out
            ${i === index ? 'opacity-100' : 'opacity-0'}
          `}
        />
      ))}

      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent" />

      <div className="absolute bottom-6 left-6 text-white z-10">
        <h2 className="text-xl md:text-3xl font-bold">Featured Shows</h2>
        <p className="text-sm text-gray-200">Trending picks for you</p>
      </div>
    </div>
  );
};
