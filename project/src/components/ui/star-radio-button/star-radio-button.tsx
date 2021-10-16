type Props = {
  value: number | string;
  id: string;
  textLabel?: string;
  className?: string;
};

function StarRadioButton({
  id,
  value,
  className,
  textLabel,
}: Props): JSX.Element {
  return (
    <>
      <input
        className={className}
        id={id}
        type="radio"
        name="rating"
        value={value}
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
