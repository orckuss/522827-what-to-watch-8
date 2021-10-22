import Footer from '../../layout/footer/footer';
import Logo from '../../layout/logo/logo';
import FilmCardList from '../../layout/film-card-list/film-card-list';
import User from '../../layout/user/user';

function MyList(): JSX.Element {
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />

        <h1 className="page-title user-page__title">My list</h1>

        <User />
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <FilmCardList />
      </section>

      <Footer />
    </div>
  );
}

export default MyList;
