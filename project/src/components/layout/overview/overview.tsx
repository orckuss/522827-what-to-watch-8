import { useSelector } from 'react-redux';
import { getActiveFilm } from '@store/active-film/selectors';
import { RatingLevel } from 'src/constants';

const getRatigLevel = (rating: number): string => {
  switch (true) {
    case rating >= 0 && rating < 3:
      return RatingLevel.Bad;

    case rating >= 3 && rating < 5:
      return RatingLevel.Normal;

    case rating >= 5 && rating < 8:
      return RatingLevel.Good;

    case rating >= 8 && rating < 10:
      return RatingLevel.VeryGood;

    case rating === 10:
      return RatingLevel.Awesome;

    default:
      throw (new Error('incorrect rating value'));
  }
};

function Overview(): JSX.Element {
  const film = useSelector(getActiveFilm);

  const {
    rating,
    scoresCount,
    director,
    starring,
    description,
  } = film;

  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{getRatigLevel(rating)}</span>
          <span className="film-rating__count">{scoresCount} ratings</span>
        </p>
      </div>

      <div className="film-card__text">
        <p>{description}</p>

        <p className="film-card__director">
          <strong>Director: {director}</strong>
        </p>

        <p className="film-card__starring">
          <strong>Starring: {starring?.join(', ')}</strong>
        </p>
      </div>
    </>
  );
}

export default Overview;
