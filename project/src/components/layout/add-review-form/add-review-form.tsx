import { useState } from 'react';
import RatingFormControl from '../rating-form-control/rating-form-control';

function AddReviewForm(): JSX.Element {
  const [text, setText] = useState('');

  return (
    <div className="add-review">
      <form
        action="#"
        className="add-review__form"
        onSubmit={(evt) => evt.preventDefault()}
      >
        <RatingFormControl />

        <div className="add-review__text">
          <textarea
            className="add-review__textarea"
            name="review-text"
            id="review-text"
            placeholder="Review text"
            value={text}
            onChange={(evt) => setText(evt.currentTarget.value)}
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
