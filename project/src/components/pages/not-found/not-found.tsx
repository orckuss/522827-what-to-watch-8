import { Link } from 'react-router-dom';
import './not-found.css';

function NotFound(): JSX.Element {
  return (
    <div className="not-found">
      <img
        className="not-found__bg"
        src={'img/not-found-bg.jpg'}
        alt={'not-found'}
      />

      <h1 className="not-found__title">404</h1>
      <p className="not-found__text">Страница не найдена</p>
      <Link className="btn" to="/">
        Вернуться на главную
      </Link>
    </div>
  );
}

export default NotFound;
