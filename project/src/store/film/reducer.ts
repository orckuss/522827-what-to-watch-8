import { Reducer } from 'redux';
import { DEFALUT_ACTIVE_GENRE, FILM_CARDS_COUNT } from 'src/constants';
import { Actions, ActionType } from 'src/types/actions';
import { FilmState } from 'src/types/global-state';

const initialState: FilmState = {
  films: [],
  filmsLoaded: false,
  genre: DEFALUT_ACTIVE_GENRE,
  filmCardsCount: FILM_CARDS_COUNT,
};

export const reducer: Reducer<FilmState, Actions> = (state = initialState,action): FilmState => {
  switch (action.type) {
    case ActionType.ChangeGenre:
      return { ...state, genre: action.payload };

    case ActionType.ResetFilter:
      return { ...initialState };

    case ActionType.IncreaseFilmCardsCount: {
      const newCardsCount = state.filmCardsCount + FILM_CARDS_COUNT;
      return { ...state, filmCardsCount: newCardsCount };
    }

    case ActionType.ResetFilmCardsCount:
      return { ...state, filmCardsCount: FILM_CARDS_COUNT };

    case ActionType.SetFilms:
      return { ...state, films: action.payload };

    case ActionType.SetFilmsLoaded:
      return { ...state, filmsLoaded: action.payload };

    default:
      return state;
  }
};
