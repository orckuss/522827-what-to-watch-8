import { useDispatch, useSelector } from 'react-redux';
import { increaseFilmCardsCount } from '../../../store/film/actions';
import { getFilmCardsCount, getFilteredFilmsCount } from '../../../store/film/selectors';

function ShowMoreBtn(): JSX.Element | null {
  const filmsCount = useSelector(getFilteredFilmsCount);
  const cardsCount = useSelector(getFilmCardsCount);
  const dispatch = useDispatch();

  return cardsCount < filmsCount ? (
    <div className="catalog__more" >
      <button
        className="catalog__button"
        type="button"
        onClick={() => dispatch(increaseFilmCardsCount())}
      >
        Show more
      </button>
    </div >
  ) : null;
}

export default ShowMoreBtn;
