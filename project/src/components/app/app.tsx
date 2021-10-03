import { Movie } from '../../types/film';
import Main from '../main/main';

type Props = {
  readonly promoFilm: Movie;
}

function App({ promoFilm }: Props): JSX.Element {
  return (
    <Main
      name={promoFilm.name}
      genre={promoFilm.genre}
      released={promoFilm.released}
      posterImage={promoFilm.posterImage}
      backgroundImage={promoFilm.backgroundImage}
    />
  );
}

export default App;
