import { render, screen } from '@testing-library/react';
import IconAdd from './icon-add';

describe('StarRadioButton component', () => {
  it('should render correctly', () => {
    render(<IconAdd />);

    expect(screen.getByTestId(/add/i)).toBeInTheDocument();
  });
});
