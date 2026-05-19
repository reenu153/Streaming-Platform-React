import { getShows } from "./tvmaze";

export const fetchShowsByGenre = async (pages = 3) => {
  const requests = Array.from({ length: pages }, (_, i) => getShows(i));
  const results = await Promise.all(requests);
  const allShows = results.flat();

  return groupByGenre(allShows);
};

const groupByGenre = (shows) => {
  return shows.reduce((acc, show) => {
    if (!show.genres?.length) return acc;

    show.genres.forEach((genre) => {
      if (!acc[genre]) acc[genre] = [];
      acc[genre].push(show);
    });

    return acc;
  }, {});
};

