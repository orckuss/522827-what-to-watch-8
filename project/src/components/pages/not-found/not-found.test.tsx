import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';
import { Route, Router } from 'react-router';
import { AppRoutes } from 'src/constants';
import NotFound from './not-found';

const history = createMemoryHistory();

describe('NotFound component tests', () => {
  it('should render correctly', () => {
    render(
      <Router history={history}>
        <NotFound />
      </Router>,
    );

    expect(screen.getByText(/404/i)).toBeInTheDocument();
    expect(screen.getByText(/Страница не найдена/i)).toBeInTheDocument();
    expect(screen.getByText(/Вернуться на главную/i)).toBeInTheDocument();
  });

  it('should navigate ot main by click to link', () => {
    history.push('/fake');

    render(
      <Router history={history}>
        <Route exact path={AppRoutes.Main}>
          <h1>Main Page</h1>
        </Route>

        <Route>
          <NotFound />
        </Route>
      </Router>,
    );

    expect(screen.queryByText(/Main Page/i)).not.toBeInTheDocument();

    userEvent.click(screen.getByRole('link'));

    expect(screen.queryByText(/Main Page/i)).toBeInTheDocument();
  });
});
