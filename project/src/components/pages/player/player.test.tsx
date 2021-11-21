import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { generatePath, Route, Router } from 'react-router';
import { makeFakeFilm } from 'src/mocks/mocks';
import { GlobalState } from 'src/types/global-state';
import Player from './player';
import userEvent from '@testing-library/user-event';
import { AppRoutes } from 'src/constants';

const film = makeFakeFilm();

const mockStore = configureMockStore<GlobalState>([thunk]);
const history = createMemoryHistory();
const store = mockStore({
  activeFilm: { film },
});

describe('Player component tests', () => {
  beforeAll(() => {
    window.HTMLMediaElement.prototype.play = jest.fn();
    window.HTMLMediaElement.prototype.pause = jest.fn();
    window.HTMLMediaElement.prototype.load = jest.fn();
    window.HTMLMediaElement.prototype.requestFullscreen = jest.fn();
  });

  it('sould render correctly', () => {
    const { container } = render(
      <Provider store={store}>
        <Router history={history}>
          <Player />
        </Router>
      </Provider>,
    );

    expect(container.querySelector('video')).toBeInTheDocument();
    expect(screen.getByText(/exit/i)).toBeInTheDocument();
    expect(screen.getByText(/play/i)).toBeInTheDocument();
    expect(screen.getByText(/full screen/i)).toBeInTheDocument();
    expect(screen.getByTestId(/progress/i)).toBeInTheDocument();
  });

  it('should set full screen when click button', () => {
    render(
      <Provider store={store}>
        <Router history={history}>
          <Player />
        </Router>
      </Provider>,
    );

    expect(window.HTMLMediaElement.prototype.requestFullscreen).not.toBeCalled();
    userEvent.click(screen.getByText(/full screen/i));
    expect(window.HTMLMediaElement.prototype.requestFullscreen).toBeCalledTimes(1);
  });

  it('should play and pause video', () => {
    const { container } = render(
      <Provider store={store}>
        <Router history={history}>
          <Player />
        </Router>
      </Provider>,
    );

    expect(screen.getByText(/play/i)).toBeInTheDocument();
    expect(screen.queryByText(/pause/i)).not.toBeInTheDocument();

    expect(window.HTMLMediaElement.prototype.play).not.toBeCalled();
    expect(container.querySelector('video')?.paused).toBeTruthy();

    userEvent.click(screen.getByText(/play/i));

    expect(screen.queryByText(/play/i)).not.toBeInTheDocument();
    expect(screen.getByText(/pause/i)).toBeInTheDocument();

    expect(window.HTMLMediaElement.prototype.play).toBeCalled();

    userEvent.click(screen.getByText(/pause/i));

    expect(screen.getByText(/play/i)).toBeInTheDocument();
    expect(screen.queryByText(/pause/i)).not.toBeInTheDocument();

    expect(window.HTMLMediaElement.prototype.pause).toBeCalled();
  });

  it('should stop video and go back in history when ckick on exit', () => {
    history.push(AppRoutes.Main);
    history.push(generatePath(AppRoutes.Player, { id: film.id }));

    render(
      <Provider store={store}>
        <Router history={history}>
          <Route exact path={AppRoutes.Player}>
            <Player />
          </Route>
        </Router>
      </Provider>,
    );

    expect(window.HTMLMediaElement.prototype.load).not.toBeCalled();

    userEvent.click(screen.getByText(/exit/i));

    expect(window.HTMLMediaElement.prototype.load).toBeCalled();
    expect(history.location.pathname).toBe(AppRoutes.Main);
  });
});
