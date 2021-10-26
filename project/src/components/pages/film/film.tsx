import { generatePath, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { COMMENTS_MOCK } from '../../../mocks/comments';
import { Film as FilmData } from '../../../types/film';
import { RouteParams } from '../../../types/route-params';
import { AppRoutes } from '../../../constants';
import Details from '../../layout/details/details';
import FilteredFilmCardList from '../../layout/filtered-film-card-list/filtered-film-card-list';
import Footer from '../../layout/footer/footer';
import Header from '../../layout/header/header';
import Overview from '../../layout/overview/overview';
import Reviews from '../../layout/reviews/reviews';
import Tabs, { TabConfig } from '../../layout/tabs/tabs';

type Props = {
  films: Array<FilmData>
}

function Film({ films }: Props): JSX.Element {
  const { id } = useParams<RouteParams>();
  const film = films.find((item) => item.id === Number(id)) as FilmData;

  const comments = COMMENTS_MOCK;

  const {
    backgroundImage,
    name,
    genre,
    posterImage,
    released,
  } = film;

  const tabs: Array<TabConfig> = [
    {
      caption: 'Overview',
      component: <Overview film={film} />,
    },
    {
      caption: 'Details',
      component: <Details film={film} />,
    },
    {
      caption: 'Reviews',
      component: <Reviews comments={comments} />,
    },
  ];

  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={backgroundImage} alt={name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <Header className="film-card__head" />

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{genre}</span>
                <span className="film-card__year">{released}</span>
              </p>

              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </button>
                <Link
                  to={generatePath(AppRoutes.Review, { id })}
                  className="btn film-card__button"
                >
                  Add review
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={posterImage} alt={name} width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <Tabs tabs={tabs} />
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <FilteredFilmCardList />
        </section>

        <Footer />
      </div>
    </>
  );
}

export default Film;
