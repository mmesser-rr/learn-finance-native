/* Learns Reducer
 * handles learns states in the app
 */
import createReducer from 'src/lib/createReducer';
import * as types from 'src/store/actions/types';

import { ILearns } from 'src/models/reducers/learns';
import { IUpdateLearnsRequestState } from 'src/models/actions/learns';

const initialState: ILearns = {
  learns: []
};

export const learnsReducer = createReducer(initialState, {
  [types.UPDATE_LEARNS](state: ILearns, action: IUpdateLearnsRequestState) {
    return {
      ...state,
      learns: action.learns,
    };
  }
});
