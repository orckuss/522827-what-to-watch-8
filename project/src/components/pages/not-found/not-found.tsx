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
      <a className="btn not-found__link">Вернуться на главную</a>
    </div>
  );
}

export default NotFound;
