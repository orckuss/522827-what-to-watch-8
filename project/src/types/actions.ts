import { AxiosInstance } from 'axios';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import {
  changeGenre,
  increaseFilmCardsCount,
  resetFilmCardsCount,
  resetFilter,
  setfilms,
  setFilmsLoaded
} from '@store/films/actions';
import { redirect, setAuthStatus, setUserInfo } from '@store/user/actions';
import { GlobalState } from './global-state';
import { setActiveFilm } from '@store/active-film/actions';

export enum ActionType {
  ChangeGenre = 'films/changeGenre',
  ResetFilter = 'films/resetFilter',
  IncreaseFilmCardsCount = 'films/increaseFilmCardsCount',
  ResetFilmCardsCount = 'films/resetFilmCardsCount',
  SetFilms = 'films/setFilms',
  SetFilmsLoaded = 'films/setFilmsLoaded',
  SetAuthStatus = 'user/setAuthStatus',
  SetUserInfo = 'user/setUserInfo',
  Redirect = 'user/redirect',
  SetFilmById = 'film/setFilm',
  SetLoadedFilmStatus = 'film/setLoadedStatus',
}

export type ThunkActionResponse<R = Promise<void>> = ThunkAction<R, GlobalState, AxiosInstance, Actions>;
export type ThunkApiDispatch = ThunkDispatch<GlobalState, AxiosInstance, Actions>;

export type Actions =
  | ReturnType<typeof changeGenre>
  | ReturnType<typeof resetFilter>
  | ReturnType<typeof increaseFilmCardsCount>
  | ReturnType<typeof resetFilmCardsCount>
  | ReturnType<typeof setfilms>
  | ReturnType<typeof setFilmsLoaded>
  | ReturnType<typeof setAuthStatus>
  | ReturnType<typeof setUserInfo>
  | ReturnType<typeof redirect>
  | ReturnType<typeof setActiveFilm>;
