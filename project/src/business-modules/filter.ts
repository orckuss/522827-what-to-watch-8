import { Film } from '../types/film';
import { GenreName } from '../types/genre';

export function filterFilmsByGenre(films: Array<Film>, genre: GenreName): Array<Film> {
  return films.filter((film) => film.genre === genre);
}
