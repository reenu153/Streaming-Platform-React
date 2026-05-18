import { ENDPOINTS } from "./endpoints";
import { fetchClient } from "./fetch";

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

export const getShows = async (page) => await fetchClient(ENDPOINTS.shows(page));
