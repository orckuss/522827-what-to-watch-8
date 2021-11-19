import { render, screen } from '@testing-library/react';
import IconPlay from './icon-play';

describe('StarRadioButton component', () => {
  it('should render correctly', () => {
    render(<IconPlay />);

    expect(screen.getByTestId(/play/i)).toBeInTheDocument();
  });
});
