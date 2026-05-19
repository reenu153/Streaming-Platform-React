import React, { useEffect, useState } from 'react'

import { Carousel } from '../components/Carousel'
import { useGenres } from '../hooks/useGenres'
import { Banner } from '../components/Banner'
import { getShowImages, getShows } from '../api/tvmaze'

export const Home = () => {
  const [bannerShows, setBannerShows] = useState([])
  const { genreMap, genres, loading } = useGenres(3)

  const getBannerShows = async (shows) => {
    const images = await Promise.all(
      shows.map(async (show) => {
        const imgs = await getShowImages(show.id);
        return imgs.length ? imgs[0].resolutions.original.url : null;
      })
    );
    return images.filter(Boolean);
  }

  useEffect(() => {
    if (!Object.keys(genreMap).length) return;
  
    const allShows = Object.values(genreMap).flat();
    const random5  = [...allShows].sort(() => Math.random() - 0.5).slice(0, 5);
  
    setBannerShows(random5);
  }, [genreMap]);

   return (
      <div className="w-screen h-screen p-[24px] bg-background-base text-text-primary overflow-auto">
         {loading ? (
            <div className="text-gray-500 w-full h-full flex items-center justify-center">
               Loading...
            </div>
         ) : (
            <div>
              <Banner images={bannerShows}/>
               {genres?.map((genre) => (
                  <Carousel
                     key={genre}
                     title={genre}
                     items={genreMap[genre] || []}
                  />
               ))}
            </div>
         )}
      </div>
   )
}
