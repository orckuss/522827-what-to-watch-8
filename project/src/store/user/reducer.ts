import { Reducer } from 'redux';
import { Actions, ActionType } from 'src/types/actions';
import { UserState } from 'src/types/global-state';

const initialState: UserState = {
  authorizationStatus: false,
  info: null,
};

export const reducer: Reducer<UserState, Actions> = (state = initialState, action): UserState => {
  switch (action.type) {
    case ActionType.SetAuthStatus:
      return { ...state, authorizationStatus: action.payload };

    case ActionType.SetUserInfo:
      return { ...state, info: action.payload };

    default:
      return state;
  }
};
