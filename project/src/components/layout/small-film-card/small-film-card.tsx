import { Link } from 'react-router-dom';
import { Film } from '../../../types/film';
import { generatePath } from 'react-router-dom';
import { AppRoutes } from '../../app/routes';
import VideoPlayer from '../video-player/video-player';
import { useState } from 'react';

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
        <Link
          className="small-film-card__link"
          to={generatePath(AppRoutes.Films, { id })}
        >
          {name}
        </Link>
      </h3>
    </article>
  );
}

export default SmallFilmCard;
