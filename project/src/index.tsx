import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { PROMO_FILM_MOCK } from './mocks/promo-film';

ReactDOM.render(
  <React.StrictMode>
    <App promoFilm={PROMO_FILM_MOCK} />
  </React.StrictMode>,
  document.getElementById('root'));
