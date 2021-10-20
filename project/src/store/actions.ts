import { ActionType } from '../types/actions';
import { Genre, GenreName } from '../types/genre';

export const changeGenre = (genre: GenreName) => ({
  type: ActionType.ChangeGenre,
  payload: {
    active: true,
    name: genre,
  } as Genre,
} as const);

export const filterFilms = (genre: GenreName) => ({
  type: ActionType.FilterFilms,
  payload: genre,
} as const);

export const resetFilter = () => ({
  type: ActionType.ResetFilter,
} as const);
