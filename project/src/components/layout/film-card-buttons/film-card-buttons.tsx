import IconPlay from '@components/ui/icons/icon-play/icon-play';
import IconAdd from '@components/ui/icons/icon-add/icon-add';
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
          <IconPlay />
          <span>Play</span>
        </Link>

        <button
          className="btn btn--list film-card__button"
          type="button"
        >
          <IconAdd />
          <span>My list</span>
        </button>

        {children}
      </div>
    </div>
  );
}

export default FilmCardButtons;
