import { useSelector } from 'react-redux';
import { getActiveFilm } from '@store/active-film/selectors';

function Details(): JSX.Element {
  const film = useSelector(getActiveFilm);

  const {
    director,
    genre,
    runTime,
    released,
    starring,
  } = film;

  return (
    <div className="film-card__text film-card__row">
      <div className="film-card__text-col">
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Director</strong>
          <span className="film-card__details-value">{director}</span>
        </p>

        <p className="film-card__details-item">
          <strong className="film-card__details-name">Starring</strong>
          <span
            className="film-card__details-value"
            style={{ 'whiteSpace': 'pre-line' }}
          >
            {starring?.join('\n')}
          </span>
        </p>
      </div>

      <div className="film-card__text-col">
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Run Time</strong>
          <span className="film-card__details-value">{runTime}</span>
        </p>

        <p className="film-card__details-item">
          <strong className="film-card__details-name">Genre</strong>
          <span className="film-card__details-value">{genre}</span>
        </p>

        <p className="film-card__details-item">
          <strong className="film-card__details-name">Released</strong>
          <span className="film-card__details-value">{released}</span>
        </p>
      </div>
    </div>
  );
}

export default Details;
