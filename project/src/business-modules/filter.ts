import { DEFALUT_ACTIVE_GENRE } from '../constants';
import { Film } from '../types/film';
import { Genre } from '../types/genre';

export function filterFilmsByGenre(films: Array<Film>, genre: Genre): Array<Film> {
  return genre === DEFALUT_ACTIVE_GENRE ?
    films : films.filter((film) => film.genre === genre);
}
