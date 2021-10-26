import {
  changeGenre,
  resetFilter
} from '../store/film/actions';

export enum ActionType {
  ChangeGenre = 'films/changeGenre',
  ResetFilter = 'films/resetFilter',
}

export type Actions =
  | ReturnType<typeof changeGenre>
  | ReturnType<typeof resetFilter>;
