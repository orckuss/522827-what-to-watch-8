import { generatePath, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { Film } from '../../../types/film';
import { RouteParams } from '../../../types/route-params';
import { AppRoutes } from '../../app/routes';
import AddReviewForm from '../../layout/add-review-form/add-review-form';
import Logo from '../../layout/logo/logo';
import User from '../../layout/user/user';

type Props = {
  films: Array<Film>
}

function AddReview({ films }: Props): JSX.Element {
  const { id } = useParams<RouteParams>();

  const film = films.find((item) => item.id === Number(id));

  const {
    name,
    posterImage,
    backgroundImage,
  } = film as Film;

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

          <User />
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
