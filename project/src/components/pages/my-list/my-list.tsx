import Footer from '../../layout/footer/footer';
import Logo from '../../layout/logo/logo';
import FilmCardList from '../../layout/film-card-list/film-card-list';
import { Movie } from '../../../types/film';

type Props = {
  films: Array<Movie>
}

function MyList({ films }: Props): JSX.Element {
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

        <FilmCardList films={films} />
      </section>

      <Footer />
    </div>
  );
}

export default MyList;
