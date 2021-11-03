import { ActionType } from 'src/types/actions';

export const setAuthStatus = (payload: boolean) => ({
  type: ActionType.SetAuthStatus,
  payload,
} as const);
