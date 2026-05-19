import React from 'react';
import { render, screen } from '@testing-library/react';
import { Home } from './Home';
import { useGenres } from '../hooks/useGenres';

jest.mock('../hooks/useGenres', () => ({
  useGenres: jest.fn(),
}));

jest.mock('../components/Carousel', () => ({
  Carousel: ({ title }) => <div data-testid="carousel">{title}</div>,
}));

jest.mock('../components/Banner', () => ({
  Banner: () => <div data-testid="banner">Banner</div>,
}));

describe('Home', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('shows loading state when loading is true', () => {
    useGenres.mockReturnValue({
      genreMap: {},
      genres: [],
      loading: true,
    });

    render(<Home />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  test('renders banner and carousels when data is loaded', () => {
    useGenres.mockReturnValue({
      loading: false,
      genres: ['Drama', 'Action'],
      genreMap: {
        Drama: [{ id: 1, name: 'Show 1' }],
        Action: [{ id: 2, name: 'Show 2' }],
      },
    });

    render(<Home />);

    expect(screen.getByTestId('banner')).toBeInTheDocument();

    const carousels = screen.getAllByTestId('carousel');
    expect(carousels).toHaveLength(2);

    expect(screen.getByText('Drama')).toBeInTheDocument();
    expect(screen.getByText('Action')).toBeInTheDocument();
  });

  test('does not render carousels when genres empty', () => {
    useGenres.mockReturnValue({
      loading: false,
      genres: [],
      genreMap: {},
    });

    render(<Home />);

    expect(screen.queryByTestId('carousel')).not.toBeInTheDocument();
  });
});
