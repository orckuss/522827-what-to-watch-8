import { AxiosInstance } from 'axios';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import {
  changeGenre,
  increaseFilmCardsCount,
  resetFilmCardsCount,
  resetFilter,
  setfilms
} from '@store/film/actions';
import { GlobalState } from './global-state';

export enum ActionType {
  ChangeGenre = 'films/changeGenre',
  ResetFilter = 'films/resetFilter',
  IncreaseFilmCardsCount = 'films/increaseFilmCardsCount',
  ResetFilmCardsCount = 'films/resetFilmCardsCount',
  SetFilms = 'films/setFilms',
}

export type ThunkActionResponse<R = Promise<void>> = ThunkAction<R, GlobalState, AxiosInstance, Actions>;

export type ThunkApiDispatch = ThunkDispatch<GlobalState, AxiosInstance, Actions>;

export type Actions =
  | ReturnType<typeof changeGenre>
  | ReturnType<typeof resetFilter>
  | ReturnType<typeof increaseFilmCardsCount>
  | ReturnType<typeof resetFilmCardsCount>
  | ReturnType<typeof setfilms>;
