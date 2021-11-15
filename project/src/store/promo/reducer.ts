import { createReducer } from '@reduxjs/toolkit';
import { DEFAULT_FILM_DATA } from 'src/constants';
import { PromoFilmState } from 'src/types/global-state';
import { setPromo, setPromoLoaded } from './actions';

export const initialState: PromoFilmState = {
  film: DEFAULT_FILM_DATA,
  isLoaded: false,
};

export const reducer = createReducer<PromoFilmState>(initialState, (builder) => {
  builder
    .addCase(setPromo, (state, action) => { state.film = action.payload; })
    .addCase(setPromoLoaded, (state) => { state.isLoaded = true; })
    .addDefaultCase((state) => state);
});
