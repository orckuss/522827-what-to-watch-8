import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Movie } from '../../types/film';
import AddReview from '../pages/add-review/add-review';
import Film from '../pages/film/film';
import Main from '../pages/main/main';
import MyList from '../pages/my-list/my-list';
import NotFound from '../pages/not-found/not-found';
import Player from '../pages/player/player';
import SignIn from '../pages/sign-in/sign-in';
import PrivateRoute from '../services/private-route';
import { AppRoutes } from './routes';

const HAS_ACCESS = false;

type Props = {
  promoFilm: Movie;
  films: Array<Movie>;
}

function App({ promoFilm, films }: Props): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={AppRoutes.Main} exact>
          <Main
            promoFilm={promoFilm}
            films={films}
          />
        </Route>

        <Route path={AppRoutes.SignIn} exact>
          <SignIn />
        </Route>

        <PrivateRoute hasAccess={HAS_ACCESS} path={AppRoutes.MyList} exact>
          <MyList films={films} />
        </PrivateRoute>

        <Route path={AppRoutes.Films} exact>
          <Film
            movie={promoFilm}
            films={films}
          />
        </Route>

        <Route path={AppRoutes.Review} exact>
          <AddReview
            movie={promoFilm}
            films={films}
          />
        </Route>

        <Route path={AppRoutes.Player} exact>
          <Player film={promoFilm} />
        </Route>

        <Route>
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
