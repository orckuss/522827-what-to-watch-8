import { Film } from '../types/film';
import { Genre } from '../types/genre';

export function filterFilmsByGenre(films: Array<Film>, genre: Genre): Array<Film> {
  return films.filter((film) => film.genre === genre);
}
