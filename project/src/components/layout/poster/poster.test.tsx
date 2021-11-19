import { render, screen } from '@testing-library/react';
import { datatype, internet } from 'faker';
import Poster from './poster';

describe('Poster component tests', () => {
  it('should be render correctly', () => {
    const src = internet.url();
    const alt = datatype.string();

    render(<Poster src={src} alt={alt} />);

    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getByRole('img')).toHaveAttribute('src', src);
    expect(screen.getByAltText(/poster/i)).toBeInTheDocument();
  });
});
