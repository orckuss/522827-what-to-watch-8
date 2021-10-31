import { Reducer } from 'redux';
import { DEFALUT_ACTIVE_GENRE, FILM_CARDS_COUNT } from '../../constants';
import { Actions, ActionType } from '../../types/actions';
import { GlobalState } from '../../types/global-state';

export const initialState: GlobalState = {
  films: [],
  genre: DEFALUT_ACTIVE_GENRE,
  filmCardsCount: FILM_CARDS_COUNT,
};

export const reducer: Reducer<GlobalState, Actions> = (
  state: GlobalState = initialState,
  action: Actions,
): GlobalState => {
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
      return { ...initialState, films: action.payload };

    default:
      return state;
  }
};
