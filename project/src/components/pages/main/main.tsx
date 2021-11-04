import FilmCardButtons from '@components/layout/film-card-buttons/film-card-buttons';
import FilmCardHeader from '@components/layout/film-card-header/film-card-header';
import FilteredFilmCardList from '@components/layout/filtered-film-card-list/filtered-film-card-list';
import Footer from '@components/layout/footer/footer';
import GenreList from '@components/layout/genre-list/genre-list';
import Poster from '@components/layout/poster/poster';
import ShowMoreBtn from '@components/ui/show-more-btn/show-more-btn';
import { Film } from 'src/types/film';

type Props = {
  promoFilm: Film;
};

function Main({ promoFilm }: Props): JSX.Element {
  const {
    backgroundImage,
    name,
    posterImage,
  } = promoFilm;

  return (
    <>
      <section className="film-card">
        <FilmCardHeader
          backgroundImage={backgroundImage}
          alt={name}
        />

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
