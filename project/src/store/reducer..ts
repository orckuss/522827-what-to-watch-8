import { Reducer } from 'redux';
import { filterFilmsByGenre } from '../business-modules/filter';
import { FILMS_MOCK } from '../mocks/films';
import { Actions, ActionType } from '../types/actions';
import { Genre } from '../types/genre';
import { GlobalState } from '../types/global-state';

export const initialState: GlobalState = {
  films: FILMS_MOCK,
  genre: {
    active: true,
    name: 'All genres',
  } as Genre,
};

export const reducer: Reducer<GlobalState, Actions> = (
  state: GlobalState = initialState,
  action: Actions,
): GlobalState => {
  switch (action.type) {
    case ActionType.ChangeGenre:
      return { ...state, genre: action.payload };

    case ActionType.FilterFilms: {
      const films = filterFilmsByGenre(initialState.films, action.payload);
      return { ...state, films };
    }

    case ActionType.ResetFilter:
      return { ...state, films: initialState.films };

    default:
      return state;
  }
};
