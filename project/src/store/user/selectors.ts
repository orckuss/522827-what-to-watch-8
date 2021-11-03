import { Selector } from 'reselect';
import { GlobalState } from 'src/types/global-state';
import { UserInfo } from 'src/types/user';

export const getAuthStatus: Selector<GlobalState, boolean> = (state) => state.user.authorizationStatus;

export const getUserInfo: Selector<GlobalState, UserInfo> = (state) => state.user.info;
