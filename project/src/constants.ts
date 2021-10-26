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
