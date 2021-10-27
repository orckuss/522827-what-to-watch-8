import {
  changeGenre,
  increaseFilmCardsCount,
  resetFilter
} from '../store/film/actions';

export enum ActionType {
  ChangeGenre = 'films/changeGenre',
  ResetFilter = 'films/resetFilter',
  IncreaseFilmCardsCount = 'films/increaseFilmCardsCount',
}

export type Actions =
  | ReturnType<typeof changeGenre>
  | ReturnType<typeof increaseFilmCardsCount>
  | ReturnType<typeof resetFilter>;
