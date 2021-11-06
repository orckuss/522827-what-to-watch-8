import { Middleware } from 'redux';
import { Actions, ActionType } from 'src/types/actions';
import { GlobalState } from 'src/types/global-state';
import { browserHistory } from 'src/utils/browser-history';

export const redirect: Middleware<unknown, GlobalState> = (_store) => (next) => (action: Actions) => {
  if (action.type === ActionType.Redirect) {
    browserHistory.push(action.payload);
  }

  next(action);
};
