import thunk from 'redux-thunk';
import { configureMockStore } from '@jedmao/redux-mock-store';
import MockAdapter from 'axios-mock-adapter';
import { createAPI } from 'src/api/api';
import { Actions, ThunkApiDispatch } from 'src/types/actions';
import { GlobalState } from 'src/types/global-state';
import { makeFakeFilm } from 'src/mocks/mocks';
import { APIRoutes, HttpCode } from 'src/constants';
import { getPromo } from '../async-action';
import { setPromo, setPromoLoaded } from '../actions';

describe('promoState async action', () => {
  const onUnauthorized = jest.fn();
  const api = createAPI(onUnauthorized);
  const mockAPI = new MockAdapter(api);
  const mockStore = configureMockStore<GlobalState, Actions, ThunkApiDispatch>([
    thunk.withExtraArgument(api),
  ]);

  it('should dispatch promofilm when response status 200', async () => {
    const store = mockStore();
    const film = makeFakeFilm();

    mockAPI.onGet(APIRoutes.Promo).reply(HttpCode.Success, film);

    await store.dispatch(getPromo());

    expect(store.getActions()).toEqual([
      setPromo(film),
      setPromoLoaded(),
    ]);
  });
});
