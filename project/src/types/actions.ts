import {
  changeGenre,
  filterFilms,
  resetFilter
} from '../store/actions';

export enum ActionType {
  ChangeGenre = 'films/changeGenre',
  FilterFilms = 'films/filter',
  ResetFilter = 'films/resetFilter',
}

export type Actions =
  | ReturnType<typeof changeGenre>
  | ReturnType<typeof filterFilms>
  | ReturnType<typeof resetFilter>;
