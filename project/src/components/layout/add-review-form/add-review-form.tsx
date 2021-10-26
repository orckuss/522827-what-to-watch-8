/* eslint-disable no-console */
import { useState } from 'react';
import { STAR_COUNT } from '../../../constants';
import { Comment } from '../../../types/comment';
import RatingFormControl from '../rating-form-control/rating-form-control';

function AddReviewForm(): JSX.Element {
  const [comment, setComment] = useState<string>('');
  const [rating, setRating] = useState<number>(0);

  return (
    <div className="add-review">
      <form
        action="#"
        className="add-review__form"
        onSubmit={(evt) => {
          evt.preventDefault();
          console.log({ comment, rating } as Pick<Comment, 'comment' | 'rating'>);
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
