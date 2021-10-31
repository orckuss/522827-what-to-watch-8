import {
  changeGenre,
  increaseFilmCardsCount,
  resetFilmCardsCount,
  resetFilter,
  setfilms,
} from '../store/film/actions';

export enum ActionType {
  ChangeGenre = 'films/changeGenre',
  ResetFilter = 'films/resetFilter',
  IncreaseFilmCardsCount = 'films/increaseFilmCardsCount',
  ResetFilmCardsCount = 'films/resetFilmCardsCount',
  SetFilms = 'films/setFilms',
}

export type Actions =
  | ReturnType<typeof changeGenre>
  | ReturnType<typeof resetFilter>
  | ReturnType<typeof increaseFilmCardsCount>
  | ReturnType<typeof resetFilmCardsCount>
  | ReturnType<typeof setfilms>;
