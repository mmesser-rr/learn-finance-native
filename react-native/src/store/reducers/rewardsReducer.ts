/* Rewards Reducer
 * handles rewards data in the app
 */
import createReducer from 'src/lib/createReducer';
import * as types from 'src/store/actions/types';

import { IRewards } from 'src/models/reducers/rewards';
import { IUpdateRewardsRequestState } from 'src/models/actions/rewards';

const initialState: IRewards = {
  rewards: []
};

export const rewardsReducer = createReducer(initialState, {
  [types.UPDATE_REWARDS](state: IRewards, action: IUpdateRewardsRequestState) {
    return {
      ...state,
      rewards: action.rewards,
    };
  }
});
