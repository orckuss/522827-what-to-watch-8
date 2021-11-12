import FavoriteFilmCardList from '@components/layout/favorite-film-card-list/favorite-film-card-list';
import Footer from '@components/layout/footer/footer';
import Header from '@components/layout/header/header';
import { getFavoriteFilms } from '@store/user/async-actions';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

function MyList(): JSX.Element {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFavoriteFilms());
  }, [dispatch]);

  return (
    <div className="user-page">
      <Header className="user-page__head">
        <h1 className="page-title user-page__title">My list</h1>
      </Header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <FavoriteFilmCardList />
      </section>

      <Footer />
    </div>
  );
}

export default MyList;
