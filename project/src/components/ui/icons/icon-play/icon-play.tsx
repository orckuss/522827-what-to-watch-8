import React from 'react';

function IconPlay(): JSX.Element {
  return (
    <svg
      viewBox="0 0 19 19"
      width="19"
      height="19"
    >
      <use xlinkHref="#play-s"></use>
    </svg>
  );
}

export default React.memo(IconPlay);
