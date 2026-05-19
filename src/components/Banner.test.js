import { render, screen, act } from '@testing-library/react';
import { Banner } from './Banner';
import { mockShows } from '../data/dummy-data';

describe('Banner', () => {
  beforeEach(() => jest.useFakeTimers());
  afterEach(() => jest.useRealTimers());

  it('renders all show images', () => {
    render(<Banner shows={mockShows} />);
    const images = screen.getAllByRole('img');
    expect(images).toHaveLength(mockShows.length);
  });

  it('first show is visible on mount', () => {
    render(<Banner shows={mockShows} />);
    const images = screen.getAllByRole('img');
    expect(images[0]).toHaveClass('opacity-100');
    expect(images[1]).toHaveClass('opacity-0');
    expect(images[2]).toHaveClass('opacity-0');
  });

  it('advances to next show after 4 seconds', () => {
    render(<Banner shows={mockShows} />);

    act(() => jest.advanceTimersByTime(4000));

    const images = screen.getAllByRole('img');
    expect(images[0]).toHaveClass('opacity-0');
    expect(images[1]).toHaveClass('opacity-100');
  });

  it('cycles back to first show after all shows', () => {
    render(<Banner shows={mockShows} />);

    act(() => jest.advanceTimersByTime(4000 * mockShows.length));

    const images = screen.getAllByRole('img');
    expect(images[0]).toHaveClass('opacity-100');
  });

  it('clears interval on unmount', () => {
    const clearSpy = jest.spyOn(global, 'clearInterval');
    const { unmount } = render(<Banner shows={mockShows} />);
    unmount();
    expect(clearSpy).toHaveBeenCalled();
  });
});
