import { makeFakeCommentList, makeFakeFilm, makeFakeFilmList } from 'src/mocks/mocks';
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
    expect(reducer({ requestStatus: false } as ActiveFilmState, startRequest()))
      .toEqual({ requestStatus: true });

    expect(reducer({ requestStatus: true } as ActiveFilmState, startRequest()))
      .toEqual({ requestStatus: true });
  });

  it('should switch loadStatus to false when action "endRequest"', () => {
    expect(reducer({ requestStatus: false } as ActiveFilmState, endRequest()))
      .toEqual({ requestStatus: false });

    expect(reducer({ requestStatus: true } as ActiveFilmState, endRequest()))
      .toEqual({ requestStatus: false });
  });

  it('should set active film when action setActiveFilm', () => {
    const fakeFilm = makeFakeFilm();

    expect(reducer({ film: null as unknown } as ActiveFilmState, setActiveFilm(fakeFilm)))
      .toEqual({ film: fakeFilm });

    expect(reducer({ film: makeFakeFilm() } as ActiveFilmState, setActiveFilm(fakeFilm)))
      .toEqual({ film: fakeFilm });

    expect(reducer({ film: makeFakeFilm(), requestStatus: false } as ActiveFilmState, setActiveFilm(fakeFilm)))
      .not.toEqual({ film: fakeFilm, requestStatus: true });
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
