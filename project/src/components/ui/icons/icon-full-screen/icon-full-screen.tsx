import React from 'react';

function IconFullScreen(): JSX.Element {
  return (
    <svg
      viewBox="0 0 27 27"
      width="27"
      height="27"
      data-testid="full-screen"
    >
      <use xlinkHref="#full-screen"></use>
    </svg>
  );
}

export default React.memo(IconFullScreen);
