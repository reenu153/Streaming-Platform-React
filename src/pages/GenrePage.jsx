import { useNavigate, useParams } from 'react-router-dom';
import {useGenres} from '../hooks/useGenres';
import { ShowCard } from '../components/ShowCard';

const GenrePage = () => {
  const { genre } = useParams();
  const { genreMap, loading } = useGenres();
  const navigate = useNavigate();
  
  const shows = genreMap[genre] || [];

  return (
    <div className="p-6 bg-[#09090B] min-h-screen">
      <h1 className="text-white text-2xl font-bold mb-10 border-l-4 border-[#5B21B6] pl-3">
        {genre}
      </h1>

      {loading ? (
        <p className="text-[#52525B]">Loading...</p>
      ) : (
        <div className="flex flex-wrap gap-10">
          {shows?.map((show) => (
            <div key={show?.id} onClick={() => navigate(`/shows/${show?.id}`)}>
            <ShowCard key={show?.id} show={show} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default GenrePage;