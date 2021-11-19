import { render } from '@testing-library/react';
import Spinner from './spinner';

describe('Test for Spinner component', () => {
  it('Should render correctly', () => {
    const { container } = render(<Spinner />);

    expect(container.querySelector('.spinner')).toBeInTheDocument();
    expect(container.querySelector('.path')).toBeInTheDocument();
  });
});
