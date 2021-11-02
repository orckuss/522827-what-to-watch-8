import { Film } from './film';
import { Genre } from './genre';

export type GlobalState = {
  genre: Genre;
  films: Array<Film>;
  filmsLoaded: boolean;
  filmCardsCount: number;
};
