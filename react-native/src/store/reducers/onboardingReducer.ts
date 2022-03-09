/* Onboarding Reducer
 * handles state during onboarding
 */
import createReducer from 'src/lib/createReducer';
import * as types from 'src/store/actions/types';

import {IOnboardingState} from 'src/models/reducers/onboarding';
import {IOnboardingUpdate} from 'src/models/actions/onboarding';

const initialState: IOnboardingState = {
  firstName: '',
  lastName: '',
  mobilePhone: '',
  email: '',
  ssn: '',
  isOnboardingComplete: false,
};

export const onboardingReducer = createReducer(initialState, {
  [types.ONBOARDING_UPDATE](
    state: IOnboardingState,
    action: IOnboardingUpdate,
  ) {
    return {
      ...state,
      ...action.update,
    };
  },
});
