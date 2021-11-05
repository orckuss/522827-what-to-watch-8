import { APIRoutes } from 'src/constants';
import { ThunkActionResponse } from 'src/types/actions';
import { Film } from 'src/types/film';
import { SnakeToCamelAdapter } from 'src/utils/snake-to-camel-adapter';
import { setActiveFilm } from './actions';

const adapter = new SnakeToCamelAdapter();

export const getFilmById = (id: number): ThunkActionResponse =>
  async (dispatch, _getState, api) => {
    const response = await api.get(`${APIRoutes.Films}/${id}`);
    const result = adapter.transform<Film>(response.data);
    dispatch(setActiveFilm(result));
  };
