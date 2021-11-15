import { createReducer } from '@reduxjs/toolkit';
import { DEFAULT_FILM_DATA } from 'src/constants';
import { ActiveFilmState } from 'src/types/global-state';
import { endRequest, setActiveFilm, setComments, setSimilar, startRequest } from './actions';

export const initialState: ActiveFilmState = {
  film: DEFAULT_FILM_DATA,
  similar: [],
  comments: [],
  requestStatus: false,
};

export const reducer = createReducer<ActiveFilmState>(initialState, (builder) => {
  builder
    .addCase(setActiveFilm, (state, action) => { state.film = action.payload; })
    .addCase(setSimilar, (state, action) => { state.similar = action.payload; })
    .addCase(setComments, (state, action) => { state.comments = action.payload; })
    .addCase(startRequest, (state) => { state.requestStatus = true; })
    .addCase(endRequest, (state) => { state.requestStatus = false; })
    .addDefaultCase((state) => state);
});
