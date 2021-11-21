import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import { AuthStatus } from 'src/constants';
import { makeFakeFilm, makeFakeFilmList } from 'src/mocks/mocks';
import { GlobalState } from 'src/types/global-state';
import Main from './main';

const mockStore = configureMockStore<GlobalState>();
const history = createMemoryHistory();

const promoFilm = makeFakeFilm();
const films = makeFakeFilmList(3);

function MockFilteredFilmCardList(): JSX.Element { return <p>Main Card list</p>; }
jest.mock('@components/layout/filtered-film-card-list/filtered-film-card-list', () => MockFilteredFilmCardList);

function MockGenreList(): JSX.Element { return <p>Genre List</p>; }
jest.mock('@components/layout/genre-list/genre-list', () => MockGenreList);

const store = mockStore({
  user: { authorizationStatus: AuthStatus.Auth },
  promo: { film: promoFilm },
  films: { films },
});

describe('Main component tests', () => {
  it('sould render correctly', () => {
    const { container } = render(
      <Provider store={store}>
        <Router history={history}>
          <Main />
        </Router>
      </Provider>,
    );

    expect(container.querySelector('.page-header')).toBeInTheDocument();
    expect(screen.getByAltText(promoFilm.name)).toBeInTheDocument();
    expect(screen.getByText(/play/i)).toBeInTheDocument();
    expect(screen.getByText(/my list/i)).toBeInTheDocument();
    expect(screen.getByText('Genre List')).toBeInTheDocument();
    expect(screen.getByText('Main Card list')).toBeInTheDocument();
    expect(container.querySelector('.page-footer')).toBeInTheDocument();
  });
});
