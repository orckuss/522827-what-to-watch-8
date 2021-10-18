import { Link } from 'react-router-dom';
import { Movie } from '../../../types/film';
import { generatePath } from 'react-router-dom';
import { AppRoutes } from '../../app/routes';
import VideoPlayer from '../video-player/video-player';

type Props = {
  movie: Movie;
}

function SmallFilmCard({ movie }: Props): JSX.Element {
  const {
    id,
    name,
    previewImage,
    previewVideoLink,
  } = movie;

  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        {/* <img
          src={previewImage}
          alt={name}
          width="280"
          height="175"
        /> */}
        <VideoPlayer
          src={previewVideoLink}
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
