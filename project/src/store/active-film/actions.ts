import { ActionType } from 'src/types/actions';
import { Film } from 'src/types/film';

export const setActiveFilm = (payload: Film) => ({
  type: ActionType.SetFilmById,
  payload,
} as const);
