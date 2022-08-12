import { ILoadLearnStatusesRequestState, IUpdateLearnStatusesRequestState } from 'src/models/actions/learnStatuses';
import { LearnStatus } from 'src/types/API';
import * as types from './types';

export function loadLearnStatuses(): ILoadLearnStatusesRequestState {
  return {
    type: types.LOAD_LEARN_STATUSES
  };
}

export function updateLearnStatuses(learnStatuses: LearnStatus[]): IUpdateLearnStatusesRequestState {
  return {
    type: types.UPDATE_LEARN_STATUSES,
    learnStatuses
  };
}