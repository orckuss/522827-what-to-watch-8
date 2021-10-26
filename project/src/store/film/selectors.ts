import { createSelector, OutputSelector, Selector } from 'reselect';
import { DEFALUT_ACTIVE_GENRE, SIMILAR_FILMS_COUNT } from '../../constants';
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

export const getFilteredFilms = createSelector<GlobalState, Genre, Array<Film>, Array<Film>>(
  getGenre,
  getFilms,
  (genre, films) => genre === DEFALUT_ACTIVE_GENRE ?
    films : films.filter((film) => film.genre === genre),
);

export const getSimilarFilmsFactory = (id: number): OutputSelector<GlobalState, Array<Film>, (films: Array<Film>) => Array<Film>> =>
  createSelector<GlobalState, Array<Film>, Array<Film>>(
    getFilms,
    (films) => {
      const activeFilm = films.find((film) => film.id === id);
      return films
        .filter((film) => film.id !== activeFilm?.id && film.genre === activeFilm?.genre)
        .slice(0, SIMILAR_FILMS_COUNT);
    },
  );
