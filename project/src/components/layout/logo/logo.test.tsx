import { configureMockStore } from '@jedmao/redux-mock-store';
import { resetFilmCardsCount } from '@store/films/actions';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { Route, Router, Switch } from 'react-router';
import { AppRoutes } from 'src/constants';
import { GlobalState } from 'src/types/global-state';
import Logo from './logo';

const mockStore = configureMockStore<GlobalState>();
const history = createMemoryHistory();

describe('Logo component tests', () => {
  it('should be correctly render', () => {
    const store = mockStore();

    render(
      <Provider store={store}>
        <Router history={history} >
          <Logo />
        </Router>
      </Provider>,
    );

    expect(screen.getByRole('link')).toBeInTheDocument();
    expect(screen.getByRole('link')).toHaveTextContent(/wtw/i);
  });

  it('should redirect to maim', () => {
    const store = mockStore();
    history.push('/fake');

    render(
      <Provider store={store}>
        <Router history={history} >
          <Switch>
            <Route exact path={AppRoutes.Main}>
              <h1>This is main page</h1>
            </Route>
            <Route>
              <Logo />
            </Route>
          </Switch>
        </Router>
      </Provider>,
    );

    expect(screen.queryByText('This is main page')).not.toBeInTheDocument();
    userEvent.click(screen.getByRole('link'));
    expect(screen.getByText('This is main page')).toBeInTheDocument();
  });

  it('should dispatch reset filter action', () => {
    const store = mockStore();

    render(
      <Provider store={store}>
        <Router history={history} >
          <Logo />
        </Router>
      </Provider>,
    );

    expect(store.getActions().length).toBe(0);

    userEvent.click(screen.getByRole('link'));

    expect(store.getActions()).toEqual([
      resetFilmCardsCount(),
    ]);
  });
});
