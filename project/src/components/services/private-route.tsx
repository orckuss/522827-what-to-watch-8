import { useSelector } from 'react-redux';
import { Redirect, Route, RouteProps } from 'react-router';
import { getAuthStatus } from '@store/user/selectors';
import { AppRoutes, AuthStatus } from 'src/constants';

type Props = RouteProps & {
  authStatus: AuthStatus,
  redirect: AppRoutes,
}

function PrivateRoute({ authStatus, redirect, children, ...rest }: Props): JSX.Element {
  const isAuthorized = useSelector(getAuthStatus);

  return (
    <Route {...rest}>
      {isAuthorized === authStatus ? children : <Redirect to={redirect} />}
    </Route>
  );
}

export default PrivateRoute;
