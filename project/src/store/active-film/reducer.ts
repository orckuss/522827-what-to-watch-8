import { createReducer } from '@reduxjs/toolkit';
import { DEFAULT_FILM_DATA } from 'src/constants';
import { ActiveFilmState } from 'src/types/global-state';
import { endSendingComment, setActiveFilm, setComments, setSimilar, startSendingComment } from './actions';

const initialState: ActiveFilmState = {
  film: DEFAULT_FILM_DATA,
  similar: [],
  comments: [],
  isCommentSending: false,
};

export const reducer = createReducer<ActiveFilmState>(initialState, (builder) => {
  builder
    .addCase(setActiveFilm, (state, action) => { state.film = action.payload; })
    .addCase(setSimilar, (state, action) => { state.similar = action.payload; })
    .addCase(setComments, (state, action) => { state.comments = action.payload; })
    .addCase(startSendingComment, (state) => { state.isCommentSending = true; })
    .addCase(endSendingComment, (state) => { state.isCommentSending = false; })
    .addDefaultCase((state) => state);
});
