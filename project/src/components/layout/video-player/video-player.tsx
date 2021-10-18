import { useRef } from 'react';
import './video-player.css';

type Props = {
  src: string;
  poster?: string;
  width?: number | string;
  height?: number | string;
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
      preload="metadata"
      poster={poster}
      width={width}
      height={height}
    />
  );
}

export default VideoPlayer;
