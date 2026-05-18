import React, { useRef } from "react";
import { Card } from "./Card";

export const Carousel = ({ title, items = [] }) => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const container = scrollRef.current;
    const scrollAmount = 600;

    if (!container) return;

    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="w-full mb-8">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-white text-xl font-bold">{title}</h2>

        <div className="flex gap-2">
          <button
            onClick={() => scroll("left")}
            className="bg-black/50 text-white px-3 py-1 rounded"
          >
            ←
          </button>
          <button
            onClick={() => scroll("right")}
            className="bg-black/50 text-white px-3 py-1 rounded"
          >
            →
          </button>
        </div>
      </div>
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scroll-smooth no-scrollbar pb-2"
      >
        {items.map((show) => (
          <Card key={show.id} show={show} />
        ))}
      </div>
    </div>
  );
};