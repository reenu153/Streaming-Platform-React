import { useEffect, useState } from 'react';
import debounce from 'lodash.debounce';

import { searchShows } from '../api/tvmaze';

export const useSearch = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const debouncedFn = debounce(async (query) => {
      if (!query) {
        setResults([]);
        return;
      }

      setLoading(true);

      try {
        const res = await searchShows(query);
        setResults(res);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }, 500);

    debouncedFn(query);
  }, [query]);

  return {
    query,
    setQuery,
    results,
    loading,
  };
};
