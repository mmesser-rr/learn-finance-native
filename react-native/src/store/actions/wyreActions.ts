import {ITypeOnlyAction} from 'src/models/actions/common';
import * as types from './types';

export function openRewardsAccount(): ITypeOnlyAction {
  return {
    type: types.OPEN_REWARDS_ACCOUNT,
  };
}
