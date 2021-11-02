import Header from '../header/header';

type Props = {
  backgroundImage?: string;
  alt?: string;
}

function FilmCardHeader({ backgroundImage, alt }: Props): JSX.Element {
  return (
    <>
      <div className="film-card__bg">
        <img
          src={backgroundImage}
          alt={alt}
        />
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <Header className="film-card__head" />
    </>
  );
}

export default FilmCardHeader;
