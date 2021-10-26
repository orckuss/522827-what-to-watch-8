import { createSelector, Selector } from 'reselect';
import { DEFALUT_ACTIVE_GENRE } from '../../constants';
import { Film } from '../../types/film';
import { Genre } from '../../types/genre';
import { GlobalState } from '../../types/global-state';

export const getGenre: Selector<GlobalState, Genre> = (state) => state.genre;

export const getFilms: Selector<GlobalState, Array<Film>> = (state) => state.films;

export const getGenres = createSelector<GlobalState, Array<Film>, Array<Genre>>(
  getFilms,
  (films) => {
    const set = new Set(films.map((film) => film.genre));
    return [DEFALUT_ACTIVE_GENRE].concat(Array.from(set));
  },
);
