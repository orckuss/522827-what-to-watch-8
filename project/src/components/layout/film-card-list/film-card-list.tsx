import { Film } from 'src/types/film';
import SmallFilmCard from '../small-film-card/small-film-card';

type Props = {
  films: Array<Film>;
};

function FilmCardList({ films }: Props): JSX.Element {
  return (
    <div className="catalog__films-list">
      {films.map((film) => (
        <SmallFilmCard
          key={film.id}
          film={film}
        />
      ))}
    </div>
  );
}

export default FilmCardList;
