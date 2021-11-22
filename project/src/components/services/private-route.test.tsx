import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { Route, Router } from 'react-router';
import PrivateRoute from './private-route';
import { GlobalState } from 'src/types/global-state';
import { createMemoryHistory } from 'history';
import { AppRoutes, AuthStatus } from 'src/constants';

const mockStore = configureMockStore<GlobalState>();
const history = createMemoryHistory();

const publicRoute = '/public' as AppRoutes;
const privateRoute = '/private' as AppRoutes;

const renderMock = (
  <Router history={history}>
    <Route exact path={publicRoute}>
      <h1>Public route</h1>
    </Route>

    <PrivateRoute
      path={privateRoute}
      exact
      authStatus={AuthStatus.Auth}
      redirect={publicRoute}
    >
      <h1>Private route</h1>
    </PrivateRoute>
  </Router>
);

describe('private-route tests', () => {
  beforeEach(() => {
    history.push(privateRoute);
  });

  it('should render public route when user is not authorized', () => {
    const store = mockStore({ user: { authorizationStatus: AuthStatus.NoAuth } });

    render(
      <Provider store={store}>
        {renderMock}
      </Provider>,
    );

    expect(screen.queryByText('Private route')).not.toBeInTheDocument();
    expect(screen.getByText('Public route')).toBeInTheDocument();
  });

  it('should render private route when user is authorized', () => {
    const store = mockStore({ user: { authorizationStatus: AuthStatus.Auth } });

    render(
      <Provider store={store}>
        {renderMock}
      </Provider>,
    );

    expect(screen.queryByText('Public route')).not.toBeInTheDocument();
    expect(screen.getByText('Private route')).toBeInTheDocument();
  });
});
