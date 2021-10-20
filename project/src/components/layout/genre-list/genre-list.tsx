import { GENRES } from '../../../mocks/genres';
import { connect, ConnectedProps } from 'react-redux';
import { GlobalState } from '../../../types/global-state';
import { bindActionCreators, Dispatch } from 'redux';
import { Actions } from '../../../types/actions';
import { changeGenre, filterFilms } from '../../../store/actions';

const mapStateToProps = ({ genre }: GlobalState) => ({
  activeGenre: genre,
});

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => bindActionCreators({
  onChangeGenre: changeGenre,
  onFilterFilms: filterFilms,
}, dispatch);

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>

function GenreList({
  activeGenre,
  onChangeGenre,
  onFilterFilms,
}: PropsFromRedux): JSX.Element {

  return (
    <ul className="catalog__genres-list">
      {GENRES.map((genre) => (
        <li
          key={genre}
          className={`catalog__genres-item ${activeGenre === genre && 'catalog__genres-item--active'}`}
        >
          <a
            href="/"
            className="catalog__genres-link"
            onClick={(evt) => {
              evt.preventDefault();
              onChangeGenre(genre);
              onFilterFilms(genre);
            }}
          >
            {genre}
          </a>
        </li>
      ))}
    </ul>
  );
}

export { GenreList };
export default connector(GenreList);
