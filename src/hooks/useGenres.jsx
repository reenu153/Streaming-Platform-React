import { useState, useEffect } from 'react';
import { fetchShowsByGenre } from '../api/fetchShowsByGenre';
import { extractGenres } from '../utils/fetchGenres';

export const useGenres = (pages = 3) => {
  const [genreMap, setGenreMap] = useState({});
  const [genres, setGenres] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchShowsByGenre(pages)
      .then((map) => {
        setGenreMap(map);
        setGenres(extractGenres(map));
      })
      .catch(setError)
      .finally(() => setLoading(false));
  }, [pages]);

  return { genreMap, genres, loading, error };
};
