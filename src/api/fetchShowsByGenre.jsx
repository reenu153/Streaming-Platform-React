import { getShows } from './tvmaze';
import { groupByGenre } from '../utils/fetchGenres';

export const fetchShowsByGenre = async (pages = 3) => {
  const requests = Array.from({ length: pages }, (_, i) => getShows(i));
  const results = await Promise.all(requests);
  const allShows = results.flat();

  return groupByGenre(allShows);
};

