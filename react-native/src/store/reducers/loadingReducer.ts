/**
 * Loading reducer made separate for easy blacklisting
 * Avoid data persist
 */
import createReducer from 'src/lib/createReducer';
import * as types from 'src/store/actions/types';
import {ILoading} from 'src/models/reducers/loading';

const initialState: ILoading = {
  isLoading: false,
  isLoginLoading: false,
};

export const loadingReducer = createReducer(initialState, {
  [types.ENABLE_LOADER](state: ILoading) {
    return {...state, isLoading: true};
  },
  [types.DISABLE_LOADER](state: ILoading) {
    return {...state, isLoading: false};
  },
  [types.LOGIN_ENABLE_LOADER](state: ILoading) {
    return {...state, isLoginLoading: true};
  },
  [types.LOGIN_DISABLE_LOADER](state: ILoading) {
    return {...state, isLoginLoading: false};
  },
});
