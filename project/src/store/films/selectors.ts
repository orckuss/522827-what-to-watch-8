import { createSelector, Selector } from 'reselect';
import { DEFALUT_ACTIVE_GENRE } from 'src/constants';
import { Film } from 'src/types/film';
import { Genre } from 'src/types/genre';
import { GlobalState } from 'src/types/global-state';

export const getActiveGenre: Selector<GlobalState, Genre> = (state) => state.films.genre;

export const getFilms: Selector<GlobalState, Array<Film>> = (state) => state.films.films;

export const getFilmsLoadedState: Selector<GlobalState, boolean> = (state) => state.films.filmsLoaded;

export const getFilmCardsCount: Selector<GlobalState, number> = (state) => state.films.filmCardsCount;

export const getGenres = createSelector<GlobalState, Array<Film>, Array<Genre>>(
  getFilms,
  (films) => {
    const set = new Set(films.map((film) => film.genre));
    return [DEFALUT_ACTIVE_GENRE].concat(Array.from(set));
  },
);

export const getFilmsCount = createSelector<GlobalState, Array<Film>, number>(
  getFilms,
  (films) => films.length,
);

export const getFilteredFilms = createSelector<GlobalState, Genre, Array<Film>, Array<Film>>(
  getActiveGenre,
  getFilms,
  (genre, films) => !genre || genre === DEFALUT_ACTIVE_GENRE ?
    films : films.filter((film) => film.genre === genre),
);

export const getFilteredFilmsCount = createSelector<GlobalState, Array<Film>, number>(
  getFilteredFilms,
  (films) => films.length,
);

export const getSlicedFilteredFilms = createSelector<GlobalState, Array<Film>, number, Array<Film>>(
  getFilteredFilms,
  getFilmCardsCount,
  (films, count) => films.slice(0, count),
);
