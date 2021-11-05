import { AppRoutes } from 'src/constants';
import { ActionType } from 'src/types/actions';

export const redirect = (payload: AppRoutes) => ({
  type: ActionType.Redirect,
  payload,
} as const);
