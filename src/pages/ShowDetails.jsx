import { useParams } from 'react-router-dom';
import { useEffect, useMemo, useState } from 'react';
import { getEpisodes, getShowById } from '../api/tvmaze';
import { EpisodeCard } from '../components/EpisodeCard';
import { getSeasonsList, groupEpisodesBySeason } from '../utils/episodes';

export const ShowDetails = () => {
  const { id } = useParams();
  const [show, setShow] = useState(null);
  const [episodes, setEpisodes] = useState([]);
  const [selectedSeason, setSelectedSeason] = useState(1);

  const fetchShowDetails = async () => {
    const result = await getShowById(id);
    setShow(result);
  };

  const fetchShowEpisodes = async () => {
    const result = await getEpisodes(id);
    setEpisodes(result);
  };

  const grouped = useMemo(() => groupEpisodesBySeason(episodes), [episodes]);

  const seasons = useMemo(() => getSeasonsList(episodes), [episodes]);

  const filteredEpisodes = grouped[selectedSeason] || [];

  useEffect(() => {
    fetchShowDetails();
    fetchShowEpisodes();
  }, []);

  return (
    <div className="bg-background-base overflow-auto">
      <div className="relative w-full h-[400px] overflow-hidden">
        <img
          src={show?.image?.original}
          className="absolute w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />
        <div className="relative z-10 p-6 md:p-10 text-white flex flex-col justify-end h-full">
          <h1 className="text-3xl md:text-5xl font-bold">{show?.name}</h1>

          <div className="flex gap-4 mt-3 text-sm text-gray-300">
            <span>⏱ {show?.runtime || 'N/A'} min</span>
            <span>🎬 {episodes?.length || 0} episodes</span>
            <span>⭐ {show?.rating?.average || 'N/A'}</span>
          </div>

          <div className="flex flex-wrap gap-2 mt-3">
            {show?.genres?.map((g, i) => (
              <span key={i} className="bg-white/10 px-2 py-1 rounded text-xs">
                {g}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="m-8">
        <div className="flex items-center gap-8">
          <h2 className="text-2xl text-white font-bold">Episodes</h2>
          {seasons?.length && (
            <select
              value={selectedSeason}
              onChange={(e) => setSelectedSeason(Number(e.target.value))}
              className="bg-[#1a1a1a] cursor-pointer text-white px-3 py-2 rounded"
            >
              {seasons?.map((season) => (
                <option key={season} value={season}>
                  Season {season}
                </option>
              ))}
            </select>
          )}
        </div>
        {filteredEpisodes?.map((episode) => (
          <EpisodeCard key={episode.id} episode={episode} />
        ))}
      </div>
    </div>
  );
};
