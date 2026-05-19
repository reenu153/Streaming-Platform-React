import { render, screen } from '@testing-library/react';
import { ShowCard } from './ShowCard';
import { mockShow } from '../data/dummy-data';

describe('ShowCard', () => {
  it('renders show name', () => {
    render(<ShowCard show={mockShow} />);
    expect(screen.getByText('Breaking Bad')).toBeInTheDocument();
  });

  it('renders runtime', () => {
    render(<ShowCard show={mockShow} />);
    expect(screen.getByText('⏱ 47 min')).toBeInTheDocument();
  });

  it('renders rating', () => {
    render(<ShowCard show={mockShow} />);
    expect(screen.getByText('⭐ 9.5')).toBeInTheDocument();
  });

  it('renders show image with correct src and alt', () => {
    render(<ShowCard show={mockShow} />);
    const img = screen.getByRole('img');
    expect(img).toHaveAttribute('src', mockShow.image.medium);
    expect(img).toHaveAttribute('alt', mockShow.name);
  });

  it('renders up to 3 genres', () => {
    render(<ShowCard show={mockShow} />);
    expect(screen.getByText('Drama')).toBeInTheDocument();
    expect(screen.getByText('Thriller')).toBeInTheDocument();
    expect(screen.getByText('Crime')).toBeInTheDocument();
  });

  it('shows fallback when no summary', () => {
    render(<ShowCard show={{ ...mockShow, summary: null }} />);
    expect(screen.getByText('No description available.')).toBeInTheDocument();
  });

  it('renders gracefully with no show data', () => {
    render(<ShowCard show={{}} />);
  });
});
