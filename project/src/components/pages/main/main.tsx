import FilmCardButtons from '@components/layout/film-card-buttons/film-card-buttons';
import FilteredFilmCardList from '@components/layout/filtered-film-card-list/filtered-film-card-list';
import Footer from '@components/layout/footer/footer';
import GenreList from '@components/layout/genre-list/genre-list';
import Header from '@components/layout/header/header';
import Poster from '@components/layout/poster/poster';
import ShowMoreBtn from '@components/ui/show-more-btn/show-more-btn';
import { Film } from 'src/types/film';

type Props = {
  promoFilm: Film;
}

function Main({ promoFilm }: Props): JSX.Element {
  const {
    backgroundImage,
    name,
    posterImage,
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

            <FilmCardButtons
              className="film-card__desc"
              film={promoFilm}
            />
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
