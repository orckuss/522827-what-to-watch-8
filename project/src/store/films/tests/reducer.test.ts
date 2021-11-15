import { FILM_CARDS_COUNT } from 'src/constants';
import { FilmsState } from 'src/types/global-state';
import { changeGenre, increaseFilmCardsCount, resetFilmCardsCount, setfilms, setFilmsLoaded } from '../actions';
import { initialState, reducer } from '../reducer';
import { datatype } from 'faker';
import { makeFakeFilmList } from 'src/mocks/mocks';

describe('tests for films reducer', () => {
  it('case default: not expect change state when action is undefined', () => {
    const state: FilmsState = { films: [], filmsLoaded: true, filmCardsCount: datatype.number(), genre: 'Dramas' };

    expect(reducer(void 0, { type: undefined })).toBe(initialState);

    expect(reducer(state, { type: undefined })).toBe(state);
  });

  it('case changeGenre: should change only genre when action changeGenre', () => {
    const count = datatype.number();

    expect(reducer({ films: [], filmsLoaded: true, filmCardsCount: count, genre: 'Dramas' }, changeGenre('Crime')))
      .toEqual({ films: [], filmsLoaded: true, filmCardsCount: count, genre: 'Crime' });
  });

  it('case increaseCardsCount: should increase cards count by 8 when action increaseFilmCardsCount', () => {
    const count = datatype.number();

    expect(reducer({ films: [], filmsLoaded: true, filmCardsCount: count, genre: 'Dramas' }, increaseFilmCardsCount()))
      .toEqual({ films: [], filmsLoaded: true, filmCardsCount: count + 8, genre: 'Dramas' });
  });

  it('case resetCardsCount: should reset card count when action is resetFilmCardsCount', () => {
    expect(reducer({ films: [], filmsLoaded: true, filmCardsCount: datatype.number(), genre: 'Dramas' }, resetFilmCardsCount()))
      .toEqual({ films: [], filmsLoaded: true, filmCardsCount: FILM_CARDS_COUNT, genre: 'Dramas' });
  });

  it('case setfilms: should give state with new film list when action is setfilms', () => {
    const films = makeFakeFilmList(4);
    const count = datatype.number();

    expect(reducer({ films: [], filmsLoaded: false, filmCardsCount: count, genre: 'All genres' }, setfilms(films)))
      .toEqual({ films, filmsLoaded: false, filmCardsCount: count, genre: 'All genres' });
  });

  it('case setFilmsLoaded: shoud change filmsLoaded to true when action is setFilmsLoaded', () => {
    const films = makeFakeFilmList(26);
    const count = datatype.number();

    expect(reducer({ films, filmsLoaded: false, filmCardsCount: count, genre: 'All genres' }, setFilmsLoaded()))
      .toEqual({ films, filmsLoaded: true, filmCardsCount: count, genre: 'All genres' });
  });
});
