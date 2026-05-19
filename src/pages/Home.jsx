import React, { useEffect, useState } from 'react';

import { Carousel } from '../components/Carousel';
import { useGenres } from '../hooks/useGenres';
import { Banner } from '../components/Banner';

export const Home = () => {
  const [bannerShows, setBannerShows] = useState([]);
  const { genreMap, genres, loading } = useGenres(3);

  useEffect(() => {
    if (!Object.keys(genreMap).length) return;

    const allShows = Object.values(genreMap).flat();
    const random5 = [...allShows].sort(() => Math.random() - 0.5).slice(0, 5);

    setBannerShows(random5);
  }, [genreMap]);

  return (
    <div className="px-[24px] bg-background-base text-text-primary">
      {loading ? (
        <div className="text-gray-500 w-full h-full flex items-center justify-center">
          Loading...
        </div>
      ) : (
        <div>
          <Banner shows={bannerShows} />
          {genres?.map((genre) => (
            <Carousel key={genre} title={genre} items={genreMap[genre] || []} />
          ))}
        </div>
      )}
    </div>
  );
};
