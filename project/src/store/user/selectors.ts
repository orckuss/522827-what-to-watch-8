import { Selector } from 'reselect';
import { AuthStatus } from 'src/constants';
import { GlobalState } from 'src/types/global-state';
import { UserInfo } from 'src/types/user';

export const getAuthStatus: Selector<GlobalState, AuthStatus> = (state) => state.user.authorizationStatus;

export const getUserInfo: Selector<GlobalState, UserInfo> = (state) => state.user.info;
