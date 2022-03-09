/* Onboarding Reducer
 * handles state
 */
import createReducer from 'src/lib/createReducer';
import * as types from 'src/store/actions/types';

import {IUserState} from 'src/models/reducers/user';
import {IUserUpdate} from 'src/models/actions/user';

const initialState: IUserState = {
  isLoggedIn: false,
  user: undefined,
};

export const userReducer = createReducer(initialState, {
  [types.USER_UPDATE](state: IUserState, action: IUserUpdate) {
    const user = {...state.user, ...action.update};
    return {...state, user};
  },
});
