import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import { ChevronLeft } from '../icons/ChevronLeft';
import { ChevronRight } from '../icons/ChevronRight';
import { ShowCard } from './ShowCard';

export const Carousel = ({ title, items = [] }) => {
  const scrollRef = useRef(null);
  const navigate = useNavigate();

  const scroll = (direction) => {
    const container = scrollRef.current;
    const scrollAmount = 400;

    if (!container) return;

    container.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <div className="w-full mb-8 relative overflow-visible px-5">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-white text-xl font-bold">{title}</h2>

        <div className="flex gap-2">
          <button
            onClick={() => scroll('left')}
            className="bg-black/50 text-white font-bold px-3 py-1 rounded"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={() => scroll('right')}
            className="bg-black/50 text-white font-bold px-3 py-1 rounded"
          >
            <ChevronRight />
          </button>
        </div>
      </div>
      <div
        ref={scrollRef}
        style={{
          overflowX: 'auto',
          overflowY: 'visible',
          paddingBottom: '160px',
          marginBottom: '-160px',
        }}
        className="flex gap-4  py-6 items-start scroll-smooth no-scrollbar"
      >
        {items?.map((show) => (
          <div onClick={() => navigate(`shows/${show?.id}`)}>
            <ShowCard key={show?.id} show={show} />
          </div>
        ))}
      </div>
    </div>
  );
};
