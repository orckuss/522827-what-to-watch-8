type Props = {
  src?: string;
  alt?: string;
  className?: string;
}

function Poster({ src, alt, className = '' }: Props): JSX.Element {
  return (
    <div className={`film-card__poster ${className}`}>
      <img
        src={src}
        alt={`${alt} poster`}
        width="218"
        height="327"
      />
    </div>
  );
}

export default Poster;
