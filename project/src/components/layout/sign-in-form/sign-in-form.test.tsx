import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import * as Redux from 'react-redux';
import SignInForm from './sign-in-form';

describe('SignInForm component tests', () => {
  beforeEach(() => {
    const useDispatchSpy = jest.spyOn(Redux, 'useDispatch');
    useDispatchSpy.mockReturnValue(jest.fn());
  });

  it('should render corretcly', () => {
    render(<SignInForm />);

    expect(screen.getByText(/email/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument();
    expect(screen.getByText(/password/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/password/i)).toBeInTheDocument();
    expect(screen.getByText(/sign in/i)).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('checked render input value and validation', () => {
    render(<SignInForm />);

    expect(screen.queryByText('Please enter a valid email address')).not.toBeInTheDocument();

    userEvent.type(screen.getByPlaceholderText(/email/i), 'TestEmail');
    userEvent.type(screen.getByPlaceholderText(/password/i), 'TestPassword');

    expect(screen.getByDisplayValue('TestEmail')).toBeInTheDocument();
    expect(screen.getByDisplayValue('TestPassword')).toBeInTheDocument();

    expect(screen.getByText('Please enter a valid email address')).toBeInTheDocument();
  });

  it('should dispatch action when click to login', () => {
    const useDispatchSpy = jest.spyOn(Redux, 'useDispatch');
    const dispatch = jest.fn();
    useDispatchSpy.mockReturnValue(dispatch);

    render(<SignInForm />);

    userEvent.click(screen.getByRole('button'));

    expect(dispatch).toBeCalled();
  });
});
