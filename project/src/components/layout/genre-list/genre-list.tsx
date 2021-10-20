import { useState } from 'react';
import { DEFALUT_ACTIVE_GENRE } from '../../../constants';
import { GENRES } from '../../../mocks/genres';
import { Genre } from '../../../types/genre';

function GenreList(): JSX.Element {
  const [activeGenre, setActiveGenre] = useState<Genre>('All genres');

  return (
    <ul className="catalog__genres-list">
      <li className={`catalog__genres-item ${activeGenre === DEFALUT_ACTIVE_GENRE && 'catalog__genres-item--active'}`}>
        <a
          href="/"
          className="catalog__genres-link"
          onClick={(evt) => { evt.preventDefault(); setActiveGenre(DEFALUT_ACTIVE_GENRE); }}
        >
          All genres
        </a>
      </li>

      {GENRES.map((genre) => (
        <li
          key={genre}
          className={`catalog__genres-item ${activeGenre === genre && 'catalog__genres-item--active'}`}
        >
          <a
            href="/"
            className="catalog__genres-link"
            onClick={(evt) => { evt.preventDefault(); setActiveGenre(genre); }}
          >
            {genre}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default GenreList;
