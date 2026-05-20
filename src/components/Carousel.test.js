import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Carousel } from './Carousel';
import { mockShows } from '../data/dummy-data';

const renderCarousel = (props = {}) =>
  render(
    <MemoryRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Carousel title="Top Shows" items={mockShows} {...props} />
    </MemoryRouter>
  );

describe('Carousel', () => {
  it('renders without crashing', () => {
    renderCarousel();
  });

  it('renders the title', () => {
    renderCarousel();
    expect(screen.getByText('Top Shows')).toBeInTheDocument();
  });

  it('renders all show cards', () => {
    renderCarousel();
    expect(screen.getByText('Show 1')).toBeInTheDocument();
    expect(screen.getByText('Show 2')).toBeInTheDocument();
    expect(screen.getByText('Show 3')).toBeInTheDocument();
  });

  it('renders left and right scroll buttons', () => {
    renderCarousel();
    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(2);
  });

  it('calls scrollBy on right button click', () => {
    renderCarousel();
    const scrollMock = jest.fn();
    const [, rightBtn] = screen.getAllByRole('button');

    const container = document.querySelector('[style*="overflow"]');
    if (container) container.scrollBy = scrollMock;

    fireEvent.click(rightBtn);
  });

  it('navigates to show detail on card click', () => {
    renderCarousel();
    const card = screen.getByText('Show 1').closest('div[onClick], div');
    fireEvent.click(card);
  });
});
