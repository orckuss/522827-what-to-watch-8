import { Reducer } from 'redux';
import { DEFAULT_FILM_DATA } from 'src/constants';
import { Actions, ActionType } from 'src/types/actions';
import { ActiveFilmState } from 'src/types/global-state';

const initialState: ActiveFilmState = {
  film: DEFAULT_FILM_DATA,
};

export const reducer: Reducer<ActiveFilmState, Actions> = (state = initialState, action): ActiveFilmState => {
  switch (action.type) {
    case ActionType.SetFilmById:
      return { ...state, film: action.payload };

    default:
      return state;
  }
};
