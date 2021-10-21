import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Film as FilmData } from '../../types/film';
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
  promoFilm: FilmData;
  films: Array<FilmData>;
}

function App({ promoFilm, films }: Props): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={AppRoutes.Main} exact>
          <Main promoFilm={promoFilm} />
        </Route>

        <Route path={AppRoutes.SignIn} exact>
          <SignIn />
        </Route>

        <PrivateRoute hasAccess={HAS_ACCESS} path={AppRoutes.MyList} exact>
          <MyList />
        </PrivateRoute>

        <Route path={AppRoutes.Films} exact>
          <Film films={films} />
        </Route>

        <Route path={AppRoutes.Review} exact>
          <AddReview films={films} />
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
