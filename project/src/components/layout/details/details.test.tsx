import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { makeFakeFilm } from 'src/mocks/mocks';
import { GlobalState } from 'src/types/global-state';
import Details from './details';

const mockStore = configureMockStore<GlobalState>();

describe('Details component tests', () => {
  const film = makeFakeFilm();

  it('should be correctly render', () => {
    const store = mockStore({ activeFilm: { film } });

    render(
      <Provider store={store}>
        <Details />
      </Provider>,
    );

    expect(screen.getByText(/director/i)).toBeInTheDocument();
    expect(screen.getByText(film.director)).toBeInTheDocument();

    expect(screen.getByText(/starring/i)).toBeInTheDocument();
    expect(screen.getByText(film.starring.join(' '))).toBeInTheDocument();

    expect(screen.getByText(/run time/i)).toBeInTheDocument();
    expect(screen.getByText(film.runTime)).toBeInTheDocument();

    expect(screen.getByText(/genre/i)).toBeInTheDocument();
    expect(screen.getByText(film.genre)).toBeInTheDocument();

    expect(screen.getByText(/released/i)).toBeInTheDocument();
    expect(screen.getByText(film.released)).toBeInTheDocument();
  });
});
