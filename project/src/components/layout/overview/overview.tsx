import { useSelector } from 'react-redux';
import { getActiveFilm } from '@store/active-film/selectors';
import { Rating, RatingLevel } from 'src/constants';

const getRatigLevel = (rating: number): string => {
  switch (true) {
    case rating >= Rating.BadMain && rating < Rating.BadMAx:
      return RatingLevel.Bad;

    case rating >= Rating.NormalMin && rating < Rating.NormalMax:
      return RatingLevel.Normal;

    case rating >= Rating.GoodMin && rating < Rating.GoodMax:
      return RatingLevel.Good;

    case rating >= Rating.VeryGoodMin && rating < Rating.VeryGoodMax:
      return RatingLevel.VeryGood;

    case rating === Rating.AwesomeMin:
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
