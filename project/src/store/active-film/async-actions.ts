import { redirect } from '@store/actions';
import { AxiosError } from 'axios';
import { APIRoutes, AppRoutes, HttpCode } from 'src/constants';
import { ThunkActionResponse } from 'src/types/actions';
import { Comment, SendComment } from 'src/types/comment';
import { Film } from 'src/types/film';
import { SnakeToCamelAdapter } from 'src/utils/snake-to-camel-adapter';
import { endSendingComment, setActiveFilm, setComments, setSimilar, startSendingComment } from './actions';

const adapter = new SnakeToCamelAdapter();

export const getFilm = (id: number): ThunkActionResponse =>
  async (dispatch, _getState, api) => {
    try {
      const response = await api.get<Record<string, unknown>>(`${APIRoutes.Films}/${id}`);
      const film = adapter.transform<Film>(response.data);
      dispatch(setActiveFilm(film));
    } catch (error) {
      (error as AxiosError).response?.status === HttpCode.NotFound &&
        dispatch(redirect(AppRoutes.NotFound));
    }
  };

export const getSimilar = (id: number): ThunkActionResponse =>
  async (dispatch, _getState, api) => {
    try {
      const response = await api.get<Array<Record<string, unknown>>>(`${APIRoutes.Films}/${id}/similar`);
      const similar = response.data.map((item) => adapter.transform<Film>(item));
      dispatch(setSimilar(similar));
    } catch (error) {
      dispatch(setSimilar([]));
    }
  };

export const getComments = (id: number): ThunkActionResponse =>
  async (dispatch, _getState, api) => {
    try {
      const response = await api.get<Array<Comment>>(`${APIRoutes.Comments}/${id}`);
      dispatch(setComments(response.data));
    } catch (error) {
      dispatch(setComments([]));
    }
  };

export const sendComment = (data: SendComment, id: number): ThunkActionResponse =>
  async (dispatch, _getState, api) => {
    dispatch(startSendingComment());
    const response = await api.post<Array<Comment>>(`${APIRoutes.Comments}/${id}`, data);
    dispatch(setComments(response.data));
    dispatch(endSendingComment());
  };
