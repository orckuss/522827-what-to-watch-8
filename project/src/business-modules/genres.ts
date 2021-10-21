import { DEFALUT_ACTIVE_GENRE } from '../constants';
import { Film } from '../types/film';
import { Genre } from '../types/genre';

export function mapFilmsToGenres(films: Array<Film>): Array<Genre> {
  const set = new Set(films.map((film) => film.genre));
  return [DEFALUT_ACTIVE_GENRE].concat(Array.from(set));
}
