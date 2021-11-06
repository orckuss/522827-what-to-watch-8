import { redirect } from '@store/actions';
import { toast } from 'react-toastify';
import { APIRoutes, AppRoutes, AuthStatus, AUTH_TOKEN_KEY_NAME, FailMessage } from 'src/constants';
import { ThunkActionResponse } from 'src/types/actions';
import { AuthRequest, AuthResponse } from 'src/types/user';
import { SnakeToCamelAdapter } from 'src/utils/snake-to-camel-adapter';
import { TokenStorage } from 'src/utils/token';
import { setAuthStatus, setUserInfo } from './actions';

const adapter = new SnakeToCamelAdapter();
const storage = new TokenStorage(AUTH_TOKEN_KEY_NAME);

export const checkAuth = (): ThunkActionResponse =>
  async (dispatch, _getState, api) => {
    const response = await api.get<Record<string, unknown>>(APIRoutes.Login);
    const result = adapter.transform<AuthResponse>(response.data);
    storage.setToken(result.token);
    dispatch(setAuthStatus(AuthStatus.Auth));
    dispatch(setUserInfo(result));
  };

export const login = (data: AuthRequest): ThunkActionResponse =>
  async (dispatch, _getState, api) => {
    try {
      const response = await api.post<Record<string, unknown>>(APIRoutes.Login, data);
      const result = adapter.transform<AuthResponse>(response.data);
      storage.setToken(result.token);
      dispatch(setAuthStatus(AuthStatus.Auth));
      dispatch(setUserInfo(result));
      dispatch(redirect(AppRoutes.Main));
    } catch (error) {
      toast.error(FailMessage.Login);
    }
  };

export const logout = (): ThunkActionResponse =>
  async (dispatch, _getState, api) => {
    api.delete(APIRoutes.Logout);
    storage.removeToken();
    dispatch(setAuthStatus(AuthStatus.NoAuth));
    dispatch(setUserInfo(null));
  };
