import { ILoadLearnsRequestState, IUpdateLearnsRequestState } from 'src/models/actions/learns';
import { Learn } from 'src/types/API';
import * as types from './types';

export function loadLearns(): ILoadLearnsRequestState {
  return {
    type: types.LOAD_LEARNS
  };
}

export function updateLearns(learns: Learn[]): IUpdateLearnsRequestState {
  return {
    type: types.UPDATE_LEARNS,
    learns
  };
}
