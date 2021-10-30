import { generatePath, useParams } from 'react-router';
import { Film } from 'src/types/film';
import { NamedRoute, RouteParams } from 'src/types/route-params';
import { AppRoutes } from 'src/constants';
import AddReviewForm from '@components/layout/add-review-form/add-review-form';
import Breadcrumbs from '@components/layout/breadcrumbs/breadcrumbs';
import Header from '@components/layout/header/header';

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
