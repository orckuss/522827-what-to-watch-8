import { useEffect, useRef } from 'react';
import './video-player.css';

type Props = {
  src: string;
  isPlayed: boolean;
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
  isPlayed,
}: Props): JSX.Element {
  const videopRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const timeOutId = isPlayed && setTimeout(() => {
      videopRef.current?.play();
    }, 1000);

    !isPlayed && videopRef.current?.load();

    return () => {
      timeOutId && clearTimeout(timeOutId);
    };
  }, [isPlayed]);

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
