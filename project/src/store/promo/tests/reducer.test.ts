import { makeFakeFilm } from 'src/mocks/mocks';
import { PromoFilmState } from 'src/types/global-state';
import { setPromo, setPromoLoaded } from '../actions';
import { reducer, initialState } from '../reducer';

describe('tests for promo film resucer', () => {
  it('should return initial state when state is undefined', () => {
    expect(reducer(void 0, { type: undefined })).toBe(initialState);
  });

  it('should return the same state when action is unknown', () => {
    const state: PromoFilmState = { film: makeFakeFilm(), isLoaded: true };

    expect(reducer(state, { type: undefined })).toBe(state);
  });

  it('should return film when action setPromoFilm', () => {
    const promofilm = makeFakeFilm();

    expect(reducer({ film: makeFakeFilm(), isLoaded: false }, setPromo(promofilm)))
      .toEqual({ film: promofilm, isLoaded: false });
  });

  it('should return load status true when action setPromoLoaded', () => {
    const promofilm = makeFakeFilm();

    expect(reducer({ film: promofilm, isLoaded: false }, setPromoLoaded()))
      .toEqual({ film: promofilm, isLoaded: true });
  });
});
