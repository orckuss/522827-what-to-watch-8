import './network-error.css';

function NetworkError(): JSX.Element {
  return (
    <div className="network-error">
      <h1 className="network-error__title">Не удалось получить ответ от сервера</h1>
      <p className="network-error__text">Проверьте свое интернет-соединение</p>
    </div>
  );
}

export default NetworkError;
