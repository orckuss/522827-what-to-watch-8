import { login } from '@store/user/async-actions';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { EMAIL_PATTERN, PASSWORD_PATTERN } from 'src/constants';

type Props = {
  className?: string;
};

function SignInForm({ className = '' }: Props): JSX.Element {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isValidEmail, setIsValidEmail] = useState<boolean>(true);
  const [isValidPassword, setisValidPassword] = useState<boolean>(true);

  const dispatch = useDispatch();

  const handleFormSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    dispatch(login({ email, password }));
  };

  return (
    <div className={`sign-in ${className}`}>
      <form
        action="#"
        className="sign-in__form"
        onSubmit={handleFormSubmit}
      >
        {!isValidEmail &&
          <div className="sign-in__message">
            <p>Please enter a valid email address</p>
          </div>}

        {!isValidPassword &&
          <div className="sign-in__message">
            <p>
              We can’t recognize this email <br />
              and password combination. Please try again.
            </p>
          </div>}

        <div className="sign-in__fields">
          <div className={`sign-in__field ${(!isValidEmail || !email) && 'sign-in__field--error'}`}>
            <input
              id="user-email"
              className="sign-in__input"
              type="email"
              placeholder="Email address"
              name="user-email"
              required
              pattern={EMAIL_PATTERN.source}
              value={email}
              onChange={(evt) => setEmail(evt.currentTarget.value)}
              onBlur={(evt) => setIsValidEmail(!evt.currentTarget.validity.patternMismatch)}
            />
            <label
              className="sign-in__label visually-hidden"
              htmlFor="user-email"
            >
              Email address
            </label>
          </div>

          <div className="sign-in__field">
            <input
              id="user-password"
              className="sign-in__input"
              type="password"
              placeholder="Password"
              name="user-password"
              required
              pattern={PASSWORD_PATTERN.source}
              value={password}
              onChange={(evt) => setPassword(evt.currentTarget.value)}
              onBlur={(evt) => setisValidPassword(!evt.currentTarget.validity.patternMismatch)}
            />
            <label
              className="sign-in__label visually-hidden"
              htmlFor="user-password"
            >
              Password
            </label>
          </div>
        </div>

        <div className="sign-in__submit">
          <button
            className="sign-in__btn"
            type="submit"
          >
            Sign in
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignInForm;
