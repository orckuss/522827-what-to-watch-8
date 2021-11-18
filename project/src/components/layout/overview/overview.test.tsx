import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { RatingLevel } from 'src/constants';
import { makeFakeFilm } from 'src/mocks/mocks';
import { GlobalState } from 'src/types/global-state';
import Overview from './overview';

const mockStore = configureMockStore<GlobalState>();

describe('Overview component tests', () => {
  const film = makeFakeFilm();

  it('should be correctly render', () => {
    const store = mockStore({ activeFilm: { film } });

    render(
      <Provider store={store}>
        <Overview />
      </Provider>,
    );

    expect(screen.getByText(film.description)).toBeInTheDocument();

    expect(screen.getByText(film.rating)).toBeInTheDocument();

    expect(screen.getByText(/ratings/i)).toBeInTheDocument();
    expect(screen.getByText(/ratings/i)).toHaveTextContent(`${film.scoresCount}`);

    expect(screen.getByText(/director/i)).toBeInTheDocument();
    expect(screen.getByText(/director/i)).toHaveTextContent(film.director);

    expect(screen.getByText(/starring/i)).toBeInTheDocument();
    expect(screen.getByText(/starring/i)).toHaveTextContent(film.starring.join(', '));
  });

  it('should correctly set rating level to very good', () => {
    const store = mockStore({ activeFilm: { film: { ...film, rating: 8.1 } } });

    const component = (
      <Provider store={store}>
        <Overview />
      </Provider>
    );

    render(component);

    expect(screen.getByText(RatingLevel.VeryGood)).toBeInTheDocument();
  });

  it('should correctly set rating level to bad', () => {
    const store = mockStore({ activeFilm: { film: { ...film, rating: 2.4 } } });

    const component = (
      <Provider store={store}>
        <Overview />
      </Provider>
    );

    render(component);

    expect(screen.getByText(RatingLevel.Bad)).toBeInTheDocument();
  });

  it('should correctly set rating level to awesome', () => {
    const store = mockStore({ activeFilm: { film: { ...film, rating: 10 } } });

    const component = (
      <Provider store={store}>
        <Overview />
      </Provider>
    );

    render(component);

    expect(screen.getByText(RatingLevel.Awesome)).toBeInTheDocument();
  });
});
