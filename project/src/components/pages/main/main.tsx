import FilteredFilmCardList from '@components/layout/filtered-film-card-list/filtered-film-card-list';
import Footer from '@components/layout/footer/footer';
import GenreList from '@components/layout/genre-list/genre-list';
import Header from '@components/layout/header/header';
import Poster from '@components/layout/poster/poster';
import ShowMoreBtn from '@components/ui/show-more-btn/show-more-btn';
import { generatePath } from 'react-router';
import { Link } from 'react-router-dom';
import { AppRoutes } from 'src/constants';
import { Film } from 'src/types/film';

type Props = {
  promoFilm: Film;
}

function Main({ promoFilm }: Props): JSX.Element {
  const {
    id,
    backgroundImage,
    genre,
    name,
    posterImage,
    released,
  } = promoFilm;

  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img
            src={backgroundImage}
            alt={name}
          />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header className="film-card__head" />

        <div className="film-card__wrap">
          <div className="film-card__info">
            <Poster
              src={posterImage}
              alt={name}
            />

            <div className="film-card__desc">
              <h2 className="film-card__title">{name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{genre}</span>
                <span className="film-card__year">{released}</span>
              </p>

              <div className="film-card__buttons">
                <Link
                  to={generatePath(AppRoutes.Player, { id })}
                  className="btn btn--play film-card__button"
                >
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </Link>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenreList />

          <FilteredFilmCardList />

          <ShowMoreBtn />
        </section>

        <Footer />
      </div>
    </>
  );
}

export default Main;
