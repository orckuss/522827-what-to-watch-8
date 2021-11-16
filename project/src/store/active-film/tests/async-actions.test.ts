import thunk from 'redux-thunk';
import { configureMockStore } from '@jedmao/redux-mock-store';
import MockAdapter from 'axios-mock-adapter';
import { createAPI } from 'src/api/api';
import { Actions, ThunkApiDispatch } from 'src/types/actions';
import { GlobalState } from 'src/types/global-state';
import { APIRoutes, AppRoutes, HttpCode } from 'src/constants';
import { makeFakeCommentList, makeFakeFilm, makeFakeFilmList } from 'src/mocks/mocks';
import { getFilm, getSimilar, getComments, sendComment } from '../async-actions';
import { endRequest, setActiveFilm, setComments, setSimilar, startRequest } from '../actions';
import { redirect } from '@store/actions';
import { datatype } from 'faker';
import { generatePath } from 'react-router';

describe('acive-filrm store async actions', () => {
  const onUnauthorized = jest.fn();
  const api = createAPI(onUnauthorized);
  const mockAPI = new MockAdapter(api);
  const mockStore = configureMockStore<GlobalState, Actions, ThunkApiDispatch>([
    thunk.withExtraArgument(api),
  ]);

  it('case getFilm: should dispatch startRequest, setActiveFilm and endRequest when success response', async () => {
    const store = mockStore();
    const film = makeFakeFilm();
    const { id } = film;

    mockAPI.onGet(`${APIRoutes.Films}/${id}`).reply(HttpCode.Success, film);

    await store.dispatch(getFilm(id));

    expect(store.getActions()).toEqual([
      startRequest(),
      setActiveFilm(film),
      endRequest(),
    ]);
  });

  it('case getFilm: should dispatch startRequest, endRequest and redirect to NotFound when response status 404', async () => {
    const store = mockStore();
    const film = makeFakeFilm();
    const { id } = film;

    mockAPI.onGet(`${APIRoutes.Films}/${id}`).reply(HttpCode.NotFound);

    await store.dispatch(getFilm(id));

    expect(store.getActions()).toEqual([
      startRequest(),
      endRequest(),
      redirect(AppRoutes.NotFound),
    ]);
  });

  it('case getsimilar: should set similar when response status 200', async () => {
    const store = mockStore();
    const id = datatype.number();
    const films = makeFakeFilmList(2);

    mockAPI.onGet(`${APIRoutes.Films}/${id}/similar`).reply(HttpCode.Success, films);

    await store.dispatch(getSimilar(id));

    expect(store.getActions()).toEqual([
      setSimilar(films),
    ]);
  });

  it('case getsimilar: should set empty film when response status 404', async () => {
    const store = mockStore();
    const id = datatype.number();

    mockAPI.onGet(`${APIRoutes.Films}/${id}/similar`).reply(HttpCode.NotFound);

    await store.dispatch(getSimilar(id));

    expect(store.getActions()).toEqual([
      setSimilar([]),
    ]);
  });

  it('case getComments: should set comments to store when response status 200', async () => {
    const store = mockStore();
    const id = datatype.number();
    const comments = makeFakeCommentList(2);

    mockAPI.onGet(`${APIRoutes.Comments}/${id}`).reply(HttpCode.Success, comments);

    await store.dispatch(getComments(id));

    expect(store.getActions()).toEqual([
      setComments(comments),
    ]);
  });

  it('case getComments: should set empty array to store when error response', async () => {
    const store = mockStore();
    const id = datatype.number();

    mockAPI.onGet(`${APIRoutes.Comments}/${id}`).reply(HttpCode.NotFound);

    await store.dispatch(getComments(id));

    expect(store.getActions()).toEqual([
      setComments([]),
    ]);
  });

  it('case sendComment: expect dispatching startRequest, sendComments, endRequest and redirect to film', async () => {
    const store = mockStore();
    const id = datatype.number();
    const comments = makeFakeCommentList(2);

    mockAPI.onPost(`${APIRoutes.Comments}/${id}`).reply(HttpCode.Success, comments);

    await store.dispatch(sendComment({ comment: datatype.string(), rating: datatype.number() }, id));

    expect(store.getActions()).toEqual([
      startRequest(),
      setComments(comments),
      endRequest(),
      redirect(generatePath(AppRoutes.Films, { id })),
    ]);
  });

  it('case sendComment: expect dispatching startRequest and endRequest with error response', async () => {
    const store = mockStore();
    const id = datatype.number();
    mockAPI.onPost(`${APIRoutes.Comments}/${id}`).reply(HttpCode.BadRequest);

    await store.dispatch(sendComment({ comment: datatype.string(), rating: datatype.number() }, id));

    expect(store.getActions()).toEqual([
      startRequest(),
      endRequest(),
    ]);
  });
});
