import { sendComment } from '@store/active-film/async-actions';
import { getActiveFilm, getRequestStatus } from '@store/active-film/selectors';
import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DEFALUT_RATING_VALUE, STAR_COUNT, TEXT_COMMENT_MAX_LENGTH, TEXT_COMMENT_MIN_LENGTH } from 'src/constants';
import RatingFormControl from '../rating-form-control/rating-form-control';

function AddReviewForm(): JSX.Element {
  const [comment, setComment] = useState<string>('');
  const [rating, setRating] = useState<number>(DEFALUT_RATING_VALUE);

  const { id } = useSelector(getActiveFilm);
  const sendingStatus = useSelector(getRequestStatus);

  const dispatch = useDispatch();

  const handleRatingFormChange = useCallback(
    (evt: React.ChangeEvent<HTMLInputElement>) => setRating(Number(evt.currentTarget.value)),
    [],
  );

  const condition = rating === DEFALUT_RATING_VALUE
    || comment.length < TEXT_COMMENT_MIN_LENGTH
    || comment.length > TEXT_COMMENT_MAX_LENGTH;

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
          onChange={handleRatingFormChange}
        />

        <div className="add-review__text">
          <textarea
            className="add-review__textarea"
            name="review-text"
            id="review-text"
            placeholder="Review text"
            value={comment}
            onChange={(evt) => setComment(evt.currentTarget.value)}
            disabled={sendingStatus}
          />

          <div className="add-review__submit">
            <button
              className="add-review__btn"
              type="submit"
              disabled={condition || sendingStatus}
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
