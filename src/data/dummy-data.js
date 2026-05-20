export const mockShows = [
  { id: 1, name: 'Show 1', image: { medium: 'https://example.com/1.jpg' }, rating: { average: 8.5 }, genres: ['Drama'] },
  { id: 2, name: 'Show 2', image: { medium: 'https://example.com/2.jpg' }, rating: { average: 7.2 }, genres: ['Comedy'] },
  { id: 3, name: 'Show 3', image: { medium: 'https://example.com/3.jpg' }, rating: { average: 9.0 }, genres: ['Thriller'] },
];

export const mockShow = {
  name: 'Breaking Bad',
  runtime: 47,
  rating: { average: 9.5 },
  image: { medium: 'https://example.com/poster.jpg' },
  genres: ['Drama', 'Thriller', 'Crime'],
  summary: '<p>A chemistry teacher turns to crime.</p>',
};

export const mockEpisode = {
  number: 1,
  name: 'Pilot',
  runtime: 47,
  image: { medium: 'https://example.com/episode.jpg' },
  summary: '<p>The story begins.</p>',
};

export const mockGenreMap = {
  Drama: [
    { id: 1, name: 'Breaking Bad', image: { medium: 'https://example.com/1.jpg' }, rating: { average: 9.5 }, genres: ['Drama'] },
    { id: 2, name: 'Chernobyl',    image: { medium: 'https://example.com/2.jpg' }, rating: { average: 9.4 }, genres: ['Drama'] },
  ],
  Comedy: [
    { id: 3, name: 'The Office',   image: { medium: 'https://example.com/3.jpg' }, rating: { average: 9.0 }, genres: ['Comedy'] },
  ],
};