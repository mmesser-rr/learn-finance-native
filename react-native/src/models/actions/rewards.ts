import { Reward } from "src/types/API";

export interface ILoadRewardsRequestState {
  type: string;
}

export interface IUpdateRewardsRequestState {
  type: string;
  rewards: Reward[];
}