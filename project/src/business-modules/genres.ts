import { Film } from '../types/film';
import { Genre } from '../types/genre';

export function mapFilmsToGenres(films: Array<Film>): Array<Genre> {
  const set = new Set(films.map((film) => film.genre));
  return Array.from(set);
}
