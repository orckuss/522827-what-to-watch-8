import { getComments } from '@store/active-film/selectors';
import { useSelector } from 'react-redux';
import './reviews.css';

function Reviews(): JSX.Element {
  const comments = useSelector(getComments);

  return (
    <div className="film-card__reviews">
      {comments.map((comment) => (
        <div
          key={comment.id}
          className="review"
        >
          <blockquote className="review__quote">
            <p className="review__text">
              {comment.comment}
            </p>

            <footer className="review__details">
              <cite className="review__author">{comment.user.name}</cite>
              <time
                className="review__date"
                dateTime="2016-12-24"
              >
                {new Date(comment.date).toLocaleDateString('en', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </time>
            </footer>
          </blockquote>

          <div className="review__rating">{comment.rating}</div>
        </div>
      ))}
    </div>
  );
}

export default Reviews;
