import { generatePath } from 'react-router';
import { NamedRoute } from 'src/types/route-params';
import { AppRoutes } from 'src/constants';
import AddReviewForm from '@components/layout/add-review-form/add-review-form';
import Breadcrumbs from '@components/layout/breadcrumbs/breadcrumbs';
import Header from '@components/layout/header/header';
import { useFilmLoad } from '@hooks/useFilmLoad';

function AddReview(): JSX.Element {
  const film = useFilmLoad();

  const {
    id,
    name,
    posterImage,
    backgroundImage,
  } = film;

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
