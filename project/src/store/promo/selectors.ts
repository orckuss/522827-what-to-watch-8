import { Selector } from 'reselect';
import { Film } from 'src/types/film';
import { GlobalState } from 'src/types/global-state';

export const getPromoFilm: Selector<GlobalState, Film> = (state) => state.promo.film;
