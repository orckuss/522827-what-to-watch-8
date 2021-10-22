import { Link } from 'react-router-dom';
import { Film } from '../../../types/film';
import { AppRoutes } from '../../app/routes';
import FilmCardList from '../../layout/film-card-list/film-card-list';
import Footer from '../../layout/footer/footer';
import Logo from '../../layout/logo/logo';
import { generatePath } from 'react-router-dom';
import GenreList from '../../layout/genre-list/genre-list';
import User from '../../layout/user/user';

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
          <img src={backgroundImage} alt={name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header film-card__head">
          <Logo />

          <User />
        </header>

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src={posterImage} alt={`${name} poster`} width="218" height="327" />
            </div>

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

          <FilmCardList />

          <div className="catalog__more">
            <button className="catalog__button" type="button">Show more</button>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

export default Main;
