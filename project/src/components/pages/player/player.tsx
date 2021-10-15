import { useHistory } from 'react-router';
import { Movie } from '../../../types/film';
import FullScreenButton from '../../ui/full-screen-button/full-screen-button';
import PlayButton from '../../ui/play-button/play-button';
import ProgressBar from '../../ui/progress-bar/progress-bar';

type Props = {
  film: Movie;
};

function Player({ film }: Props): JSX.Element {
  const history = useHistory();

  const {
    posterImage,
    videoLink,
  } = film;

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
          <PlayButton />

          <div className="player__name">Transpotting</div>

          <FullScreenButton />
        </div>
      </div>
    </div>
  );
}

export default Player;
