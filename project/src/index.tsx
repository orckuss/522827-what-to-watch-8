import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/app/app';
import { FILMS_MOCK } from './mocks/films';
import { PROMO_FILM_MOCK } from './mocks/promo-film';
import { reducer } from './store/film/reducer.';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(reducer, composeWithDevTools());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        promoFilm={PROMO_FILM_MOCK}
        films={FILMS_MOCK}
      />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
