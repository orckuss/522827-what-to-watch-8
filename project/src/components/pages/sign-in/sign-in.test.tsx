import { render, screen } from '@testing-library/react';
import SignIn from './sign-in';

function MockLogo(): JSX.Element { return <p>Logo</p>; }
jest.mock('@components/layout/logo/logo', () => MockLogo);

function MockForm(): JSX.Element { return <p>SignIn form</p>; }
jest.mock('@components/layout/sign-in-form/sign-in-form', () => MockForm);

function MockFooter(): JSX.Element { return <p>Footer</p>; }
jest.mock('@components/layout/footer/footer', () => MockFooter);

describe('SignIn component tests', () => {
  it('should render correctly', () => {
    render(<SignIn />);

    expect(screen.getByText(/Logo/i)).toBeInTheDocument();
    expect(screen.getByText(/Sign in/i)).toBeInTheDocument();
    expect(screen.getByText(/SignIn form/i)).toBeInTheDocument();
    expect(screen.getByText(/Footer/i)).toBeInTheDocument();
  });
});
