import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { HomeIcon } from '../icons/HomeIcon';
import { SearchIcon } from '../icons/SearchIcon';
import { SearchModal } from './Search';

export const Header = () => {
  const navigate = useNavigate();
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <div className="w-full flex items-center justify-between px-4 py-3 mb-6 bg-black text-white sticky top-0 z-50">
      <div
        data-testid="home-icon"
        className="flex items-center gap-4"
        onClick={() => navigate('/')}
      >
        <HomeIcon />
      </div>

      <div className="text-lg font-bold tracking-wide">TV Explorer</div>

      <div className="flex items-center gap-4">
        <button
          onClick={() => setIsSearchOpen(true)}
          className="hover:scale-110 transition"
        >
          <SearchIcon data />
        </button>
      </div>
      <SearchModal open={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </div>
  );
};
