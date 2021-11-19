import { render, screen } from '@testing-library/react';
import FilmCardList from './film-card-list';
import { makeFakeFilmList } from 'src/mocks/mocks';

function MockCard(): JSX.Element {
  return <p>MockCard</p>;
}

jest.mock('../small-film-card/small-film-card', () => MockCard);

describe('FilmCardList component tests', () => {
  it('should be render correctly', () => {
    const films = makeFakeFilmList(4);

    render(<FilmCardList films={films} />);

    expect(screen.getAllByText(/MockCard/i).length).toBe(films.length);
  });
});
