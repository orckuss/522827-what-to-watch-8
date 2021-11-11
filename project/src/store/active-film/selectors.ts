import { Selector } from 'reselect';
import { SIMILAR_FILMS_COUNT } from 'src/constants';
import { Comment } from 'src/types/comment';
import { Film } from 'src/types/film';
import { GlobalState } from 'src/types/global-state';

export const getActiveFilm: Selector<GlobalState, Film> = (state) => state.activeFilm.film;

export const getSimilar: Selector<GlobalState, Array<Film>> = (state) => state.activeFilm.similar.slice(0, SIMILAR_FILMS_COUNT);

export const getComments: Selector<GlobalState, Array<Comment>> = (state) => state.activeFilm.comments;

export const getRequestStatus: Selector<GlobalState, boolean> = (state) => state.activeFilm.requestStatus;
