import { createAction } from '@reduxjs/toolkit';
import { ActionType } from 'src/types/actions';
import { Comment } from 'src/types/comment';
import { Film } from 'src/types/film';

export const setActiveFilm = createAction(
  ActionType.SetFilmById,
  (payload: Film) => ({ payload }),
);

export const setSimilar = createAction(
  ActionType.SetSimilar,
  (payload: Array<Film>) => ({ payload }),
);

export const setComments = createAction(
  ActionType.SetComments,
  (payload: Array<Comment>) => ({ payload }),
);

export const startRequest = createAction(ActionType.StartRequest);

export const endRequest = createAction(ActionType.EndRequest);
