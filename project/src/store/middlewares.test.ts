import { configureMockStore } from '@jedmao/redux-mock-store';
import { redirect } from './middlewares';
import { redirect as redirectAction } from './actions';
import { GlobalState } from 'src/types/global-state';
import { AppRoutes, AuthStatus } from 'src/constants';
import { setAuthStatus } from '@store/user/actions';
import { AnyAction } from 'redux';

const UNDEFINED_ACTION_TYPE = 'UNDEFINED';

const history = {
  path: '',
  push(value: string): void {
    this.path = value;
  },
};

const mockStoreCreator = configureMockStore<GlobalState, AnyAction>([
  redirect,
]);

const store = mockStoreCreator();

jest.mock('src/utils/browser-history', () => ({ browserHistory: history }));

describe('middleWare test', () => {
  beforeEach(() => {
    history.push('');
    store.clearActions();
  });

  it('expect to forward the any action further down the middleware chain', () => {
    store.dispatch(redirectAction(AppRoutes.Main));
    store.dispatch(setAuthStatus(AuthStatus.Auth));
    store.dispatch({ type: UNDEFINED_ACTION_TYPE });

    expect(store.getActions()).toEqual([
      redirectAction(AppRoutes.Main),
      setAuthStatus(AuthStatus.Auth),
      { type: UNDEFINED_ACTION_TYPE },
    ]);
  });

  it('expect redirect to path when action redirect', () => {
    store.dispatch(redirectAction(AppRoutes.NotFound));

    expect(history.path).toBe(AppRoutes.NotFound);
  });

  it('expect not redirect to path when action is not redirect', () => {
    store.dispatch({ type: UNDEFINED_ACTION_TYPE, payload: AppRoutes.NotFound });

    expect(history.path).not.toBe(AppRoutes.NotFound);
  });
});
