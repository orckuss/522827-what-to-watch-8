/* eslint-disable @typescript-eslint/no-unused-vars */
import { Comment } from '../../../types/comment';
import { Film } from '../../../types/film';
import Details from '../details/details';
import Overview from '../overview/overview';
import Reviews from '../reviews/reviews';

type Props = {
  film: Film;
  comments: Array<Comment>;
};

function Tabs({ film, comments }: Props): JSX.Element {
  return (
    <>
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          <li className="film-nav__item film-nav__item--active">
            <a href="/" className="film-nav__link">Overview</a>
          </li>
          <li className="film-nav__item">
            <a href="/" className="film-nav__link">Details</a>
          </li>
          <li className="film-nav__item">
            <a href="/" className="film-nav__link">Reviews</a>
          </li>
        </ul>
      </nav>

      <Overview film={film} />
      {/* <Details film={film} /> */}
      {/* <Reviews comments={comments} /> */}
    </>
  );
}

export default Tabs;
