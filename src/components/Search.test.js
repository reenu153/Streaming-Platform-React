import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import { SearchModal } from './Search';
import { useSearch } from '../hooks/useSearch';

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  useNavigate: () => mockNavigate,
}));

jest.mock('../hooks/useSearch', () => ({
  useSearch: jest.fn(),
}));

describe('SearchModal', () => {
  const mockSetQuery = jest.fn();
  const mockOnClose = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders modal when open', () => {
    useSearch.mockReturnValue({
      query: '',
      setQuery: mockSetQuery,
      results: [],
      loading: false,
    });

    render(<SearchModal open={true} onClose={mockOnClose} />);

    expect(screen.getByTestId('search-modal')).toBeInTheDocument();
  });

  test('updates query on input change', () => {
    useSearch.mockReturnValue({
      query: '',
      setQuery: mockSetQuery,
      results: [],
      loading: false,
    });

    render(<SearchModal open={true} onClose={mockOnClose} />);

    const input = screen.getByPlaceholderText('Search shows...');
    fireEvent.change(input, { target: { value: 'friends' } });

    expect(mockSetQuery).toHaveBeenCalledWith('friends');
  });

  test('renders search results', () => {
    useSearch.mockReturnValue({
      query: 'test',
      setQuery: mockSetQuery,
      loading: false,
      results: [
        {
          show: {
            id: 1,
            name: 'Breaking Bad',
            runtime: 45,
            rating: { average: 9 },
            image: { medium: 'img.jpg' },
            summary: '<p>Great show</p>',
          },
        },
      ],
    });

    render(<SearchModal open={true} onClose={mockOnClose} />);

    expect(screen.getByText('Breaking Bad')).toBeInTheDocument();
    expect(screen.getByText(/45 min/)).toBeInTheDocument();
  });

  test('navigates when clicking a result', () => {
    useSearch.mockReturnValue({
      query: 'test',
      setQuery: mockSetQuery,
      loading: false,
      results: [
        {
          show: {
            id: 42,
            name: 'Dark',
            runtime: 50,
            rating: { average: 8.5 },
            image: { medium: 'img.jpg' },
            summary: '<p>Time travel</p>',
          },
        },
      ],
    });

    render(<SearchModal open={true} onClose={mockOnClose} />);

    fireEvent.click(screen.getByText('Dark'));

    expect(mockNavigate).toHaveBeenCalledWith('shows/42');
  });

  test('closes modal on close button click', () => {
    useSearch.mockReturnValue({
      query: 'test',
      setQuery: mockSetQuery,
      results: [],
      loading: false,
    });

    render(<SearchModal open={true} onClose={mockOnClose} />);

    fireEvent.click(screen.getByTestId('search-modal-close'));

    expect(mockOnClose).toHaveBeenCalled();
    expect(mockSetQuery).toHaveBeenCalledWith('');
  });

  test('closes modal when clicking outside', () => {
    useSearch.mockReturnValue({
      query: '',
      setQuery: mockSetQuery,
      results: [],
      loading: false,
    });

    render(<SearchModal open={true} onClose={mockOnClose} />);
    fireEvent.click(screen.getByTestId('search-modal'));
    expect(mockOnClose).toHaveBeenCalled();
  });
});
