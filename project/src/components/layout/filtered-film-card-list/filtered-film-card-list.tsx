import { getSlicedFilteredFilms } from '@store/films/selectors';
import { useSelector } from 'react-redux';
import FilmCardList from '../film-card-list/film-card-list';

function FilteredFilmCardList(): JSX.Element {
  const films = useSelector(getSlicedFilteredFilms);

  return (
    <FilmCardList films={films} />
  );
}

export default FilteredFilmCardList;
