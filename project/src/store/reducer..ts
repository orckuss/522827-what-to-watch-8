import { Reducer } from 'redux';
import { FILMS_MOCK } from '../mocks/films';
import { Actions } from '../types/actions';
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
    default:
      return state;
  }
};
