import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { Route, Router } from 'react-router';
import thunk from 'redux-thunk';
import { AppRoutes, AuthStatus } from 'src/constants';
import { makeFakeFilm } from 'src/mocks/mocks';
import { GlobalState } from 'src/types/global-state';
import Film from './film';

const mockStore = configureMockStore<GlobalState>([thunk]);

const history = createMemoryHistory();

function MockSimilarCardList(): JSX.Element { return <p>Similar card list</p>; }
jest.mock('@components/layout/similar-film-card-list/similar-film-card-list', () => MockSimilarCardList);

const film = makeFakeFilm();

describe('Film component tests', () => {
  it('should render correctly', () => {
    const store = mockStore({
      activeFilm: { film },
      user: { authorizationStatus: AuthStatus.Auth },
    });

    render(
      <Provider store={store}>
        <Router history={history}>
          <Film />,
        </Router>
      </Provider>,
    );

    expect(screen.getByAltText(film.name)).toBeInTheDocument();
    expect(screen.getByText(/play/i)).toBeInTheDocument();
    expect(screen.getByText(/my list/i)).toBeInTheDocument();
    expect(screen.getByText(/Add review/i)).toBeInTheDocument();
    expect(screen.getByText(/more like this/i)).toBeInTheDocument();
    expect(screen.getByText('Similar card list')).toBeInTheDocument();
  });

  it('should not render addReview button for not authirized user', () => {
    const store = mockStore({
      activeFilm: { film },
      user: { authorizationStatus: AuthStatus.NoAuth },
    });

    render(
      <Provider store={store}>
        <Router history={history}>
          <Film />,
        </Router>
      </Provider>,
    );

    expect(screen.queryByText(/Add review/i)).not.toBeInTheDocument();
  });

  it('should navigate to add review page when click on addReview button', () => {
    history.push('/fake');

    const store = mockStore({
      activeFilm: { film },
      user: { authorizationStatus: AuthStatus.Auth },
    });

    render(
      <Provider store={store}>
        <Router history={history}>
          <Route path={AppRoutes.Review}>
            <p>Add review page</p>,
          </Route>

          <Route>
            <Film />,
          </Route>
        </Router>
      </Provider>,
    );
    expect(screen.queryByText('Add review page')).not.toBeInTheDocument();

    userEvent.click(screen.getByText(/Add review/i));

    expect(screen.getByText('Add review page')).toBeInTheDocument();
  });
});
