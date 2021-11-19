import { render, screen } from '@testing-library/react';
import RatingFormControl from './rating-form-control';

function MockStarRadioButton({ value }: { value: number }): JSX.Element {
  return <p>StarRadioButton {value}</p>;
}

jest.mock('@components/ui/star-radio-button/star-radio-button', () => MockStarRadioButton);

describe('RatingFormControl components tests', () => {
  it('should be render correctly', () => {
    const count = 5;

    render(<RatingFormControl count={count} />);

    expect(screen.getAllByText(/StarRadioButton/i).length).toBe(count);

    screen.getAllByText(/StarRadioButton/i).forEach((item, index) => {
      expect(item).toHaveTextContent(`${count - index}`);
    });
  });
});
