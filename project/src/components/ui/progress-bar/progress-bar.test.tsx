import { render, screen } from '@testing-library/react';
import { datatype } from 'faker';
import ProgressBar from './progress-bar';

const MAX = 100;

describe('StarRadioButton component', () => {
  it('should render correctly', () => {
    const persent = datatype.number(MAX);

    render(<ProgressBar persent={persent} />);

    expect(screen.getByTestId(/progress/i)).toBeInTheDocument();
    expect(screen.getByTestId(/toggler/i)).toBeInTheDocument();
  });
});
