import {
  changeGenre,
  increaseFilmCardsCount,
  resetFilmCardsCount,
  resetFilter
} from '@store/film/actions';

export enum ActionType {
  ChangeGenre = 'films/changeGenre',
  ResetFilter = 'films/resetFilter',
  IncreaseFilmCardsCount = 'films/increaseFilmCardsCount',
  ResetFilmCardsCount = 'films/resetFilmCardsCount'
}

export type Actions =
  | ReturnType<typeof changeGenre>
  | ReturnType<typeof resetFilter>
  | ReturnType<typeof increaseFilmCardsCount>
  | ReturnType<typeof resetFilmCardsCount>;
