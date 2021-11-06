import { getComments, getFilm, getSimilar } from '@store/active-film/async-actions';
import { getActiveFilm } from '@store/active-film/selectors';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Film } from 'src/types/film';
import { RouteParams } from 'src/types/route-params';

export const useFilmLoad = (): Film => {
  const film = useSelector(getActiveFilm);
  const params = useParams<RouteParams>();
  const id = Number(params.id);

  const dispatch = useDispatch();

  useEffect(() => {
    if (film.id !== id) {
      dispatch(getFilm(id));
      dispatch(getSimilar(id));
      dispatch(getComments(id));
    }
  }, [dispatch, id, film.id]);

  return film;
};
