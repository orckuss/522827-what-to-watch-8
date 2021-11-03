import { Reducer } from 'redux';
import { Actions } from 'src/types/actions';
import { UserState } from 'src/types/global-state';

const initialState: UserState = {
  authorizationStatus: false,
};

export const reducer: Reducer<UserState, Actions> = (state = initialState, action): UserState => {
  switch (action.type) {
    default:
      return state;
  }
};
