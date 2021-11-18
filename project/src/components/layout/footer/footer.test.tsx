import { render, screen } from '@testing-library/react';
import Footer from './footer';

function MockLogo(): JSX.Element {
  return <p>Logo</p>;
}

jest.mock('../logo/logo', () => MockLogo);

describe('Footer component tests', () => {
  it('should be render correctly', () => {
    render(<Footer />);

    expect(screen.getByText('Logo')).toBeInTheDocument();
    expect(screen.getByText('© 2019 What to watch Ltd.')).toBeInTheDocument();
  });
});
