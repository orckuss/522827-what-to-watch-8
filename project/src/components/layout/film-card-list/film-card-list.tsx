import { Movie } from '../../../types/film';
import SmallFilmCard from '../small-film-card/small-film-card';

type Props = {
  films: Array<Movie>;
}

function FilmCardList({ films }: Props): JSX.Element {
  return (
    <div className="catalog__films-list">
      {films.map((film) => (
        <SmallFilmCard
          key={film.id}
          movie={film}
        />
      ))}
    </div>
  );
}

export default FilmCardList;
