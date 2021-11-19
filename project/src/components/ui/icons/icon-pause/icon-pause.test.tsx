import { render, screen } from '@testing-library/react';
import IconPause from './icon-pause';

describe('StarRadioButton component', () => {
  it('should render correctly', () => {
    render(<IconPause />);

    expect(screen.getByTestId(/pause/i)).toBeInTheDocument();
  });
});
