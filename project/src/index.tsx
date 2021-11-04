import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/app/app';
import { PROMO_FILM_MOCK } from './mocks/promo-film';
import { reducer as filmReducer } from '@store/film/reducer';
import { reducer as userReducer } from '@store/user/reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createAPI } from './api/api';
import thunk from 'redux-thunk';
import { getFilms } from './store/film/async-actions';
import { ThunkApiDispatch } from './types/actions';
import { GlobalState } from './types/global-state';
import { checkAuth } from '@store/user/async-actions';
import { setAuthStatus } from '@store/user/actions';
import { redirect } from '@store/user/middlewares';
import { AuthStatus } from './constants';

const api = createAPI(() => {
  store.dispatch(setAuthStatus(AuthStatus.NoAuth));
});

const reducer = combineReducers<GlobalState>({
  film: filmReducer,
  user: userReducer,
});

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument(api)),
    applyMiddleware(redirect),
  ),
);

(store.dispatch as ThunkApiDispatch)(getFilms());
(store.dispatch as ThunkApiDispatch)(checkAuth());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App promoFilm={PROMO_FILM_MOCK} />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
