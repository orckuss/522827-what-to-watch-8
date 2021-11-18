import { render, screen } from '@testing-library/react';
import Header from './header';

function MockLogo(): JSX.Element {
  return <p>Logo</p>;
}

function MockUser(): JSX.Element {
  return <p>User</p>;
}

jest.mock('../logo/logo', () => MockLogo);
jest.mock('../user/user', () => MockUser);

describe('Header compoent tests', () => {
  it('should render correctly', () => {
    const { container } = render(<Header />);

    expect(screen.getByText('Logo')).toBeInTheDocument();
    expect(container.querySelector('header')).toBeInTheDocument();
    expect(screen.getByText('User')).toBeInTheDocument();
  });

  it('should render with diffrent props', () => {
    const className = 'FAKE_CLASS';

    const { container, rerender } = render(<Header />);

    expect(container.querySelector('header')).toBeInTheDocument();
    expect(container.querySelector('header')).not.toHaveClass(className);

    rerender(<Header className={className} />);

    expect(container.querySelector('header')).toHaveClass(className);
  });

  it('sould correctly render with children', () => {
    render(
      <Header>
        <h2>I am child</h2>
        <h2>I am another child</h2>
      </Header>,
    );

    expect(screen.getByText('I am child')).toBeInTheDocument();
    expect(screen.getByText('I am another child')).toBeInTheDocument();
  });
});
