import { ENDPOINTS } from '../constants/endpoints';
import { cacheGet, cacheSet } from '../utils/cache';
import { fetchClient } from '../utils/fetchClient';

const withCache = async (url) => {
  const key = url;
  const stored = cacheGet(key);
  if (stored) return stored;

  const data = await fetchClient(url);
  cacheSet(key, data);
  return data;
};

export const searchShows = (query) => fetchClient(ENDPOINTS.search(query));

export const searchSingle = (query) =>
  fetchClient(ENDPOINTS.searchSingle(query));

export const getShowById = (id) => fetchClient(ENDPOINTS.showById(id));

export const getShowImages = (id) => fetchClient(ENDPOINTS.showImages(id));

export const getEpisodes = (id) => fetchClient(ENDPOINTS.episodes(id));

export const getSeasons = (id) => fetchClient(ENDPOINTS.seasons(id));

export const getSeasonEpisodes = (seasonId) =>
  fetchClient(ENDPOINTS.seasonEpisodes(seasonId));

export const getEpisodeById = (id) => fetchClient(ENDPOINTS.episodeById(id));

export const getCast = (id) => fetchClient(ENDPOINTS.cast(id));

export const getCrew = (id) => fetchClient(ENDPOINTS.crew(id));

export const getShows = async (page) => await withCache(ENDPOINTS.shows(page));
