/* LearnStatuses Reducer
 * handles learnStatuses states in the app
 */
import createReducer from 'src/lib/createReducer';
import * as types from 'src/store/actions/types';

import { ILearnStatuses } from 'src/models/reducers/learnStatuses';
import { IUpdateLearnStatusesRequestState } from 'src/models/actions/learnStatuses';

const initialState: ILearnStatuses = {
  learnStatuses: []
};

export const learnsReducer = createReducer(initialState, {
  [types.UPDATE_LEARN_STATUSES](state: ILearnStatuses, action: IUpdateLearnStatusesRequestState) {
    return {
      ...state,
      learnStatuses: action.learnStatuses,
    };
  }
});
