import IconFullScreen from '@components/ui/icons/icon-full-screen/icon-full-screen';
import IconPlay from '@components/ui/icons/icon-play/icon-play';
import ProgressBar from '@components/ui/progress-bar/progress-bar';
import { useFilmLoad } from '@hooks/useFilmLoad';
import { useHistory } from 'react-router';

function Player(): JSX.Element {
  const history = useHistory();

  const {
    posterImage,
    videoLink,
  } = useFilmLoad();

  return (
    <div className="player">
      <video
        src={videoLink}
        className="player__video"
        poster={posterImage}
      />

      <button
        type="button"
        className="player__exit"
        onClick={() => history.goBack()}
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
          >
            <IconPlay />
            <span>Play</span>
          </button>

          <div className="player__name">Transpotting</div>

          <button
            type="button"
            className="player__full-screen"
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
