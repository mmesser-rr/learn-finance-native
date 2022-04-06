/* Login Reducer
 * handles login states in the app
 */
import createReducer from 'src/lib/createReducer';
import * as types from 'src/store/actions/types';

import {ILoginState} from 'src/models/reducers/login';
import {
  ILoginRequestState,
  ILoginResponseState,
} from 'src/models/actions/login';
const initialState: ILoginState = {
  isLoggedIn: false,
  id: 0,
  username: '',
  password: '',
};

export const loginReducer = createReducer(initialState, {
  [types.LOGIN_REQUEST](state: ILoginState, action: ILoginRequestState) {
    return {
      ...state,
      username: action.username,
      password: action.password,
    };
  },
  [types.LOGIN_LOADING_ENDED](state: ILoginState) {
    return {...state};
  },
  [types.LOGIN_RESPONSE](state: ILoginState, action: ILoginResponseState) {
    return {
      ...state,
      id: action.response.id,
      isLoggedIn: true,
    };
  },
  [types.LOGIN_FAILED](state: ILoginState) {
    return {
      ...state,
      isLoggedIn: false,
    };
  },
  // [types.LOG_OUT](state: ILoginState) {
  //   return {
  //     ...state,
  //     isLoggedIn: false,
  //   };
  // },
});
