import { ReactNode } from 'react';
import { useDispatch } from 'react-redux';
import { Link, generatePath } from 'react-router-dom';
import { changeFavorite } from '@store/user/async-actions';
import IconPlay from '@components/ui/icons/icon-play/icon-play';
import IconAdd from '@components/ui/icons/icon-add/icon-add';
import IconCheck from '@components/ui/icons/icon-check/icon-check';
import { AppRoutes, FavoriteRequestData } from 'src/constants';
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
    isFavorite,
  } = film;

  const dispatch = useDispatch();

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
          onClick={() => dispatch(changeFavorite(id, isFavorite ? FavoriteRequestData.Delete : FavoriteRequestData.Add))}
        >
          {isFavorite ? <IconCheck /> : <IconAdd />}
          <span>My list</span>
        </button>

        {children}
      </div>
    </div>
  );
}

export default FilmCardButtons;
