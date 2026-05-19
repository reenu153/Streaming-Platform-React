import React, { useRef } from "react";
import { Card } from "./Card";
import { ChevronLeft } from "../icons/ChevronLeft";
import { ChevronRight } from "../icons/ChevronRight";

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
    <div className="w-full mb-8 relative overflow-visible px-5">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-white text-xl font-bold">{title}</h2>

        <div className="flex gap-2">
          <button
            onClick={() => scroll("left")}
            className="bg-black/50 text-white font-bold px-3 py-1 rounded"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={() => scroll("right")}
            className="bg-black/50 text-white font-bold px-3 py-1 rounded"
          >
            <ChevronRight />
          </button>
        </div>
      </div>
      <div
        ref={scrollRef}
        style={{ 
          overflowX: "auto",
          overflowY: "visible",
          // paddingBottom trick to force the browser to respect it
          paddingBottom: "160px",
          marginBottom: "-160px",
        }}
        className="flex gap-4  py-6 items-start scroll-smooth no-scrollbar"
      >
        {items.map((show) => (
          <Card key={show.id} show={show} />
        ))}
      </div>
    </div>
  );
};