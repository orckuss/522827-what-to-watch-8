import { AuthStatus } from 'src/constants';
import { Film } from './film';
import { Genre } from './genre';
import { UserInfo } from './user';

export type GlobalState = {
  films: FilmsState;
  user: UserState;
  activeFilm: ActiveFilmState;
};

export type FilmsState = {
  genre: Genre;
  films: Array<Film>;
  filmsLoaded: boolean;
  filmCardsCount: number;
};

export type UserState = {
  authorizationStatus: AuthStatus;
  info: UserInfo;
};

export type ActiveFilmState = {
  film: Film;
  similar: Array<Film>;
};
