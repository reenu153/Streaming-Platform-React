import { render, screen } from '@testing-library/react';
import { EpisodeCard } from './EpisodeCard';
import { mockEpisode } from '../data/dummy-data';

describe('EpisodeCard', () => {
  it('renders episode number and name', () => {
    render(<EpisodeCard episode={mockEpisode} />);
    expect(screen.getByText('1. Pilot')).toBeInTheDocument();
  });

  it('renders runtime', () => {
    render(<EpisodeCard episode={mockEpisode} />);
    expect(screen.getByText('⏱ 47 min')).toBeInTheDocument();
  });

  it('shows N/A when runtime is missing', () => {
    render(<EpisodeCard episode={{ ...mockEpisode, runtime: null }} />);
    expect(screen.getByText('⏱ N/A min')).toBeInTheDocument();
  });

  it('renders episode image with correct src', () => {
    render(<EpisodeCard episode={mockEpisode} />);
    const img = screen.getByRole('img');
    expect(img).toHaveAttribute('src', mockEpisode.image.medium);
  });

  it('renders gracefully with no episode data', () => {
    render(<EpisodeCard episode={{}} />);
  });
});
