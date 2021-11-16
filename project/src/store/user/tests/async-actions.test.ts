import { configureMockStore } from '@jedmao/redux-mock-store';
import thunk from 'redux-thunk';
import { createAPI } from 'src/api/api';
import { Actions, ThunkApiDispatch } from 'src/types/actions';
import { GlobalState } from 'src/types/global-state';
import MockAdapter from 'axios-mock-adapter';
import { APIRoutes, AuthStatus, HttpCode, AUTH_TOKEN_KEY_NAME, AppRoutes, FavoriteRequestData } from 'src/constants';
import { makeFakeFilm, makeFakeFilmList, makeFakeUser } from 'src/mocks/mocks';
import { changeFavorite, checkAuth, getFavoriteFilms, login, logout } from '../async-actions';
import { setAuthStatus, setFavoriteFilms, setUserInfo } from '../actions';
import { AuthRequest } from 'src/types/user';
import { internet } from 'faker';
import { redirect } from '@store/actions';
import { setActiveFilm } from '@store/active-film/actions';
import { setPromo } from '@store/promo/actions';

const TOKEN = 'TOKEN';

describe('userState async action', () => {
  const onUnauthorized = jest.fn();
  const api = createAPI(onUnauthorized);
  const mockAPI = new MockAdapter(api);
  const mockStore = configureMockStore<GlobalState, Actions, ThunkApiDispatch>([
    thunk.withExtraArgument(api),
  ]);

  it('case checkAuth: should dispatch setAuthStatus=Auth and setUserInfo when response status 200', async () => {
    const user = makeFakeUser(TOKEN);
    const store = mockStore();

    Storage.prototype.setItem = jest.fn();

    mockAPI.onGet(APIRoutes.Login).reply(HttpCode.Success, user);

    expect(store.getActions()).toEqual([]);

    await store.dispatch(checkAuth());

    expect(Storage.prototype.setItem).toBeCalledTimes(1);
    expect(Storage.prototype.setItem).toBeCalledWith(AUTH_TOKEN_KEY_NAME, TOKEN);

    expect(store.getActions()).toEqual([
      setAuthStatus(AuthStatus.Auth),
      setUserInfo(user),
    ]);
  });

  it('case checkAuth: should call onUnauthorized callback when response status 401', async () => {
    const store = mockStore();

    mockAPI.onGet(APIRoutes.Login).reply(HttpCode.Unauthorized);

    await store.dispatch(checkAuth());

    expect(onUnauthorized).toBeCalled();
  });

  it('case login: should dispatch AuthStatus=Auth, setUserInfo and Redirect to /main when respose status is 200', async () => {
    const user = makeFakeUser(TOKEN);
    const authData: AuthRequest = { email: internet.email(), password: internet.password() };
    const store = mockStore();

    Storage.prototype.setItem = jest.fn();

    mockAPI.onPost(APIRoutes.Login).reply(HttpCode.Success, user);

    expect(store.getActions()).toEqual([]);

    await store.dispatch(login(authData));

    expect(Storage.prototype.setItem).toBeCalledTimes(1);
    expect(Storage.prototype.setItem).toBeCalledWith(AUTH_TOKEN_KEY_NAME, TOKEN);

    expect(store.getActions()).toEqual([
      setAuthStatus(AuthStatus.Auth),
      setUserInfo(user),
      redirect(AppRoutes.Main),
    ]);
  });

  it('case logout: should set AuthStatus to NoAuth, user to null and remove token', async () => {
    const store = mockStore();

    Storage.prototype.removeItem = jest.fn();

    mockAPI.onDelete(APIRoutes.Logout).reply(HttpCode.NoContent);

    expect(store.getActions()).toEqual([]);

    await store.dispatch(logout());

    expect(Storage.prototype.removeItem).toBeCalled();
    expect(Storage.prototype.removeItem).toBeCalledWith(AUTH_TOKEN_KEY_NAME);

    expect(store.getActions()).toEqual([
      setAuthStatus(AuthStatus.NoAuth),
      setUserInfo(null),
    ]);
  });

  it('case getFavoriteFilms: should set film list to store with setFavorite action when response status 200', async () => {
    const films = makeFakeFilmList(2);
    const store = mockStore();

    mockAPI.onGet(APIRoutes.Favorite).reply(HttpCode.Success, films);

    expect(store.getActions()).toEqual([]);

    await store.dispatch(getFavoriteFilms());

    expect(store.getActions()).toEqual([
      setFavoriteFilms(films),
    ]);
  });

  it('case changeFavorite: should set returned film to promo store if dispatch from promo', async () => {
    const promo = makeFakeFilm();
    const active = makeFakeFilm();
    const { id } = promo;
    const store = mockStore({ promo: { film: promo }, activeFilm: { film: active } });

    mockAPI.onPost(`${APIRoutes.Favorite}/${id}/${FavoriteRequestData.Add}`).reply(HttpCode.Success, promo);
    mockAPI.onPost(`${APIRoutes.Favorite}/${id}/${FavoriteRequestData.Delete}`).reply(HttpCode.Success, promo);

    expect(store.getActions()).toEqual([]);

    await store.dispatch(changeFavorite(id, FavoriteRequestData.Add));

    expect(store.getActions()).toEqual([
      setPromo(promo),
    ]);
  });

  it('case changeFavorite: should set returned film to active-film store if dispatch from active', async () => {
    const promo = makeFakeFilm();
    const active = makeFakeFilm();
    const { id } = active;
    const store = mockStore({ promo: { film: promo }, activeFilm: { film: active } });

    mockAPI.onPost(`${APIRoutes.Favorite}/${id}/${FavoriteRequestData.Add}`).reply(HttpCode.Success, active);
    mockAPI.onPost(`${APIRoutes.Favorite}/${id}/${FavoriteRequestData.Delete}`).reply(HttpCode.Success, active);

    expect(store.getActions()).toEqual([]);

    await store.dispatch(changeFavorite(id, FavoriteRequestData.Delete));

    expect(store.getActions()).toEqual([
      setActiveFilm(active),
    ]);
  });

  it('case changeFavorite: should set returned film both to active-film and promo in store if they equal', async () => {
    const film = makeFakeFilm();
    const { id } = film;
    const store = mockStore({ promo: { film }, activeFilm: { film } });

    mockAPI.onPost(`${APIRoutes.Favorite}/${id}/${FavoriteRequestData.Add}`).reply(HttpCode.Success, film);
    mockAPI.onPost(`${APIRoutes.Favorite}/${id}/${FavoriteRequestData.Delete}`).reply(HttpCode.Success, film);

    expect(store.getActions()).toEqual([]);

    await store.dispatch(changeFavorite(id, FavoriteRequestData.Add));

    expect(store.getActions()).toEqual([
      setPromo(film),
      setActiveFilm(film),
    ]);

    store.clearActions();

    await store.dispatch(changeFavorite(id, FavoriteRequestData.Delete));

    expect(store.getActions()).toEqual([
      setPromo(film),
      setActiveFilm(film),
    ]);
  });
});
