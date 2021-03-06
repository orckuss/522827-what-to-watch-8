import { redirect } from '@store/actions';
import { AxiosError } from 'axios';
import { generatePath } from 'react-router';
import { APIRoutes, AppRoutes, FailMessage, HttpCode } from 'src/constants';
import { ThunkActionResponse } from 'src/types/actions';
import { Comment, SendComment } from 'src/types/comment';
import { Film } from 'src/types/film';
import { SnakeToCamelAdapter } from 'src/utils/snake-to-camel-adapter';
import { endRequest, setActiveFilm, setComments, setSimilar, startRequest } from './actions';
import { toast } from 'react-toastify';

const adapter = new SnakeToCamelAdapter();

export const getFilm = (id: number): ThunkActionResponse =>
  async (dispatch, _getState, api) => {
    try {
      dispatch(startRequest());
      const response = await api.get<Record<string, unknown>>(`${APIRoutes.Films}/${id}`);
      const film = adapter.transform<Film>(response.data);
      dispatch(setActiveFilm(film));
      dispatch(endRequest());
    } catch (error) {
      dispatch(endRequest());
      (error as AxiosError).response?.status === HttpCode.NotFound &&
        dispatch(redirect(AppRoutes.NotFound));
    }
  };

export const getSimilar = (id: number): ThunkActionResponse =>
  async (dispatch, _getState, api) => {
    try {
      const response = await api.get<Array<Record<string, unknown>>>(`${APIRoutes.Films}/${id}/similar`);
      const similar = adapter.transformArray<Film>(response.data);
      dispatch(setSimilar(similar));
    } catch (error) {
      dispatch(setSimilar([]));
      toast.error(FailMessage.GetSimilar);
    }
  };

export const getComments = (id: number): ThunkActionResponse =>
  async (dispatch, _getState, api) => {
    try {
      const response = await api.get<Array<Comment>>(`${APIRoutes.Comments}/${id}`);
      dispatch(setComments(response.data));
    } catch (error) {
      dispatch(setComments([]));
      toast.error(FailMessage.GetComments);
    }
  };

export const sendComment = (data: SendComment, id: number): ThunkActionResponse =>
  async (dispatch, _getState, api) => {
    try {
      dispatch(startRequest());
      const response = await api.post<Array<Comment>>(`${APIRoutes.Comments}/${id}`, data);
      dispatch(setComments(response.data));
      dispatch(endRequest());
      dispatch(redirect(generatePath(AppRoutes.Films, { id })));
    } catch (error) {
      dispatch(endRequest());
      toast.error(FailMessage.PostComment);
    }
  };
