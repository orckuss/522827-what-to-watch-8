import Footer from '../../layout/footer/footer';
import Header from '../../layout/header/header';
import FilteredFilmCardList from '../../layout/filtered-film-card-list/filtered-film-card-list';

function MyList(): JSX.Element {
  return (
    <div className="user-page">
      <Header className="user-page__head">
        <h1 className="page-title user-page__title">My list</h1>
      </Header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <FilteredFilmCardList />
      </section>

      <Footer />
    </div>
  );
}

export default MyList;
