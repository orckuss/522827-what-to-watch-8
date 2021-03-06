import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { generatePath, Router } from 'react-router';
import { AppRoutes, AuthStatus } from 'src/constants';
import { GlobalState } from 'src/types/global-state';
import App from './app';

const mockStore = configureMockStore<GlobalState>();
const history = createMemoryHistory();

const authStore = mockStore({
  user: { authorizationStatus: AuthStatus.Auth },
  films: { filmsLoaded: true },
  activeFilm: { requestStatus: false },
});

const mockAuthApp = (
  <Provider store={authStore}>
    <Router history={history}>
      <App></App>
    </Router>
  </Provider>
);

const noAuthStore = mockStore({
  user: { authorizationStatus: AuthStatus.NoAuth },
  films: { filmsLoaded: true },
  activeFilm: { requestStatus: false },
});

const mockNoAuthApp = (
  <Provider store={noAuthStore}>
    <Router history={history}>
      <App></App>
    </Router>
  </Provider>
);

function MockMain(): JSX.Element { return <section>Main</section>; }
jest.mock('@components/pages/main/main', () => MockMain);

function MockFilm(): JSX.Element { return <section>film</section>; }
jest.mock('@components/pages/film/film', () => MockFilm);

function MockAddReview(): JSX.Element { return <section>AddReview</section>; }
jest.mock('@components/pages/add-review/add-review', () => MockAddReview);

function MockMyList(): JSX.Element { return <section>MyList</section>; }
jest.mock('@components/pages/my-list/my-list', () => MockMyList);

function MockNotFound(): JSX.Element { return <section>NotFound</section>; }
jest.mock('@components/pages/not-found/not-found', () => MockNotFound);

function MockPlayer(): JSX.Element { return <section>Player</section>; }
jest.mock('@components/pages/player/player', () => MockPlayer);

function MockSignIn(): JSX.Element { return <section>SignIn</section>; }
jest.mock('@components/pages/sign-in/sign-in', () => MockSignIn);

describe('Tests for app routing', () => {
  it('Should navigate to Main', () => {
    history.push(AppRoutes.Main);

    render(mockAuthApp);

    expect(screen.queryByText(/Main/i)).toBeInTheDocument();
  });

  it('Should navigate to Film', () => {
    history.push(generatePath(AppRoutes.Films, { id: 1 }));

    render(mockAuthApp);

    expect(screen.queryByText(/Film/i)).toBeInTheDocument();
  });

  it('Should navigate to NotFound', () => {
    history.push(AppRoutes.NotFound);

    render(mockAuthApp);

    expect(screen.queryByText(/NotFound/i)).toBeInTheDocument();
  });

  it('Should navigate to Player', () => {
    history.push(generatePath(AppRoutes.Player, { id: 1 }));

    render(mockAuthApp);

    expect(screen.queryByText(/Player/i)).toBeInTheDocument();
  });

  it('Should navigate to AddReview', () => {
    history.push(generatePath(AppRoutes.Review, { id: 1 }));

    render(mockAuthApp);

    expect(screen.queryByText(/AddReview/i)).toBeInTheDocument();
  });

  it('Should navigate to MyList whith Authorization', () => {
    history.push(AppRoutes.MyList);

    render(mockAuthApp);

    expect(screen.queryByText(/MyList/i)).toBeInTheDocument();
  });

  it('Should redirect to SignIn without Authorization', () => {
    history.push(AppRoutes.MyList);

    render(mockNoAuthApp);

    expect(screen.queryByText(/MyList/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/SignIn/i)).toBeInTheDocument();
  });

  it('Should navigate to SignIn without Authorization', () => {
    history.push(AppRoutes.SignIn);

    render(mockNoAuthApp);

    expect(screen.queryByText(/SignIn/i)).toBeInTheDocument();
  });

  it('Should redirect to Nain with Authorization', () => {
    history.push(AppRoutes.SignIn);

    render(mockAuthApp);

    expect(screen.queryByText(/SignIn/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Main/i)).toBeInTheDocument();
  });

  it('Should do not navigate to main and show spinner when loading is true', () => {
    history.push(AppRoutes.Main);
    const store = mockStore({
      user: { authorizationStatus: AuthStatus.Auth },
      films: { filmsLoaded: false },
      activeFilm: { requestStatus: false },
    });

    const { container } = render(
      <Provider store={store}>
        <Router history={history}>
          <App></App>
        </Router>
      </Provider>,
    );

    expect(screen.queryByText(/Main/i)).not.toBeInTheDocument();
    expect(container.querySelector('.spinner')).toBeInTheDocument();
  });
});
