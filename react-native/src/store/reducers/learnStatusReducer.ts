/* Learns Reducer
 * handles learns states in the app
 */
import createReducer from 'src/lib/createReducer';
import * as types from 'src/store/actions/types';

import {
  IUpdateLearnStatusRequestState
} from 'src/models/actions/learnStatus';
import { ILearnStatusState } from 'src/models/reducers/learnStatus';

const initialState: ILearnStatusState = {
  learnStatusId: "",
  athleteId: "",
  learnItemId: "",
  passedDepositIndex: 0
};

export const learnStatusReducer = createReducer(initialState, {
  [types.UPDATE_LEARN_STATUS](state: ILearnStatusState, action: IUpdateLearnStatusRequestState) {
    return {
      ...state,
      learnStatusId: action.learnStatusId,
      athleteId: action.athleteId,
      learnItemId: action.learnItemId,
      passedDepositIndex: action.passedDepositIndex
    };
  }
});
