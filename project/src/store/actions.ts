import { ActionType } from 'src/types/actions';

export const redirect = (payload: string) => ({
  type: ActionType.Redirect,
  payload,
} as const);
