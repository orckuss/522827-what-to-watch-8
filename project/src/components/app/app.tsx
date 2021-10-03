import { Movie } from '../../types/film';
import Main from '../main/main';

type Props = {
  promoFilm: Omit<Movie, 'id' | 'previewImage' | 'isFavorite'>;
}

function App({ promoFilm }: Props): JSX.Element {
  return (
    <Main promoFilm={promoFilm} />
  );
}

export default App;
