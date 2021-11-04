import { getAuthStatus } from '@store/user/selectors';
import { useSelector } from 'react-redux';
import { Redirect, Route, RouteProps } from 'react-router';
import { AppRoutes, AuthStatus } from 'src/constants';

function PrivateRoute({ children, ...rest }: RouteProps): JSX.Element {
  const isAuthorized = useSelector(getAuthStatus);

  return (
    <Route {...rest}>
      {isAuthorized === AuthStatus.Auth ? children : <Redirect to={AppRoutes.SignIn} />}
    </Route>
  );
}

export default PrivateRoute;
