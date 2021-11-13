import { AxiosInstance } from 'axios';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import {
  changeGenre,
  increaseFilmCardsCount,
  resetFilmCardsCount,
  setfilms,
  setFilmsLoaded
} from '@store/films/actions';
import { setAuthStatus, setFavoriteFilms, setUserInfo } from '@store/user/actions';
import { GlobalState } from './global-state';
import {
  setActiveFilm,
  setComments,
  startRequest,
  setSimilar,
  endRequest
} from '@store/active-film/actions';
import { redirect } from '@store/actions';
import { setPromo, setPromoLoaded } from '@store/promo/actions';

export enum ActionType {
  Redirect = 'app/redirect',
  ChangeGenre = 'films/changeGenre',
  IncreaseFilmCardsCount = 'films/increaseFilmCardsCount',
  ResetFilmCardsCount = 'films/resetFilmCardsCount',
  SetFilms = 'films/setFilms',
  SetFilmsLoaded = 'films/setFilmsLoaded',
  SetAuthStatus = 'user/setAuthStatus',
  SetUserInfo = 'user/setUserInfo',
  SetFavoriteFilms = 'user/setFavoriteFilms',
  SetFilmById = 'film/setFilm',
  SetSimilar = 'film/setSimilar',
  SetComments = 'film/setComments',
  StartRequest = 'film/startRequest',
  EndRequest = 'film/endRequest',
  SetPromo = 'promo/setPromo',
  SetPromoLoaded = 'promo/setLoaded',
}

export type ThunkActionResponse<R = Promise<void>> = ThunkAction<R, GlobalState, AxiosInstance, Actions>;
export type ThunkApiDispatch = ThunkDispatch<GlobalState, AxiosInstance, Actions>;

export type Actions =
  | ReturnType<typeof redirect>
  | ReturnType<typeof changeGenre>
  | ReturnType<typeof increaseFilmCardsCount>
  | ReturnType<typeof resetFilmCardsCount>
  | ReturnType<typeof setfilms>
  | ReturnType<typeof setFilmsLoaded>
  | ReturnType<typeof setAuthStatus>
  | ReturnType<typeof setUserInfo>
  | ReturnType<typeof setFavoriteFilms>
  | ReturnType<typeof setActiveFilm>
  | ReturnType<typeof setSimilar>
  | ReturnType<typeof setComments>
  | ReturnType<typeof startRequest>
  | ReturnType<typeof endRequest>
  | ReturnType<typeof setPromo>
  | ReturnType<typeof setPromoLoaded>;
