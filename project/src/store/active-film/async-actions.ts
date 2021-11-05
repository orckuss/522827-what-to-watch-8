/* eslint-disable no-console */
import { redirect } from '@store/actions';
import { AxiosError } from 'axios';
import { APIRoutes, AppRoutes, HttpCode } from 'src/constants';
import { ThunkActionResponse } from 'src/types/actions';
import { Film } from 'src/types/film';
import { SnakeToCamelAdapter } from 'src/utils/snake-to-camel-adapter';
import { setActiveFilm } from './actions';

const adapter = new SnakeToCamelAdapter();

export const getFilmById = (id: number): ThunkActionResponse =>
  async (dispatch, _getState, api) => {
    try {
      const response = await api.get(`${APIRoutes.Films}/${id}`);
      const result = adapter.transform<Film>(response.data);
      dispatch(setActiveFilm(result));
    } catch (error) {
      (error as AxiosError).response?.status === HttpCode.NotFound &&
        dispatch(redirect(AppRoutes.NotFound));
    }
  };
