import React from "react";

export const Card = ({ show }) => {
  return (
    <div className="min-w-[180px] max-w-[180px] bg-[#1a1a1a] rounded-xl overflow-hidden shadow-md hover:scale-105 transition-transform duration-300">
      <img
        src={show?.image?.medium || "https://via.placeholder.com/210x295"}
        alt={show?.name}
        className="w-full h-[240px] object-cover"
      />

      <div className="p-2 text-white">
        <div className="font-semibold text-sm truncate">{show?.name}</div>

        <div className="text-xs text-gray-400 mt-1">
          ⭐ {show?.rating?.average || "N/A"}
        </div>

        <div className="text-xs text-gray-400">
          ⏱ {show?.runtime || "N/A"} min
        </div>

        <div className="text-xs text-gray-400">
          🌐 {show?.language || "N/A"}
        </div>
      </div>
    </div>
  );
};