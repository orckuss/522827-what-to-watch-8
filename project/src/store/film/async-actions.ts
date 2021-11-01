import { ThunkActionResponse } from 'src/types/actions';
import { Film } from 'src/types/film';
import { SnakeToCamelAdapter } from 'src/utils/snake-to-camel-adapter';
import { setfilms } from './actions';

const adapter = new SnakeToCamelAdapter();

export const getFilms = (): ThunkActionResponse =>
  async (dispatch, _getState, api) => {
    const response = await api.get<Array<Record<string, unknown>>>('/films');
    const result = response.data.map((item) => adapter.transform<Film>(item));
    dispatch(setfilms(result));
  };
