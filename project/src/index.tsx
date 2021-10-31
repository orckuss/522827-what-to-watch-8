import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/app/app';
import { FILMS_MOCK } from './mocks/films';
import { PROMO_FILM_MOCK } from './mocks/promo-film';
import { reducer } from './store/film/reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createAPI } from './api/api';
import thunk from 'redux-thunk';
import { setfilms } from './store/film/actions';

const api = createAPI();

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument(api)),
  ),
);

store.dispatch(setfilms(FILMS_MOCK));

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
