import { createReducer } from '@reduxjs/toolkit';
import { DEFALUT_ACTIVE_GENRE, FILM_CARDS_COUNT } from 'src/constants';
import { FilmsState } from 'src/types/global-state';
import { changeGenre, increaseFilmCardsCount, resetFilmCardsCount, setfilms, setFilmsLoaded } from './actions';

export const initialState: FilmsState = {
  films: [],
  filmsLoaded: false,
  genre: DEFALUT_ACTIVE_GENRE,
  filmCardsCount: FILM_CARDS_COUNT,
};

export const reducer = createReducer<FilmsState>(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => { state.genre = action.payload; })
    .addCase(increaseFilmCardsCount, (state) => { state.filmCardsCount += FILM_CARDS_COUNT; })
    .addCase(resetFilmCardsCount, (state) => { state.filmCardsCount = FILM_CARDS_COUNT; })
    .addCase(setfilms, (state, action) => { state.films = action.payload; })
    .addCase(setFilmsLoaded, (state, action) => { state.filmsLoaded = true; })
    .addDefaultCase((state) => state);
});
