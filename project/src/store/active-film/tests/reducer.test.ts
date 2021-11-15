import { makeFakeCommentList, makeFakeFilm, makeFakeFilmList } from 'src/mocks/mocks';
import { Film } from 'src/types/film';
import { ActiveFilmState } from 'src/types/global-state';
import { endRequest, setActiveFilm, setComments, setSimilar, startRequest } from '../actions';
import { initialState, reducer } from '../reducer';

describe('ActiveFilm reduser tests', () => {
  it('should return initial state when called wuthout any params', () => {
    expect(reducer(void 0, { type: 'UNDEFINED' })).toEqual(initialState);
  });

  it('should returm the same state whem called with unknown action', () => {
    const state: ActiveFilmState = {
      film: makeFakeFilm(),
      requestStatus: true,
      comments: [],
      similar: [],
    };

    expect(reducer(state, { type: 'UNDEFINED' })).toEqual(state);
  });

  it('should switch loadStatus to true when action "startRequest"', () => {
    const fakeFilm = makeFakeFilm();

    expect(reducer({ film: fakeFilm, requestStatus: false, comments: [], similar: [] }, startRequest()))
      .toEqual({ film: fakeFilm, requestStatus: true, comments: [], similar: [] });
  });

  it('should switch loadStatus to false when action "endRequest"', () => {
    const fakeFilm = makeFakeFilm();

    expect(reducer({ film: fakeFilm, requestStatus: true, comments: [], similar: [] }, endRequest()))
      .toEqual({ film: fakeFilm, requestStatus: false, comments: [], similar: [] });
  });

  it('should set active film when action setActiveFilm', () => {
    const fakeFilm = makeFakeFilm();

    expect(reducer({ film: null as unknown as Film, requestStatus: false, comments: [], similar: [] }, setActiveFilm(fakeFilm)))
      .toEqual({ film: fakeFilm, requestStatus: false, comments: [], similar: [] });

    expect(reducer({ film: makeFakeFilm(), requestStatus: false, comments: [], similar: [] }, setActiveFilm(fakeFilm)))
      .toEqual({ film: fakeFilm, requestStatus: false, comments: [], similar: [] });
  });

  it('should set similar films when action setSimilar', () => {
    const fakeFilmList = makeFakeFilmList(2);

    expect(reducer({ similar: [] as unknown } as ActiveFilmState, setSimilar(fakeFilmList)))
      .toEqual({ similar: fakeFilmList });

    expect(reducer({ similar: makeFakeFilmList(2) } as ActiveFilmState, setSimilar(makeFakeFilmList(3))))
      .not.toEqual({ similar: makeFakeFilmList(5) });
  });

  it('should set comments when action setComments', () => {
    const fakeComentList = makeFakeCommentList(3);

    expect(reducer({ comments: [] as unknown } as ActiveFilmState, setComments(fakeComentList)))
      .toEqual({ comments: fakeComentList });
  });
});
