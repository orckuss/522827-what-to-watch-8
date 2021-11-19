import { render, screen } from '@testing-library/react';
import { datatype, internet } from 'faker';
import FilmCardHeader from './film-card-header';

function MockHeader(): JSX.Element {
  return <p>Header</p>;
}

jest.mock('../header/header', () => MockHeader);

describe('FilmCardHeader component tests', () => {
  it('should be render correctly', () => {
    const url = internet.url();
    const alt = datatype.string();

    render(<FilmCardHeader backgroundImage={url} alt={alt} />);

    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getByRole('img')).toHaveAttribute('src', url);
    expect(screen.getByRole('img')).toHaveAttribute('alt', alt);
    expect(screen.getByText('Header')).toBeInTheDocument();
  });
});
