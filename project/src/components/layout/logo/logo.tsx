import { Link } from 'react-router-dom';

type Props = {
  className?: string;
}

function Logo({ className = '' }: Props): JSX.Element {
  return (
    <div className="logo">
      <Link
        to="/"
        className={`logo__link ${className}`}
      >
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </Link>
    </div>
  );
}

export default Logo;
