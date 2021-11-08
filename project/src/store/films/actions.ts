import { createAction } from '@reduxjs/toolkit';
import { ActionType } from 'src/types/actions';
import { Film } from 'src/types/film';
import { Genre } from 'src/types/genre';

export const changeGenre = createAction(
  ActionType.ChangeGenre,
  (payload: Genre) => ({ payload }),
);

export const resetFilter = createAction(ActionType.ResetFilter);

export const increaseFilmCardsCount = createAction(ActionType.IncreaseFilmCardsCount);

export const resetFilmCardsCount = createAction(ActionType.ResetFilmCardsCount);

export const setfilms = createAction(
  ActionType.SetFilms,
  (payload: Array<Film>) => ({ payload }),
);

export const setFilmsLoaded = createAction(
  ActionType.SetFilmsLoaded,
  (payload: boolean) => ({ payload }),
);
