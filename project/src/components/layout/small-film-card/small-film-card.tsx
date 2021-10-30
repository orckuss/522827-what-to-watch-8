import { useState } from 'react';
import { Link } from 'react-router-dom';
import { generatePath } from 'react-router';
import { AppRoutes } from 'src/constants';
import { Film } from 'src/types/film';
import VideoPlayer from '../video-player/video-player';

type Props = {
  film: Film;
}

function SmallFilmCard({ film }: Props): JSX.Element {
  const {
    id,
    name,
    previewImage,
    previewVideoLink,
  } = film;

  const [isPlayed, setIsPlayed] = useState<boolean>(false);

  return (
    <article
      className="small-film-card catalog__films-card"
      onMouseEnter={() => setIsPlayed(true)}
      onMouseLeave={() => setIsPlayed(false)}
    >

      <Link
        className="small-film-card__link"
        to={generatePath(AppRoutes.Films, { id })}
      >
        <div className="small-film-card__image">
          <VideoPlayer
            src={previewVideoLink}
            isPlayed={isPlayed}
            poster={previewImage}
            muted
            width={280}
            height={175}
          />
        </div>

        <h3 className="small-film-card__title">
          {name}
        </h3>
      </Link>
    </article>
  );
}

export default SmallFilmCard;
