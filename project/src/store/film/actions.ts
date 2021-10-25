import { ActionType } from '../../types/actions';
import { Genre } from '../../types/genre';

export const changeGenre = (genre: Genre) => ({
  type: ActionType.ChangeGenre,
  payload: genre,
} as const);

export const filterFilms = (genre: Genre) => ({
  type: ActionType.FilterFilms,
  payload: genre,
} as const);

export const resetFilter = () => ({
  type: ActionType.ResetFilter,
} as const);
