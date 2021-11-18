import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { makeFakeFilmList } from 'src/mocks/mocks';
import { Film } from 'src/types/film';
import { GlobalState } from 'src/types/global-state';
import FavoriteFilmCardList from './favorite-film-card-list';

function MockFilmCardList({ films }: { films: Array<Film> }): JSX.Element {
  return <p>MockFilmCardList {films.length}</p>;
}

jest.mock('../film-card-list/film-card-list', () => MockFilmCardList);

const mockStore = configureMockStore<GlobalState>();

describe('FavoriteFilmCardList component test', () => {
  it('should render correctly', () => {
    const count = 4;
    const store = mockStore({ user: { favoriteFilms: makeFakeFilmList(count) } });

    render(
      <Provider store={store}>
        <FavoriteFilmCardList />
      </Provider>,
    );

    expect(screen.getByText(/MockFilmCardList/i)).toBeInTheDocument();
    expect(screen.getByText(/MockFilmCardList/i)).toHaveTextContent(`${count}`);
  });
});
