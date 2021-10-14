import { Redirect, Route, RouteProps } from 'react-router';
import { AppRoutes } from '../app/routes';

type Props = RouteProps & {
  hasAccess: boolean;
}

function PrivateRoute({ hasAccess, children, ...rest }: Props): JSX.Element {
  return (
    <Route {...rest}>
      {hasAccess ? children : <Redirect to={AppRoutes.SignIn} />}
    </Route>
  );
}

export default PrivateRoute;