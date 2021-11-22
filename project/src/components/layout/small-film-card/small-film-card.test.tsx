import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { createMemoryHistory } from 'history';
import { Route, Router } from 'react-router';
import { makeFakeFilm } from 'src/mocks/mocks';
import SmallFilmCard from './small-film-card';
import { AppRoutes } from 'src/constants';

const film = makeFakeFilm();

const history = createMemoryHistory();

function MockPlayer(): JSX.Element {
  return <p>Player</p>;
}

jest.mock('../video-player/video-player', () => MockPlayer);

describe('SmallFilmCard tests', () => {
  it('should render correctly', () => {
    render(
      <Router history={history}>
        <SmallFilmCard film={film} />
      </Router>,
    );

    expect(screen.getByText(`${film.name}`)).toBeInTheDocument();
    expect(screen.getByRole('link')).toBeInTheDocument();
    expect(screen.getByText(/player/i)).toBeInTheDocument();
  });

  it('should change state correctly', () => {
    const setState = jest.fn();
    const useStateSpy = jest.spyOn(React, 'useState');
    useStateSpy.mockReturnValue([null, setState]);

    render(
      <Router history={history}>
        <SmallFilmCard film={film} />
      </Router>,
    );

    userEvent.hover(screen.getByRole('article'));
    expect(setState).toBeCalledWith(true);

    userEvent.unhover(screen.getByRole('article'));
    expect(setState).toBeCalledWith(false);

    useStateSpy.mockRestore();
  });

  it('should redirect to film page by click', () => {
    history.push('/fake');

    render(
      <Router history={history}>
        <Route exact path="/fake">
          <SmallFilmCard film={film} />
        </Route>

        <Route exact path={AppRoutes.Films}>
          <p>Film page</p>
        </Route>
      </Router>,
    );

    expect(screen.queryByText('Film page')).not.toBeInTheDocument();

    userEvent.click(screen.getByRole('link'));

    expect(screen.queryByText('Film page')).toBeInTheDocument();
  });
});
