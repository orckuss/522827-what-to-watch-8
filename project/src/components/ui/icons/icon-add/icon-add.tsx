import React from 'react';

function IconAdd(): JSX.Element {
  return (
    <svg
      viewBox="0 0 19 20"
      width="19"
      height="20"
    >
      <use xlinkHref="#add"></use>
    </svg>
  );
}

export default React.memo(IconAdd);
