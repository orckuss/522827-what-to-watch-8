import { generatePath, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { Movie } from '../../../types/film';
import { RouteParams } from '../../../types/route-params';
import { AppRoutes } from '../../app/routes';
import AddReviewForm from '../../layout/add-review-form/add-review-form';
import Logo from '../../layout/logo/logo';

type Props = {
  films: Array<Movie>
}

function AddReview({ films }: Props): JSX.Element {
  const { id } = useParams<RouteParams>();

  const movie = films.find((film) => film.id === Number(id));

  const {
    name,
    posterImage,
    backgroundImage,
  } = movie as Movie;

  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={backgroundImage} alt={name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <Logo />

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link
                  to={generatePath(AppRoutes.Films, { id })}
                  className="breadcrumbs__link"
                >
                  {name}
                </Link>
              </li>
              <li className="breadcrumbs__item">
                <Link
                  to={generatePath(AppRoutes.Review, { id })}
                  className="breadcrumbs__link"
                >
                  Add review
                </Link>
              </li>
            </ul>
          </nav>

          <ul className="user-block">
            <li className="user-block__item">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
              </div>
            </li>
            <li className="user-block__item">
              <a href="/" className="user-block__link">Sign out</a>
            </li>
          </ul>
        </header>

        <div className="film-card__poster film-card__poster--small">
          <img src={posterImage} alt={`${name} poster`} width="218" height="327" />
        </div>
      </div>

      <AddReviewForm />
    </section>
  );
}

export default AddReview;
