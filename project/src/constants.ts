import { Genre } from './types/genre';

export const enum AppRoutes {
  Main = '/',
  SignIn = '/login',
  MyList = '/mylist',
  Films = '/films/:id',
  Review = '/films/:id/review',
  Player = '/player/:id',
}

export const STAR_COUNT = 10;

export const DEFALUT_ACTIVE_GENRE: Genre = 'All genres';

export const FILM_CARDS_COUNT = 8;
export const SIMILAR_FILMS_COUNT = 4;

export const enum APIRoutes {
  Films = '/films',
  Login = '/login',
  Logout = '/logout',
}

export const REQUEST_BASE_URL = 'https://8.react.pages.academy/wtw';
export const REQUEST_TIMEOUT = 5000;

export const enum HttpCode {
  Unauthorized = 401,
}

export const AUTH_TOKEN_KEY_NAME = 'authorization-token';
export const EMAIL_PATTERN = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
export const PASSWORD_PATTERN = /(?=.*[A-Za-z])(?=.*[0-9])[A-Za-z0-9]+/;
