import { createAction } from '@reduxjs/toolkit';
import { ActionType } from 'src/types/actions';

export const redirect = createAction(
  ActionType.Redirect,
  (payload: string) => ({ payload }),
);
