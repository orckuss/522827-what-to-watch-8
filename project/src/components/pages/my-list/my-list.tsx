import Footer from '../../layout/footer/footer';
import FilmCardList from '../../layout/film-card-list/film-card-list';
import Header from '../../layout/header/header';

function MyList(): JSX.Element {
  return (
    <div className="user-page">
      <Header className="user-page__head">
        <h1 className="page-title user-page__title">My list</h1>
      </Header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <FilmCardList />
      </section>

      <Footer />
    </div>
  );
}

export default MyList;
