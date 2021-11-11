import React from 'react';

function IconPause(): JSX.Element {
  return (
    <svg
      viewBox="0 0 14 21"
      width="14"
      height="21"
    >
      <use xlinkHref="#pause"></use>
    </svg>
  );
}

export default React.memo(IconPause);
