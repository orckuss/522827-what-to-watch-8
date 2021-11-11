/* eslint-disable no-console */
import Spinner from '@components/layout/spinner/spinner';
import IconFullScreen from '@components/ui/icons/icon-full-screen/icon-full-screen';
import IconPause from '@components/ui/icons/icon-pause/icon-pause';
import IconPlay from '@components/ui/icons/icon-play/icon-play';
import ProgressBar from '@components/ui/progress-bar/progress-bar';
import { useFilmLoad } from '@hooks/useFilmLoad';
import { getRequestStatus } from '@store/active-film/selectors';
import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';

function Player(): JSX.Element {
  const history = useHistory();
  const isLoading = useSelector(getRequestStatus);
  const [isPlayed, setPlayed] = useState<boolean>(false);
  const ref = useRef<HTMLVideoElement | null>(null);

  const {
    previewImage,
    videoLink,
  } = useFilmLoad();

  useEffect(() => {
    isPlayed
      ? ref.current?.play()
      : ref.current?.pause();
  }, [isPlayed]);

  return isLoading ? <Spinner /> : (
    <div className="player">
      <video
        ref={ref}
        src={videoLink}
        className="player__video"
        poster={previewImage}
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
          <ProgressBar />

          <div className="player__time-value">1:30:29</div>
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
