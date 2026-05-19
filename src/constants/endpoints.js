export const BASE_URL = "https://api.tvmaze.com";

export const ENDPOINTS = {
  search:           (q)    => `/search/shows?q=${encodeURIComponent(q)}`,
  searchSingle:     (q)    => `/singlesearch/shows?q=${encodeURIComponent(q)}`,

  showById:         (id)   => `/shows/${id}`,
  showImages:       (id)   => `/shows/${id}/images`,

  episodes:         (id)   => `/shows/${id}/episodes`,
  seasons:          (id)   => `/shows/${id}/seasons`,
  seasonEpisodes:   (sid)  => `/seasons/${sid}/episodes`,
  episodeById:      (id)   => `/episodes/${id}`,

  cast:             (id)   => `/shows/${id}/cast`,
  crew:             (id)   => `/shows/${id}/crew`,

  shows:            (page = 0) => `/shows?page=${page}`,
};