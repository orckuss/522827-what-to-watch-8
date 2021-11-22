import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import thunk from 'redux-thunk';
import { AuthStatus } from 'src/constants';
import { makeFakeFilm } from 'src/mocks/mocks';
import { GlobalState } from 'src/types/global-state';
import AddReview from './add-review';

const mockStore = configureMockStore<GlobalState>([thunk]);

const history = createMemoryHistory();

describe('AddReview component tests', () => {
  it('should render correctly', () => {
    const film = makeFakeFilm();
    const store = mockStore({ activeFilm: { film }, user: { authorizationStatus: AuthStatus.Auth } });

    render(
      <Provider store={store}>
        <Router history={history}>
          <AddReview />,
        </Router>
      </Provider>,
    );

    expect(screen.getByAltText(`${film.name}`)).toBeInTheDocument();
    expect(screen.getByAltText(`${film.name} poster`)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/review/i)).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
