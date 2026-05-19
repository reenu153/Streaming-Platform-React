export const groupEpisodesBySeason = (episodes = []) => {
  return episodes.reduce((acc, ep) => {
    const season = ep.season;

    if (!acc[season]) {
      acc[season] = [];
    }

    acc[season].push(ep);

    return acc;
  }, {});
};

export const getSeasonsList = (episodes = []) => {
  const seasons = [...new Set(episodes.map((ep) => ep.season))];
  return seasons.sort((a, b) => a - b);
};
