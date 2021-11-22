import { render, screen } from '@testing-library/react';
import NetworkError from './network-error';

describe('NetworkError', () => {
  it('should render correctly', () => {
    render(<NetworkError />);

    screen.getAllByText(/Не удалось получить ответ от сервера/i);
    screen.getAllByText(/Проверьте свое интернет-соединение/i);
  });
});
