import { useSelector } from 'react-redux';
import { getFilteredFilms } from '../../../store/film/selectors';
import SmallFilmCard from '../small-film-card/small-film-card';

function FilmCardList(): JSX.Element {
  const films = useSelector(getFilteredFilms);

  return (
    <div className="catalog__films-list">
      {films.map((film) => (
        <SmallFilmCard
          key={film.id}
          film={film}
        />
      ))}
    </div>
  );
}

export default FilmCardList;
