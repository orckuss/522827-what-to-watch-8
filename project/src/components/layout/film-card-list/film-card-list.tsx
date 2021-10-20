import { connect, ConnectedProps } from 'react-redux';
import { GlobalState } from '../../../types/global-state';
import SmallFilmCard from '../small-film-card/small-film-card';

const mapStateToProps = ({ films }: GlobalState) => ({
  films,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>

function FilmCardList({ films }: PropsFromRedux): JSX.Element {
  return (
    <div className="catalog__films-list">
      {films.map((film) => (
        <SmallFilmCard
          key={film.id}
          film={film}
        />
      ))}
    </div>
  );
}

export { FilmCardList };
export default connector(FilmCardList);
