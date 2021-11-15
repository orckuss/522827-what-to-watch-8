import { AuthStatus } from 'src/constants';
import { makeFakeFilmList, makeFakeUser } from 'src/mocks/mocks';
import { UserState } from 'src/types/global-state';
import { setAuthStatus, setFavoriteFilms, setUserInfo } from '../actions';
import { initialState, reducer } from '../reducer';

describe('tests for user reducer', () => {
  it('case default: expect not change state, when action is undefined', () => {
    const state: UserState = {
      info: makeFakeUser(),
      authorizationStatus: AuthStatus.Auth,
      favoriteFilms: makeFakeFilmList(3),
    };

    expect(reducer(void 0, { type: undefined })).toBe(initialState);

    expect(reducer(state, { type: undefined })).toBe(state);
  });

  it('case setUserInfo: should change only userinfo in state', () => {
    const user = makeFakeUser();

    expect(reducer({ info: null, authorizationStatus: AuthStatus.Unknown, favoriteFilms: [] }, setUserInfo(user)))
      .toEqual({ info: user, authorizationStatus: AuthStatus.Unknown, favoriteFilms: [] });
  });

  it('case setAuthStatus: expect auth-status is positive when user authorised', () => {
    const user = makeFakeUser();

    expect(reducer({ info: user, authorizationStatus: AuthStatus.Unknown, favoriteFilms: [] }, setAuthStatus(AuthStatus.Auth)))
      .toEqual({ info: user, authorizationStatus: AuthStatus.Auth, favoriteFilms: [] });
  });

  it('case setAuthStatus: expect auth-status is negative when user not authorised', () => {
    expect(reducer({ info: null, authorizationStatus: AuthStatus.Unknown, favoriteFilms: [] }, setAuthStatus(AuthStatus.NoAuth)))
      .toEqual({ info: null, authorizationStatus: AuthStatus.NoAuth, favoriteFilms: [] });
  });

  it('case setFavoriteFilms: expect new film list with action setFavoriteFilms', () => {
    const user = makeFakeUser();
    const films = makeFakeFilmList(3);

    expect(reducer({ info: user, authorizationStatus: AuthStatus.Auth, favoriteFilms: [] }, setFavoriteFilms(films)))
      .toEqual({ info: user, authorizationStatus: AuthStatus.Auth, favoriteFilms: films });
  });
});
