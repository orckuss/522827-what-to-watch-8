import { sendComment } from '@store/active-film/async-actions';
import { getActiveFilm } from '@store/active-film/selectors';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { STAR_COUNT } from 'src/constants';
import RatingFormControl from '../rating-form-control/rating-form-control';

function AddReviewForm(): JSX.Element {
  const [comment, setComment] = useState<string>('');
  const [rating, setRating] = useState<number>(0);

  const { id } = useSelector(getActiveFilm);

  const dispatch = useDispatch();

  return (
    <div className="add-review">
      <form
        action="#"
        className="add-review__form"
        onSubmit={(evt) => {
          evt.preventDefault();
          dispatch(sendComment({ comment, rating }, id));
        }}
      >
        <RatingFormControl
          count={STAR_COUNT}
          onChange={(evt) => setRating(Number(evt.currentTarget.value))}
        />

        <div className="add-review__text">
          <textarea
            className="add-review__textarea"
            name="review-text"
            id="review-text"
            placeholder="Review text"
            value={comment}
            onChange={(evt) => setComment(evt.currentTarget.value)}
          />

          <div className="add-review__submit">
            <button
              className="add-review__btn"
              type="submit"
            >
              Post
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddReviewForm;
