import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { Film } from './types/film';

// ToDo: Delete mock on stage of integration with server
const PROMO_FILM_MOCK: Partial<Film> = {
  name: 'The Grand Budapest Hotel',
  genre: 'Drama',
  released: 2014,
};

ReactDOM.render(
  <React.StrictMode>
    <App
      name={PROMO_FILM_MOCK.name as string}
      genre={PROMO_FILM_MOCK.genre as string}
      released={PROMO_FILM_MOCK.released as number}
    />
  </React.StrictMode>,
  document.getElementById('root'));
