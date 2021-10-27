import { ActionType } from '../../types/actions';
import { Genre } from '../../types/genre';

export const changeGenre = (genre: Genre) => ({
  type: ActionType.ChangeGenre,
  payload: genre,
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
