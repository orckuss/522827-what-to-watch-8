import { useState } from 'react';
import { Movie } from '../../../types/film';
import SmallFilmCard from '../small-film-card/small-film-card';

type Props = {
  films: Array<Movie>;
}

function FilmCardList({ films }: Props): JSX.Element {
  // ToDo: убрать отключение правила esLint, когда будет реализация превью видео
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activeCard, setActiveCard] = useState<Movie | null>(null);

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
