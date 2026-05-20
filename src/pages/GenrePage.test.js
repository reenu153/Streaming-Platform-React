import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import GenrePage from './GenrePage';
import { mockGenreMap } from '../data/dummy-data';
import * as useGenresHook from '../hooks/useGenres';

const renderGenrePage = (genre = 'Drama') =>
  render(
    <MemoryRouter initialEntries={[`/genre/${genre}`]} future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Routes>
        <Route path="/genre/:genre" element={<GenrePage />} />
        <Route path="/shows/:id"    element={<div data-testid="show-detail" />} />
      </Routes>
    </MemoryRouter>
  );

describe('GenrePage', () => {
  beforeEach(() => {
    jest.spyOn(useGenresHook, 'useGenres').mockReturnValue({
      genreMap: mockGenreMap,
      loading: false,
      error: null,
    });
  });

  afterEach(() => jest.restoreAllMocks());

  it('renders the genre title from url params', () => {
    renderGenrePage('Drama');
    expect(screen.getByRole('heading', { name: 'Drama' })).toBeInTheDocument();
  });

  it('renders correct number of show cards', () => {
    renderGenrePage('Drama');
    expect(screen.getAllByRole('img')).toHaveLength(mockGenreMap.Drama.length);
  });

  it('renders empty state for unknown genre', () => {
    renderGenrePage('Unknown');
    expect(screen.queryByRole('img')).not.toBeInTheDocument();
  });

  it('navigates to show detail on card click', () => {
    renderGenrePage('Drama');
    fireEvent.click(screen.getByText('Breaking Bad').closest('div'));
    expect(screen.getByTestId('show-detail')).toBeInTheDocument();
  });

  it('renders different genre from params', () => {
    renderGenrePage('Comedy');
    expect(screen.getByRole('heading', { name: 'Comedy' })).toBeInTheDocument();
    expect(screen.getByText('The Office')).toBeInTheDocument();
  });

});