import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import GenreList from './genre-list';
import { GlobalState } from 'src/types/global-state';
import { makeFakeFilmList } from 'src/mocks/mocks';
import { changeGenre, resetFilmCardsCount } from '@store/films/actions';
import { Genre } from 'src/types/genre';

const mockStore = configureMockStore<GlobalState>();

describe('GenreList tests', () => {
  it('should render correctly', () => {
    const films = makeFakeFilmList(4);
    const [, , active] = films;
    const store = mockStore({ films: { films, genre: active.genre } });
    const uniqueGenres = new Set(films.map((film) => film.genre));

    const { container } = render(
      <Provider store={store}>
        <GenreList />
      </Provider>,
    );

    expect(screen.getAllByRole('link').length).toBe(Array.from(uniqueGenres).length + 1);
    expect(screen.getByText(films[3].genre)).toBeInTheDocument();
    expect(screen.getByText(/all genres/i)).toBeInTheDocument();
    expect(container.querySelector('.catalog__genres-item--active')).toHaveTextContent(active.genre);
  });

  it('should dispatch actions to change genre and reset cards count', () => {
    const store = mockStore({ films: { films: makeFakeFilmList(4) } });

    render(
      <Provider store={store}>
        <GenreList />
      </Provider>,
    );

    const [, , clickedLink] = screen.getAllByRole('link');

    userEvent.click(clickedLink);

    expect(store.getActions()).toEqual([
      changeGenre(clickedLink.textContent as Genre),
      resetFilmCardsCount(),
    ]);
  });
});
