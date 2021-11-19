import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { datatype } from 'faker';
import StarRadioButton from './star-radio-button';

describe('StarRadioButton component', () => {
  it('should render correctly', () => {
    const id = datatype.string();
    const value = datatype.number();
    const textLabel = datatype.string();
    const className = 'test';
    const onChange = jest.fn();

    render(
      <StarRadioButton
        id={id}
        className={className}
        value={value}
        textLabel={textLabel}
        onChange={onChange}
      />);

    expect(screen.getByLabelText(textLabel)).toBeInTheDocument();
    expect(screen.getByDisplayValue(value)).toBeInTheDocument();
    expect(screen.getByRole('radio')).toBeInTheDocument();
    expect(screen.getByRole('radio')).toHaveClass(className);

    userEvent.click(screen.getByLabelText(textLabel));

    expect(onChange).toBeCalledTimes(1);
  });
});
