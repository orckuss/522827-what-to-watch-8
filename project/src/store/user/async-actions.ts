import { APIRoutes } from 'src/constants';
import { ThunkActionResponse } from 'src/types/actions';
import { AuthResponse } from 'src/types/user';
import { SnakeToCamelAdapter } from 'src/utils/snake-to-camel-adapter';
import { setAuthStatus } from './actions';

const adapter = new SnakeToCamelAdapter();

export const checkAuth = (): ThunkActionResponse =>
  async (dispatch, _getState, api) => {
    const response = await api.get<Record<string, unknown>>(APIRoutes.Login);
    const result = adapter.transform<AuthResponse>(response.data);
    // eslint-disable-next-line no-console
    console.log(result);
    dispatch(setAuthStatus(true));
  };
