import { useSelector } from 'react-redux';
import { getSimilar } from '@store/active-film/selectors';
import FilmCardList from '../film-card-list/film-card-list';

function SimilarFilmCardList(): JSX.Element {
  const films = useSelector(getSimilar);

  return (
    <FilmCardList films={films} />
  );
}

export default SimilarFilmCardList;
