import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';
import * as Redux from 'react-redux';
import { generatePath, Route, Router } from 'react-router';
import { AppRoutes } from 'src/constants';
import { makeFakeFilm } from 'src/mocks/mocks';
import FilmCardButtons from './film-card-buttons';

const film = makeFakeFilm();

const history = createMemoryHistory();

describe('FilmCardButtons component tests', () => {
  beforeEach(() => {
    const useDispatchSpy = jest.spyOn(Redux, 'useDispatch');
    useDispatchSpy.mockReturnValue(jest.fn());
  });

  it('should render correctly', () => {
    render(
      <Router history={history}>
        <FilmCardButtons film={film} />
      </Router>,
    );

    expect(screen.getByText(film.name)).toBeInTheDocument();
    expect(screen.getByText(film.genre)).toBeInTheDocument();
    expect(screen.getByText(film.released)).toBeInTheDocument();
    expect(screen.getByRole('link')).toBeInTheDocument();
    expect(screen.getByText(/play/i)).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByText(/my list/i)).toBeInTheDocument();
  });

  it('should switch icon when isFavorite change', () => {
    const newFilm = { ...film, isFavorite: true };

    const { rerender } = render(
      <Router history={history}>
        <FilmCardButtons film={newFilm} />
      </Router>,
    );

    expect(screen.getByTestId(/check/i)).toBeInTheDocument();
    expect(screen.queryByTestId(/add/i)).not.toBeInTheDocument();

    newFilm.isFavorite = false;

    rerender(
      <Router history={history}>
        <FilmCardButtons film={newFilm} />
      </Router>,
    );

    expect(screen.getByTestId(/add/i)).toBeInTheDocument();
    expect(screen.queryByTestId(/check/i)).not.toBeInTheDocument();
  });

  it('should render correctly with shild', () => {
    render(
      <Router history={history}>
        <FilmCardButtons film={film}>
          <p>child</p>
        </FilmCardButtons>
      </Router>,
    );

    expect(screen.getByText(/child/i)).toBeInTheDocument();
  });

  it('should redirect to player when click play button', () => {
    history.push('/fake');

    render(
      <Router history={history}>
        <Route exact path={generatePath(AppRoutes.Player, { id: film.id })}>
          <p>Player</p>
        </Route>

        <Route>
          <FilmCardButtons film={film} />
        </Route>
      </Router>,
    );

    userEvent.click(screen.getByText(/play/i));

    expect(screen.getByText(/player/i)).toBeInTheDocument();
  });

  it('should use dispatcj to send action', () => {
    const dispatch = jest.fn();
    const useDispatchSpy = jest.spyOn(Redux, 'useDispatch');
    useDispatchSpy.mockReturnValue(dispatch);

    render(
      <Router history={history}>
        <FilmCardButtons film={film} />
      </Router>,
    );

    userEvent.click(screen.getByText(/my list/i));

    expect(dispatch).toBeCalled();
  });
});
