import React from 'react';
import { useNavigate } from 'react-router-dom';

import { useSearch } from '../hooks/useSearch';

export const SearchModal = ({ open, onClose }) => {
  const navigate = useNavigate();
  const { query, setQuery, results, loading } = useSearch();

  const handleClose = () => {
    onClose();
    setQuery('');
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 bg-black/90 z-50 flex flex-col items-center p-6"
      onClick={onClose}
      data-testid="search-modal"
    >
      <div
        className="w-full max-w-2xl p-4 rounded-lg bg-[#1a1a1a] text-white flex justify-between items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <input
          autoFocus
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search shows..."
          className="w-full bg-[#1a1a1a] outline-none"
        />
        <span
          className="cursor-pointer text-[15px] font-semibold"
          onClick={handleClose}
          data-testid="search-modal-close"
        >
          X
        </span>
      </div>

      <div className="w-full max-w-2xl mt-6 overflow-auto no-scrollbar">
        {loading && <div className="text-gray-400">Searching...</div>}

        {results.map((item) => (
          <div
            key={item?.show?.id}
            onClick={() => navigate(`shows/${item?.show?.id}`)}
            className="cursor-pointer flex gap-4 p-3 bg-[#1a1a1a] rounded-lg mt-2 hover:bg-[#222]"
          >
            <img
              src={item?.show?.image?.medium}
              className="w-[80px] min-w-[80px] h-[100px] object-cover rounded"
            />

            <div className="text-white">
              <div className="font-semibold">{item?.show?.name}</div>

              <div className="flex gap-5 items-center text-[10px] mt-2 sm:text-xs text-gray-400">
                <span>⏱ {item?.show?.runtime || 'N/A'} min</span>
                <span>⭐ {item?.show?.rating?.average || 'N/A'}</span>{' '}
              </div>

              <p className="text-[13px] text-gray-300 mt-2 line-clamp-2">
                {item?.show?.summary
                  ? item?.show.summary.replace(/<[^>]*>/g, '')
                  : 'No description available.'}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
