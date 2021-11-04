import { ReactNode } from 'react';
import { Link, generatePath } from 'react-router-dom';
import { AppRoutes } from 'src/constants';
import { Film } from 'src/types/film';

type Props = {
  film: Film;
  className?: string;
  children?: ReactNode;
};

function FilmCardButtons({ film, className = '', children }: Props): JSX.Element {
  const {
    id,
    name,
    genre,
    released,
  } = film;

  return (
    <div className={className} >
      <h2 className="film-card__title">{name}</h2>
      <p className="film-card__meta">
        <span className="film-card__genre">{genre}</span>
        <span className="film-card__year">{released}</span>
      </p>

      <div className="film-card__buttons">
        <Link
          to={generatePath(AppRoutes.Player, { id })}
          className="btn btn--play film-card__button"
        >
          <svg
            viewBox="0 0 19 19"
            width="19"
            height="19"
          >
            <use xlinkHref="#play-s"></use>
          </svg>
          <span>Play</span>
        </Link>

        <button
          className="btn btn--list film-card__button"
          type="button"
        >
          <svg
            viewBox="0 0 19 20"
            width="19"
            height="20"
          >
            <use xlinkHref="#add"></use>
          </svg>
          <span>My list</span>
        </button>

        {children}
      </div>
    </div>
  );
}

export default FilmCardButtons;
