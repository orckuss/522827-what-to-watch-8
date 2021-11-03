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
