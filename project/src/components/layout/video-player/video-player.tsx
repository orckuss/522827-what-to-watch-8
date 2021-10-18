import { useRef } from 'react';

type Props = {
  src: string;
  poster: string;
  width: number;
  height: number;
  muted?: boolean;
};

function VideoPlayer({
  src,
  poster,
  muted,
  width,
  height,
}: Props): JSX.Element {
  const videopRef = useRef<HTMLVideoElement>(null);

  return (
    <video
      ref={videopRef}
      src={src}
      muted={muted}
      preload="auto"
      poster={poster}
      width={width}
      height={height}
    />
  );
}

export default VideoPlayer;
