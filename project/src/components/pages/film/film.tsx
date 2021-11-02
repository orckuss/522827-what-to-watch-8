import { generatePath, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { COMMENTS_MOCK } from 'src/mocks/comments';
import { Film as FilmData } from 'src/types/film';
import { RouteParams } from 'src/types/route-params';
import { AppRoutes } from 'src/constants';
import Details from '@components/layout/details/details';
import Footer from '@components/layout/footer/footer';
import Overview from '@components/layout/overview/overview';
import Reviews from '@components/layout/reviews/reviews';
import Tabs, { TabConfig } from '@components/layout/tabs/tabs';
import SimilarFilmCardList from '@components/layout/similar-film-card-list/similar-film-card-list';
import { useSelector } from 'react-redux';
import { getFilms } from '@store/film/selectors';
import Poster from '@components/layout/poster/poster';
import FilmCardButtons from '@components/layout/film-card-buttons/film-card-buttons';
import FilmCardHeader from '@components/layout/film-card-header/film-card-header';

function Film(): JSX.Element {
  const { id } = useParams<RouteParams>();
  const films = useSelector(getFilms);
  const film = films.find((item) => item.id === Number(id)) as FilmData;

  const comments = COMMENTS_MOCK;

  const {
    backgroundImage,
    name,
    posterImage,
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
          <FilmCardHeader
            backgroundImage={backgroundImage}
            alt={name}
          />

          <div className="film-card__wrap">
            <FilmCardButtons
              className="film-card__desc"
              film={film}
            >
              <Link
                to={generatePath(AppRoutes.Review, { id })}
                className="btn film-card__button"
              >
                Add review
              </Link>
            </FilmCardButtons>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <Poster
              src={posterImage}
              alt={name}
              className="film-card__poster--big"
            />

            <Tabs
              className="film-card__desc"
              tabs={tabs}
            />
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <SimilarFilmCardList />
        </section>

        <Footer />
      </div>
    </>
  );
}

export default Film;
