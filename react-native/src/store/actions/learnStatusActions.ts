import {
  IUpdateLearnStatusRequestState
} from 'src/models/actions/learnStatus';
import * as types from './types';

export function updateLearnStatus(learnStatusId: string, athleteId: string, learnItemId: string, passedDepositIndex: number, wealthBalance: number): IUpdateLearnStatusRequestState {
  return {
    type: types.UPDATE_LEARN_STATUS,
    learnStatusId,
    athleteId,
    learnItemId,
    passedDepositIndex,
    wealthBalance
  };
}