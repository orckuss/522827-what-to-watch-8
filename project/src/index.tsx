import React from 'react';
import ReactDOM from 'react-dom';
import { combineReducers } from 'redux';
import { Provider } from 'react-redux';
import App from './components/app/app';
import { reducer as filmReducer } from '@store/films/reducer';
import { reducer as userReducer } from '@store/user/reducer';
import { reducer as activeFilmReducer } from '@store/active-film/reducer';
import { reducer as PromoReducer } from '@store/promo/reducer';
import { createAPI } from './api/api';
import { getFilms } from './store/films/async-actions';
import { ThunkApiDispatch } from './types/actions';
import { GlobalState } from './types/global-state';
import { checkAuth } from '@store/user/async-actions';
import { setAuthStatus } from '@store/user/actions';
import { redirect } from '@store/middlewares';
import { AuthStatus } from './constants';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { configureStore } from '@reduxjs/toolkit';
import { getPromo } from '@store/promo/async-action';
import { Router } from 'react-router-dom';
import { browserHistory } from 'src/utils/browser-history';

const api = createAPI(() => {
  store.dispatch(setAuthStatus(AuthStatus.NoAuth));
});

const reducer = combineReducers<GlobalState>({
  films: filmReducer,
  user: userReducer,
  activeFilm: activeFilmReducer,
  promo: PromoReducer,
});

const store = configureStore({
  reducer,
  middleware: (getDefault) => getDefault({
    thunk: { extraArgument: api },
  }).concat(redirect),
});

(store.dispatch as ThunkApiDispatch)(getFilms());
(store.dispatch as ThunkApiDispatch)(checkAuth());
(store.dispatch as ThunkApiDispatch)(getPromo());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router history={browserHistory}>
        <ToastContainer />
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
