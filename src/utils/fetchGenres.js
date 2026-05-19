export const extractGenres = (genreMap) => {
  return Object.keys(genreMap).sort();
};

export const groupByGenre = (shows) => {
  return shows.reduce((acc, show) => {
    if (!show.genres?.length) return acc;

    show.genres.forEach((genre) => {
      if (!acc[genre]) acc[genre] = [];
      acc[genre].push(show);
    });

    return acc;
  }, {});
};
