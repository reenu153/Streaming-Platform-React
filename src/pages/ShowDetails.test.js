import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { useParams } from 'react-router-dom';
import { getShowById, getEpisodes } from '../api/tvmaze';
import { groupEpisodesBySeason, getSeasonsList } from '../utils/episodes';
import { ShowDetails } from './ShowDetails';

jest.mock('react-router-dom', () => ({
  useParams: jest.fn(),
}));

jest.mock('../api/tvmaze', () => ({
  getShowById: jest.fn(),
  getEpisodes: jest.fn(),
}));

jest.mock('../components/EpisodeCard', () => ({
  EpisodeCard: ({ episode }) => (
    <div data-testid="episode-card">{episode.name}</div>
  ),
}));

jest.mock('../utils/episodes', () => ({
  groupEpisodesBySeason: jest.fn(),
  getSeasonsList: jest.fn(),
}));

describe('ShowDetails', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders show details and episodes', async () => {
    useParams.mockReturnValue({ id: '1' });

    getShowById.mockResolvedValue({
      id: 1,
      name: 'Breaking Bad',
      runtime: 50,
      rating: { average: 9 },
      image: { original: 'img.jpg' },
      genres: ['Drama'],
    });

    getEpisodes.mockResolvedValue([
      { id: 1, name: 'Episode 1', season: 1 },
      { id: 2, name: 'Episode 2', season: 1 },
    ]);

    groupEpisodesBySeason.mockReturnValue({
      1: [
        { id: 1, name: 'Episode 1', season: 1 },
        { id: 2, name: 'Episode 2', season: 1 },
      ],
    });

    getSeasonsList.mockReturnValue([1]);

    render(<ShowDetails />);

    await waitFor(() =>
      expect(screen.getByText('Breaking Bad')).toBeInTheDocument()
    );

    expect(screen.getAllByTestId('episode-card')).toHaveLength(2);

    expect(screen.getByText(/50 min/)).toBeInTheDocument();
    expect(screen.getByText(/2 episodes/)).toBeInTheDocument();
  });

  test('renders seasons dropdown when seasons exist', async () => {
    useParams.mockReturnValue({ id: '1' });

    getShowById.mockResolvedValue({
      name: 'Show',
      image: {},
    });

    getEpisodes.mockResolvedValue([]);

    groupEpisodesBySeason.mockReturnValue({});
    getSeasonsList.mockReturnValue([1, 2]);

    render(<ShowDetails />);

    await waitFor(() => {
      expect(screen.getByRole('combobox')).toBeInTheDocument();
    });

    expect(screen.getByText('Season 1')).toBeInTheDocument();
    expect(screen.getByText('Season 2')).toBeInTheDocument();
  });
});
