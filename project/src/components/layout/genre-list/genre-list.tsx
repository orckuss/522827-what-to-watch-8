import { useDispatch, useSelector } from 'react-redux';
import { changeGenre, resetFilmCardsCount } from '@store/films/actions';
import { getActiveGenre, getGenres } from '@store/films/selectors';

function GenreList(): JSX.Element {
  const genres = useSelector(getGenres);
  const activeGenre = useSelector(getActiveGenre);
  const dispatch = useDispatch();

  return (
    <ul className="catalog__genres-list">
      {genres.map((genre) => (
        <li
          key={genre}
          className={`catalog__genres-item ${activeGenre === genre && 'catalog__genres-item--active'}`}
        >
          <a
            href="/"
            className="catalog__genres-link"
            onClick={(evt) => {
              evt.preventDefault();
              dispatch(changeGenre(genre));
              dispatch(resetFilmCardsCount());
            }}
          >
            {genre}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default GenreList;
