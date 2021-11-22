import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';
import * as Redux from 'react-redux';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import thunk from 'redux-thunk';
import { createMemoryHistory } from 'history';
import { GlobalState } from 'src/types/global-state';
import { AuthStatus } from 'src/constants';
import MyList from './my-list';

const history = createMemoryHistory();

const mockStore = configureMockStore<GlobalState>([thunk]);

function MockFavoriteFilmCardList(): JSX.Element { return <p>FilmCardList</p>; }
jest.mock('@components/layout/favorite-film-card-list/favorite-film-card-list', () => MockFavoriteFilmCardList);

describe('MyList component tests', () => {

  it('should render correctly', () => {
    const store = mockStore({ user: { authorizationStatus: AuthStatus.Auth } });

    const useDispatchSpy = jest.spyOn(Redux, 'useDispatch');
    useDispatchSpy.mockReturnValue(jest.fn());

    render(
      <Provider store={store}>
        <Router history={history}>
          <MyList />
        </Router>
      </Provider>,
    );

    expect(screen.getByText(/My list/i)).toBeInTheDocument();
    expect(screen.getByText(/Catalog/i)).toBeInTheDocument();
    expect(screen.getByText(/FilmCardList/i)).toBeInTheDocument();
  });

  it('should disatch async action when rendered', () => {
    const store = mockStore({ user: { authorizationStatus: AuthStatus.Auth } });

    const dispatch = jest.fn();
    const useDispatchSpy = jest.spyOn(Redux, 'useDispatch');
    useDispatchSpy.mockReturnValue(dispatch);

    expect(dispatch).not.toBeCalled();

    render(
      <Provider store={store}>
        <Router history={history}>
          <MyList />
        </Router>
      </Provider>,
    );

    expect(dispatch).toBeCalled();
  });
});
