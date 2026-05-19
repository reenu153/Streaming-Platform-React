import React from 'react'

export const Card = ({ show }) => {
   return (
      <div
         className=" group
    relative
    flex-shrink-0
    w-[140px] sm:w-[160px] md:w-[180px] lg:w-[210px]

    bg-[#1a1a1a]
    rounded-xl

    transition-all duration-300 ease-in-out

    hover:shadow-xl
    hover:z-50
    hover:scale-[1.03]
      "
      >
         <img
            src={show?.image?.medium || 'https://via.placeholder.com/210x295'}
            alt={show?.name}
            className="
          w-full
          h-[180px] sm:h-[200px] md:h-[220px] lg:h-[240px]
          object-cover
          transition-all duration-300
        "
         />

         <div className="p-2 text-white">
            <div className="font-semibold text-sm md:text-[15px] truncate">
               {show?.name}
            </div>

            <div className="flex justify-between items-center text-[10px] mt-2 sm:text-xs text-gray-400">
               <span>⏱ {show?.runtime || 'N/A'} min</span>
               <span>⭐ {show?.rating?.average || 'N/A'}</span>{' '}
            </div>
         </div>

         <div
            className="
       absolute left-0 right-0 top-full
          opacity-0 pointer-events-none
          group-hover:opacity-100 group-hover:pointer-events-auto
          transition-opacity duration-300 ease-in-out
          bg-[#1a1a1a] rounded-b-xl
          px-2 pb-3 pt-2
          z-50
          shadow-[0_16px_32px_rgba(0,0,0,0.6)]
        "
         >
            <div className="flex flex-wrap gap-1 mt-1">
               {show?.genres?.slice(0, 3).map((g, i) => (
                  <span
                     key={i}
                     className="text-[12px] bg-white/10 px-1 rounded"
                  >
                     {g}
                  </span>
               ))}
            </div>

            <p className="text-[13px] text-gray-300 mt-2 line-clamp-4">
               {show?.summary
                  ? show.summary.replace(/<[^>]*>/g, '')
                  : 'No description available.'}
            </p>
         </div>
      </div>
   )
}
