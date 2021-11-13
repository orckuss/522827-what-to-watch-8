import { createReducer } from '@reduxjs/toolkit';
import { AuthStatus } from 'src/constants';
import { UserState } from 'src/types/global-state';
import { setAuthStatus, setFavoriteFilms, setUserInfo } from './actions';

const initialState: UserState = {
  authorizationStatus: AuthStatus.Unknown,
  info: null,
  favoriteFilms: [],
};

export const reducer = createReducer<UserState>(initialState, (builder) => {
  builder
    .addCase(setAuthStatus, (state, action) => { state.authorizationStatus = action.payload; })
    .addCase(setUserInfo, (state, action) => { state.info = action.payload; })
    .addCase(setFavoriteFilms, (state, action) => { state.favoriteFilms = action.payload; })
    .addDefaultCase((state) => state);
});
