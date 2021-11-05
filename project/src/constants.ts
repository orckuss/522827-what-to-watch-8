import { Film } from './types/film';
import { Genre } from './types/genre';

export const enum AppRoutes {
  Main = '/',
  SignIn = '/login',
  MyList = '/mylist',
  Films = '/films/:id',
  Review = '/films/:id/review',
  Player = '/player/:id',
  NotFound = '/NotFound',
}

export const STAR_COUNT = 10;
export const DEFALUT_RATING_VALUE = 0;
export const TEXT_COMMENT_MIN_LENGTH = 50;
export const TEXT_COMMENT_MAX_LENGTH = 400;

export const DEFALUT_ACTIVE_GENRE: Genre = 'All genres';

export const FILM_CARDS_COUNT = 8;
export const SIMILAR_FILMS_COUNT = 4;

export const enum APIRoutes {
  Films = '/films',
  Comments = '/comments',
  Login = '/login',
  Logout = '/logout',
}

export const REQUEST_BASE_URL = 'https://8.react.pages.academy/wtw';
export const REQUEST_TIMEOUT = 5000;

export const enum HttpCode {
  Unauthorized = 401,
  NotFound = 404,
}

export const enum AuthStatus {
  Auth = 'Auth',
  NoAuth = 'NoAuth',
  Unknown = 'Unknown',
}

export const AUTH_TOKEN_KEY_NAME = 'authorization-token';
export const EMAIL_PATTERN = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
export const PASSWORD_PATTERN = /(?=.*[A-Za-z])(?=.*[0-9])[A-Za-z0-9]+/;

export const DEFAULT_FILM_DATA: Film = {
  id: -1,
  backgroundColor: '',
  backgroundImage: '',
  description: '',
  director: '',
  genre: '' as Genre,
  isFavorite: false,
  name: '',
  posterImage: '',
  previewImage: '',
  previewVideoLink: '',
  rating: 0,
  released: 0,
  runTime: 0,
  scoresCount: 0,
  starring: [],
  videoLink: '',
};
