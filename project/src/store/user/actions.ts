import { AuthStatus } from 'src/constants';
import { ActionType } from 'src/types/actions';
import { UserInfo } from 'src/types/user';

export const setAuthStatus = (payload: AuthStatus) => ({
  type: ActionType.SetAuthStatus,
  payload,
} as const);

export const setUserInfo = (payload: UserInfo) => ({
  type: ActionType.SetUserInfo,
  payload,
} as const);
