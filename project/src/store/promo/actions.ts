import { createAction } from '@reduxjs/toolkit';
import { ActionType } from 'src/types/actions';
import { Film } from 'src/types/film';

export const setPromo = createAction(
  ActionType.SetPromo,
  (payload: Film) => ({ payload }),
);

export const setPromoLoaded = createAction(ActionType.SetPromoLoaded);
