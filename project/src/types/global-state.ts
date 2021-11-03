import { Film } from './film';
import { Genre } from './genre';

export type GlobalState = {
  film: FilmState;
  user: UserState;
}

export type FilmState = {
  genre: Genre;
  films: Array<Film>;
  filmsLoaded: boolean;
  filmCardsCount: number;
};

export type UserState = {
  authorizationStatus: boolean;
}
