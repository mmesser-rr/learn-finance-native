import { ILoadRewardsRequestState, IUpdateRewardRequestState, IUpdateRewardsRequestState } from 'src/models/actions/rewards';
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

export function updateReward({id, redeemed}: IUpdateRewardRequestState) {
  return {
    type: types.UPDATE_REWARD,
    id,
    redeemed
  }
}