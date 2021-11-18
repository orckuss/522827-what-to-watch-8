import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';
import { Route, Router, Switch } from 'react-router';
import { NamedRoute } from 'src/types/route-params';
import Breadcrumbs from './breadcrumbs';

const history = createMemoryHistory();

const routes: Array<NamedRoute> = [
  {
    name: 'first',
    path: '/first',
  },
  {
    name: 'second',
    path: '/second',
  },
];

describe('Breadcrumbs component tests', () => {
  it('should correct render', () => {
    render(
      <Router history={history}>
        <Breadcrumbs routes={routes} />
      </Router>,
    );

    expect(screen.getAllByRole('link').length).toBe(routes.length);
  });

  it('should navigate by click to breadcrumb', () => {
    const [firstRoute, secondRoute] = routes;

    history.push('/fake');

    render(
      <Router history={history}>
        <Breadcrumbs routes={routes} />

        <Switch>
          <Route path={firstRoute.path}>
            <h1>First page</h1>
          </Route>

          <Route path={secondRoute.path}>
            <h1>Second page</h1>
          </Route>
        </Switch>
      </Router>,
    );

    expect(screen.queryByText(/First page/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Second page/i)).not.toBeInTheDocument();

    userEvent.click(screen.getByText(firstRoute.name));

    expect(screen.queryByText(/First page/i)).toBeInTheDocument();
    expect(screen.queryByText(/Second page/i)).not.toBeInTheDocument();

    userEvent.click(screen.getByText(secondRoute.name));

    expect(screen.queryByText(/First page/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Second page/i)).toBeInTheDocument();
  });
});
