import { ILoadRewardsRequestState, IUpdateRewardsRequestState } from 'src/models/actions/rewards';
import { Reward } from 'src/types/API';
import * as types from './types';

export function loadRewards(): ILoadRewardsRequestState {
  return {
    type: types.LOAD_REWARDS
  };
}

export function updateRewards(rewards: Reward[]): IUpdateRewardsRequestState {
  return {
    type: types.UPDATE_REWARDS,
    rewards
  };
}