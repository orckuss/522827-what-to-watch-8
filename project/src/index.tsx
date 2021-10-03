import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { Movie } from './types/film';

// ToDo: Delete mock on stage of integration with server
const PROMO_FILM_MOCK: Partial<Movie> = {
  name: 'The Grand Budapest Hotel',
  genre: 'Drama',
  released: 2014,
  posterImage: 'img/the-grand-budapest-hotel-poster.jpg',
  backgroundImage: 'img/bg-the-grand-budapest-hotel.jpg',
};

ReactDOM.render(
  <React.StrictMode>
    <App promoFilm={PROMO_FILM_MOCK as Movie} />
  </React.StrictMode>,
  document.getElementById('root'));
