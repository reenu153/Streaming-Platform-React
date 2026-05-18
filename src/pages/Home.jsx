import React, { useEffect, useState } from "react";

import { GENRE_LIST } from "../constants/browse";
import { getShows } from "../api/tvmaze";
import { Carousel } from "../components/Carousel";

export const Home = () => {

  const [shows, setShows] = useState([]);

  const fetchShows = async () => {
    const shows= await getShows(2);
    setShows(shows);
    console.log(shows[1]);
  };

  useEffect(() => {
    fetchShows();
  }, []);

  return (
    <div className="w-screen h-screen p-[24px] bg-background-base text-text-primary">
      <div className="font-bold text-2xl">Browse</div>
      <Carousel title="Trending" items={shows.slice(3)} />
    </div>
  );
};
