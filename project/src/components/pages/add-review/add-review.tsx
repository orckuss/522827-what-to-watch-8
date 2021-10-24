import { generatePath, useParams } from 'react-router';
import { Film } from '../../../types/film';
import { NamedRoute, RouteParams } from '../../../types/route-params';
import { AppRoutes } from '../../app/routes';
import AddReviewForm from '../../layout/add-review-form/add-review-form';
import Breadcrumbs from '../../layout/breadcrumbs/breadcrumbs';
import Header from '../../layout/header/header';

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

  const routes: Array<NamedRoute> = [
    {
      name,
      path: generatePath(AppRoutes.Films, { id }),
    },
    {
      name: 'Add review',
      path: generatePath(AppRoutes.Review, { id }),
    },
  ];

  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img
            src={backgroundImage}
            alt={name}
          />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header>
          <Breadcrumbs routes={routes} />
        </Header>

        <div className="film-card__poster film-card__poster--small">
          <img
            src={posterImage}
            alt={`${name} poster`}
            width="218"
            height="327"
          />
        </div>
      </div>

      <AddReviewForm />
    </section>
  );
}

export default AddReview;
