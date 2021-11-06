import { Link } from 'react-router-dom';
import { NamedRoute } from 'src/types/route-params';

type Props = {
  routes: Array<NamedRoute>;
};

function Breadcrumbs({ routes }: Props): JSX.Element {
  return (
    <nav className="breadcrumbs">
      <ul className="breadcrumbs__list">
        {routes.map((route) => (
          <li
            key={route.name}
            className="breadcrumbs__item"
          >
            <Link
              to={route.path}
              className="breadcrumbs__link"
            >
              {route.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Breadcrumbs;
