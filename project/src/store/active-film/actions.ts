import { ActionType } from 'src/types/actions';
import { Comment } from 'src/types/comment';
import { Film } from 'src/types/film';

export const setActiveFilm = (payload: Film) => ({
  type: ActionType.SetFilmById,
  payload,
} as const);

export const setSimilar = (payload: Array<Film>) => ({
  type: ActionType.SetSimilar,
  payload,
} as const);

export const setComments = (payload: Array<Comment>) => ({
  type: ActionType.SetComments,
  payload,
} as const);

export const startSendingComment = () => ({
  type: ActionType.StartSendingComment,
} as const);

export const endSendingComment = () => ({
  type: ActionType.EndSendingComment,
} as const);
