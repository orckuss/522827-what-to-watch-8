import { useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router';
import IconFullScreen from '@components/ui/icons/icon-full-screen/icon-full-screen';
import IconPause from '@components/ui/icons/icon-pause/icon-pause';
import IconPlay from '@components/ui/icons/icon-play/icon-play';
import ProgressBar from '@components/ui/progress-bar/progress-bar';
import { useFilmLoad } from '@hooks/useFilmLoad';
import { MILISECOND_MEASURE, PERCENT_MEASURE, PLAYER_ZERO_TIME } from 'src/constants';

const timeFormater = new Intl.DateTimeFormat('ru', { timeZone: 'UTC', timeStyle: 'medium' });

const getForamatedRemainingTime = (duration: number, currentTime: number): string => {
  const formatedTime = timeFormater.format((duration - currentTime) * MILISECOND_MEASURE);

  let result = formatedTime.split(':');

  if (Number(result[0]) === PLAYER_ZERO_TIME) {
    result = result.slice(1);
  }

  return `-${result.join(':')}`;
};

const getTImePercent = (duration: number, currentTime: number): number =>
  duration ? Math.round(currentTime / duration * PERCENT_MEASURE) : PLAYER_ZERO_TIME;

function Player(): JSX.Element {
  const history = useHistory();
  const ref = useRef<HTMLVideoElement | null>(null);
  const [isPlayed, setPlayed] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(PLAYER_ZERO_TIME);
  const [duration, setDuration] = useState<number>(PLAYER_ZERO_TIME);

  const {
    previewImage,
    videoLink,
  } = useFilmLoad();

  useEffect(() => {
    isPlayed
      ? ref.current?.play()
      : ref.current?.pause();
  }, [isPlayed]);

  return (
    <div className="player">
      <video
        ref={ref}
        src={videoLink}
        className="player__video"
        preload="metadata"
        poster={previewImage}
        onTimeUpdate={(evt) => setCurrentTime(Math.round(evt.currentTarget.currentTime))}
        onDurationChange={(evt) => setDuration(Math.round(evt.currentTarget.duration))}
        onPauseCapture={(evt) => setPlayed(!evt.currentTarget.paused)}
        onPlayCapture={(evt) => setPlayed(!evt.currentTarget.paused)}
      />

      <button
        type="button"
        className="player__exit"
        onClick={() => { history.goBack(); ref.current?.load(); }}
      >
        Exit
      </button>

      <div className="player__controls">
        <div className="player__controls-row">
          <ProgressBar persent={getTImePercent(duration, currentTime)} />

          <div className="player__time-value">{getForamatedRemainingTime(duration, currentTime)}</div>
        </div>

        <div className="player__controls-row">
          <button
            type="button"
            className="player__play"
            onClick={() => setPlayed((state) => !state)}
          >
            {isPlayed ? <IconPause /> : <IconPlay />}
            <span>{isPlayed ? 'Pause' : 'Play'}</span>
          </button>

          <div className="player__name">Transpotting</div>

          <button
            type="button"
            className="player__full-screen"
            onClick={() => ref.current?.requestFullscreen()}
          >
            <IconFullScreen />
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Player;
