import { getFavoriteFilms } from '@store/user/selectors';
import { useSelector } from 'react-redux';
import FilmCardList from '../film-card-list/film-card-list';

function FavoriteFilmCardList(): JSX.Element {
  const films = useSelector(getFavoriteFilms);

  return (
    <FilmCardList films={films} />
  );
}

export default FavoriteFilmCardList;
