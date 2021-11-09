import { Router as BrowserRouter, Switch, Route } from 'react-router-dom';
import { AppRoutes, AuthStatus } from 'src/constants';
import { Film as FilmData } from 'src/types/film';
import AddReview from '../pages/add-review/add-review';
import Film from '@components/pages/film/film';
import Main from '@components/pages/main/main';
import MyList from '@components/pages/my-list/my-list';
import NotFound from '@components/pages/not-found/not-found';
import Player from '@components/pages/player/player';
import SignIn from '@components/pages/sign-in/sign-in';
import PrivateRoute from '@components/services/private-route';
import Spinner from '@components/layout/spinner/spinner';
import { useSelector } from 'react-redux';
import { getFilmsLoadedState } from '@store/films/selectors';
import { browserHistory } from 'src/utils/browser-history';
import { getAuthStatus } from '@store/user/selectors';

type Props = {
  promoFilm: FilmData;
};

function App({ promoFilm }: Props): JSX.Element {
  const authStatus = useSelector(getAuthStatus);
  const isFilmsLoaded = useSelector(getFilmsLoadedState);

  const condition = authStatus !== AuthStatus.Unknown && isFilmsLoaded;

  return condition ? (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route path={AppRoutes.Main} exact>
          <Main />
        </Route>

        <Route path={AppRoutes.SignIn} exact>
          <SignIn />
        </Route>

        <PrivateRoute path={AppRoutes.MyList} exact>
          <MyList />
        </PrivateRoute>

        <Route path={AppRoutes.Films} exact>
          <Film />
        </Route>

        <PrivateRoute path={AppRoutes.Review} exact>
          <AddReview />
        </PrivateRoute>

        <Route path={AppRoutes.Player} exact>
          <Player film={promoFilm} />
        </Route>

        <Route>
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  ) : <Spinner />;
}

export default App;
