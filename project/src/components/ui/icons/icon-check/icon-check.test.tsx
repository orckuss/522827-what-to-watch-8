import { render, screen } from '@testing-library/react';
import IconCheck from './icon-check';

describe('StarRadioButton component', () => {
  it('should render correctly', () => {
    render(<IconCheck />);

    expect(screen.getByTestId(/check/i)).toBeInTheDocument();
  });
});
