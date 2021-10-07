import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Movie } from '../../types/film';
import AddReview from '../pages/add-review/add-review';
import Film from '../pages/film/film';
import Main from '../pages/main/main';
import MyList from '../pages/my-list/my-list';
import NotFound from '../pages/not-found/not-found';
import Player from '../pages/player/player';
import SignIn from '../pages/sign-in/sign-in';
import { AppRoutes } from './routes';

type Props = {
  promoFilm: Omit<Movie, 'id' | 'previewImage' | 'isFavorite'>;
}

function App({ promoFilm }: Props): JSX.Element {
  const {
    name,
    backgroundImage,
    posterImage,
  } = promoFilm;

  return (
    <BrowserRouter>
      <Switch>
        <Route path={AppRoutes.Main} exact>
          <Main promoFilm={promoFilm} />
        </Route>

        <Route path={AppRoutes.SignIn} exact>
          <SignIn />
        </Route>

        <Route path={AppRoutes.MyList} exact>
          <MyList />
        </Route>

        <Route path={AppRoutes.Films} exact>
          <Film movie={promoFilm} />
        </Route>

        <Route path={AppRoutes.Review} exact>
          <AddReview
            name={name}
            backgroundImage={backgroundImage}
            posterImage={posterImage}
          />
        </Route>

        <Route path={AppRoutes.Player} exact>
          <Player />
        </Route>

        <Route>
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
