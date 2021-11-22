import { toast } from 'react-toastify';
import { APIRoutes, FailMessage } from 'src/constants';
import { ThunkActionResponse } from 'src/types/actions';
import { Film } from 'src/types/film';
import { SnakeToCamelAdapter } from 'src/utils/snake-to-camel-adapter';
import { setfilms, setFilmsLoaded } from './actions';

const adapter = new SnakeToCamelAdapter();

export const getFilms = (): ThunkActionResponse =>
  async (dispatch, _getState, api) => {
    try {
      const response = await api.get<Array<Record<string, unknown>>>(APIRoutes.Films);
      const films = adapter.transformArray<Film>(response.data);
      dispatch(setfilms(films));
      dispatch(setFilmsLoaded());
    } catch (error) {
      dispatch(setFilmsLoaded());
      toast.error(FailMessage.GetFilms);
    }
  };
