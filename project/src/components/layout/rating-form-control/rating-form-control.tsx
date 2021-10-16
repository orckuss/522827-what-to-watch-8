import { ChangeEventHandler } from 'react';
import StarRadioButton from '../../ui/star-radio-button/star-radio-button';

type Props = {
  count: number;
  onChange?: ChangeEventHandler<HTMLInputElement>;
};

function RatingFormControl({ count, onChange }: Props): JSX.Element {
  return (
    <div className="rating">
      <div className="rating__stars">
        {new Array(count).fill(null)
          .map((_, index, arr) => arr.length - index)
          .map((item) => (
            <StarRadioButton
              className="rating__input"
              key={item}
              id={`stat-${item}`}
              value={item}
              textLabel={`Rating ${item}`}
              onChange={onChange}
            />
          ))}
      </div>
    </div>
  );
}

export default RatingFormControl;
