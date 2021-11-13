import { createAction } from '@reduxjs/toolkit';
import { AuthStatus } from 'src/constants';
import { ActionType } from 'src/types/actions';
import { Film } from 'src/types/film';
import { UserInfo } from 'src/types/user';

export const setAuthStatus = createAction(
  ActionType.SetAuthStatus,
  (payload: AuthStatus) => ({ payload }),
);

export const setUserInfo = createAction(
  ActionType.SetUserInfo,
  (payload: UserInfo) => ({ payload }),
);

export const setFavoriteFilms = createAction(
  ActionType.SetFavoriteFilms,
  (payload: Array<Film>) => ({ payload }),
);
