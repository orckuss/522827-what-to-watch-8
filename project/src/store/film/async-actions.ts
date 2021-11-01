import { ThunkActionResponse } from 'src/types/actions';
import { Film } from 'src/types/film';
import { setfilms } from './actions';

export const getFilms = (): ThunkActionResponse =>
  async (dispatch, _getState, api) => {
    const response = await api.get<Array<Film>>('/films');
    dispatch(setfilms(response.data));
  };
