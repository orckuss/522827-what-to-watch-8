import SmallFilmCard from '../../layout/small-film-card/small-film-card';
import Footer from '../../layout/footer/footer';
import { FILMS_MOCK } from '../../../mocks/films';
import Logo from '../../layout/logo/logo';

function MyList(): JSX.Element {
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />

        <h1 className="page-title user-page__title">My list</h1>

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

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <div className="catalog__films-list">
          {FILMS_MOCK.filter((film) => film.isFavorite).map((film) => (
            <SmallFilmCard
              key={film.id}
              name={film.name}
              imgSrc={film.previewImage}
            />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default MyList;
