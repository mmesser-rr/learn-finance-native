import createReducer from 'src/lib/createReducer';

import {IThemeState} from 'src/models/reducers/theme';
import { UPDATE_HOME_STEP } from '../actions/types';
import { IUpdateHomeStepAction } from 'src/models/actions/banking';
import { IBankingState } from 'src/models/reducers/banking';
import { PODsSteps } from 'src/utils/constants';

const initialState: IBankingState = {
  step: PODsSteps[0],
};

export const bankingReducer = createReducer(initialState, {
  [UPDATE_HOME_STEP](state: IThemeState, action: IUpdateHomeStepAction) {
    return {...state, step: action.step};
  },
});
