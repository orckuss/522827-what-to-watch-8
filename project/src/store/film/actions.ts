import { ActionType } from 'src/types/actions';
import { Film } from 'src/types/film';
import { Genre } from 'src/types/genre';

export const changeGenre = (payload: Genre) => ({
  type: ActionType.ChangeGenre,
  payload,
} as const);

export const resetFilter = () => ({
  type: ActionType.ResetFilter,
} as const);

export const increaseFilmCardsCount = () => ({
  type: ActionType.IncreaseFilmCardsCount,
} as const);

export const resetFilmCardsCount = () => ({
  type: ActionType.ResetFilmCardsCount,
} as const);

export const setfilms = (payload: Array<Film>) => ({
  type: ActionType.SetFilms,
  payload,
} as const);

export const setFilmsLoaded = (payload: boolean) => ({
  type: ActionType.SetFilmsLoaded,
  payload,
} as const);
