import { ChangeEventHandler } from 'react';

type Props = {
  value: number | string;
  id: string;
  textLabel?: string;
  className?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
};

function StarRadioButton({
  id,
  value,
  className,
  textLabel,
  onChange,
}: Props): JSX.Element {
  return (
    <>
      <input
        className={className}
        id={id}
        type="radio"
        name="rating"
        value={value}
        onChange={onChange}
      />
      <label
        className="rating__label"
        htmlFor={id}
      >
        {textLabel}
      </label>
    </>
  );
}

export default StarRadioButton;
