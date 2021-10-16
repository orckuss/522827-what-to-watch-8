import StarRadioButton from '../../ui/star-radio-button/star-radio-button';

const START_COUNT = 10;

function RatingFormControl(): JSX.Element {
  return (
    <div className="rating">
      <div className="rating__stars">
        {new Array(START_COUNT).fill(null)
          .map((_, index, arr) => arr.length - index)
          .map((item) => (
            <StarRadioButton
              className="rating__input"
              key={item}
              id={`stat-${item}`}
              value={item}
              textLabel={`Rating ${item}`}
            />
          ))}
      </div>
    </div>
  );
}

export default RatingFormControl;
