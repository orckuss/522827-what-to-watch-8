import { render, screen } from '@testing-library/react';
import IconFullScreen from './icon-full-screen';

describe('StarRadioButton component', () => {
  it('should render correctly', () => {
    render(<IconFullScreen />);

    expect(screen.getByTestId(/full-screen/i)).toBeInTheDocument();
  });
});
