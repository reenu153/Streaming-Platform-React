import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Header } from './Header';

const renderHeader = () =>
  render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  );

describe('Header', () => {
  it('renders the title', () => {
    renderHeader();
    expect(screen.getByText('TV Explorer')).toBeInTheDocument();
  });

  it('renders home icon', () => {
    renderHeader();
    expect(screen.getByTestId('home-icon')).toBeInTheDocument();
  });

  it('renders search button', () => {
    renderHeader();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('search modal is closed by default', () => {
    renderHeader();
    expect(screen.queryByTestId('search-modal')).not.toBeInTheDocument();
  });

  it('opens search modal on search button click', () => {
    renderHeader();
    fireEvent.click(screen.getByRole('button'));
    expect(screen.getByTestId('search-modal')).toBeInTheDocument();
  });

  it('closes search modal when onClose is called', () => {
    renderHeader();
    fireEvent.click(screen.getByRole('button'));
    expect(screen.getByTestId('search-modal')).toBeInTheDocument();

    fireEvent.click(screen.getByTestId('search-modal-close'));
    expect(screen.queryByTestId('search-modal')).not.toBeInTheDocument();
  });

  it('navigates to home on home icon click', () => {
    renderHeader();
    fireEvent.click(screen.getByTestId('home-icon'));
  });
});
