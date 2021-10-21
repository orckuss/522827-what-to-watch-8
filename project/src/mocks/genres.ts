import { mapFilmsToGenres } from '../business-modules/genres';
import { Genre } from '../types/genre';
import { FILMS_MOCK } from './films';

export const GENRES: Array<Genre> = mapFilmsToGenres(FILMS_MOCK);
