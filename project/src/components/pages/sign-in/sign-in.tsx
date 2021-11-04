import Footer from '@components/layout/footer/footer';
import Logo from '@components/layout/logo/logo';
import SignInForm from '@components/layout/sign-in-form./sign-in-form';

function SignIn(): JSX.Element {
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />

        <h1 className="page-title user-page__title">Sign in</h1>
      </header>

      <SignInForm className="user-page__content" />

      <Footer />
    </div>
  );
}

export default SignIn;
