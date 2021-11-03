import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { AppRoutes } from 'src/constants';
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
import { getFilmsLoadedState } from '@store/film/selectors';

type Props = {
  promoFilm: FilmData;
}

function App({ promoFilm }: Props): JSX.Element {
  const isFilmsLoaded = useSelector(getFilmsLoadedState);

  return isFilmsLoaded ? (
    <BrowserRouter>
      <Switch>
        <Route path={AppRoutes.Main} exact>
          <Main promoFilm={promoFilm} />
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

        <Route path={AppRoutes.Review} exact>
          <AddReview />
        </Route>

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
