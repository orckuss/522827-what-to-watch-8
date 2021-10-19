import { FILMS_MOCK } from '../mocks/films';
import { GlobalState } from '../types/global-state';

export const initialState: GlobalState = {
  films: FILMS_MOCK,
  genre: {
    active: true,
    name: 'All genres',
  },
};
