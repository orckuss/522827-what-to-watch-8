import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getSimilarFilmsFactory } from '../../../store/film/selectors';
import { RouteParams } from '../../../types/route-params';
import FilmCardList from '../film-card-list/film-card-list';

function SimilarFilmCardList(): JSX.Element {
  const { id } = useParams<RouteParams>();
  const films = useSelector(getSimilarFilmsFactory(Number(id)));

  return (
    <FilmCardList films={films} />
  );
}

export default SimilarFilmCardList;
