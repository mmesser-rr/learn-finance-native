/* Onboarding Reducer
 * handles state
 */
import createReducer from 'src/lib/createReducer';
import * as types from 'src/store/actions/types';

import {IUserState} from 'src/models/reducers/user';
import {
  ILoginFailed,
  ILoginSuccess,
  IUserUpdate,
} from 'src/models/actions/user';

const initialState: IUserState = {
  isLoggedIn: false,
  user: undefined,
};

export const userReducer = createReducer(initialState, {
  [types.LOGIN_SUCCESS](state: IUserState, action: ILoginSuccess) {
    return {
      ...state,
      isLoggedIn: true,
      userId: action.id,
      token: action.token,
    };
  },
  [types.LOGIN_FAILED](state: IUserState, action: ILoginFailed) {
    return {
      ...state,
      isLoggedIn: false,
      loginError: action.errorMessage,
      userNotFound: action.userNotFound,
    } as IUserState;
  },
  [types.USER_UPDATE](state: IUserState, action: IUserUpdate) {
    const user = {...state.user, ...action.update};
    return {...state, user};
  },
});
