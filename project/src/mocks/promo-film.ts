import { Movie } from '../types/film';

// ToDo: Delete mock on stage of integration with server
export const PROMO_FILM_MOCK: Movie = {
  id: 1,
  name: 'The Grand Budapest Hotel',
  posterImage: 'img/the-grand-budapest-hotel-poster.jpg',
  previewImage: 'img/bg-the-grand-budapest-hotel.jpg',
  backgroundImage: 'img/bg-the-grand-budapest-hotel.jpg',
  backgroundColor: '#ffffff',
  description: 'The Grand Budapest Hotel',
  director: 'director',
  genre: 'Drama',
  rating: 8.9,
  released: 2014,
  runTime: 160,
  scoresCount: 15,
  starring: ['Actor'],
  videoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
  previewVideoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
  isFavorite: true,
};
