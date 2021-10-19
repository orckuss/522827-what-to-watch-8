import { GENRES } from '../../../mocks/genres';

function GenreList(): JSX.Element {
  return (
    <ul className="catalog__genres-list">
      {GENRES.map(({ name, active }) => (
        <li
          key={name}
          className={`catalog__genres-item ${active && 'catalog__genres-item--active'}`}
        >
          <a
            href="/"
            className="catalog__genres-link"
          >
            {name}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default GenreList;
