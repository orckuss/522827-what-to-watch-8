import thunk from 'redux-thunk';
import { configureMockStore } from '@jedmao/redux-mock-store';
import MockAdapter from 'axios-mock-adapter';
import { createAPI } from 'src/api/api';
import { Actions, ThunkApiDispatch } from 'src/types/actions';
import { GlobalState } from 'src/types/global-state';
import { makeFakeFilmList } from 'src/mocks/mocks';
import { APIRoutes, HttpCode } from 'src/constants';
import { getFilms } from '../async-actions';
import { setfilms, setFilmsLoaded } from '../actions';

describe('films-state async actions', () => {
  const onUnauthorized = jest.fn();
  const api = createAPI(onUnauthorized);
  const mockAPI = new MockAdapter(api);
  const mockStore = configureMockStore<GlobalState, Actions, ThunkApiDispatch>([
    thunk.withExtraArgument(api),
  ]);

  it('should dispatch film-list and status loaded when response status 200', async () => {
    const store = mockStore();
    const films = makeFakeFilmList(1);

    mockAPI.onGet(APIRoutes.Films).reply(HttpCode.Success, films);

    await store.dispatch(getFilms());

    expect(store.getActions()).toEqual([
      setfilms(films),
      setFilmsLoaded(),
    ]);
  });
});
