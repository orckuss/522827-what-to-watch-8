import { ReactNode } from 'react';
import Logo from '../logo/logo';
import User from '../user/user';

type Props = {
  className?: string;
  children?: ReactNode;
};

function Header({ className = '', children }: Props): JSX.Element {
  return (
    <header className={`page-header ${className}`}>
      <Logo />
      {children}
      <User />
    </header>
  );
}

export default Header;
