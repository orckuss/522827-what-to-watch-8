import { useSelector } from 'react-redux';
import { getFilteredFilms } from '../../../store/film/selectors';
import FilmCardList from '../film-card-list/film-card-list';

function FilteredFilmCardList(): JSX.Element {
  const films = useSelector(getFilteredFilms);

  return (
    <FilmCardList films={films} />
  );
}

export default FilteredFilmCardList;
