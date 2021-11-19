import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { Route, Router, Switch } from 'react-router';
import { AppRoutes, AuthStatus } from 'src/constants';
import { GlobalState } from 'src/types/global-state';
import User from './user';
import * as Redux from 'react-redux';

const mockStore = configureMockStore<GlobalState>();
const history = createMemoryHistory();

describe('User component tests', () => {
  it('should be render with img and link when Auth', () => {
    const store = mockStore({ user: { authorizationStatus: AuthStatus.Auth } });

    render(
      <Provider store={store}>
        <Router history={history}>
          <User />
        </Router>
      </Provider>,
    );

    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getAllByRole('link')).toHaveLength(2);
    expect(screen.getByText(/sign out/i)).toBeInTheDocument();
  });

  it('should be render withhout img when NoAuth', () => {
    const store = mockStore({ user: { authorizationStatus: AuthStatus.NoAuth } });

    render(
      <Provider store={store}>
        <Router history={history}>
          <User />
        </Router>
      </Provider>,
    );

    expect(screen.getByRole('link')).toBeInTheDocument();
    expect(screen.getByText(/sign in/i)).toBeInTheDocument();
  });

  it('should be redirect to login page when click on signIn', () => {
    const store = mockStore({ user: { authorizationStatus: AuthStatus.NoAuth } });
    history.push('/fake');

    render(
      <Provider store={store}>
        <Router history={history}>
          <Switch>
            <Route path={AppRoutes.SignIn} >
              <h1>This is login page</h1>
            </Route>
            <Route>
              <User />
            </Route>
          </Switch>
        </Router>
      </Provider>,
    );

    expect(screen.queryByText('This is login page')).not.toBeInTheDocument();
    userEvent.click(screen.getByText(/sign in/i));
    expect(screen.getByText('This is login page')).toBeInTheDocument();
  });

  it('should be redirect to mylist page when click on img', () => {
    const store = mockStore({ user: { authorizationStatus: AuthStatus.Auth } });
    history.push('/fake');

    render(
      <Provider store={store}>
        <Router history={history}>
          <Switch>
            <Route path={AppRoutes.MyList} >
              <h1>This is mylist page</h1>
            </Route>
            <Route>
              <User />
            </Route>
          </Switch>
        </Router>
      </Provider>,
    );

    expect(screen.queryByText('This is mylist page')).not.toBeInTheDocument();
    userEvent.click(screen.getByRole('img'));
    expect(screen.getByText('This is mylist page')).toBeInTheDocument();
  });

  it('should send logout action when click to sign out', () => {
    const store = mockStore({ user: { authorizationStatus: AuthStatus.Auth } });
    const dispatch = jest.fn();
    const useDispatch = jest.spyOn(Redux, 'useDispatch');
    useDispatch.mockReturnValue(dispatch);

    render(
      <Provider store={store}>
        <Router history={history}>
          <User />
        </Router>
      </Provider>,
    );

    userEvent.click(screen.getByText(/sign out/i));

    expect(dispatch).toBeCalled();
  });

});
