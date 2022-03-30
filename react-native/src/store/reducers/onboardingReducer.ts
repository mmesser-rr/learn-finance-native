/* Onboarding Reducer
 * handles state during onboarding
 */
import createReducer from 'src/lib/createReducer';
import * as types from 'src/store/actions/types';

import {IOnboardingState} from 'src/models/reducers/onboarding';
import {
  IOnboardingError,
  IOnboardingUpdate,
} from 'src/models/actions/onboarding';

const initialState: IOnboardingState = {
  firstName: '',
  lastName: '',
  mobilePhone: '',
  email: '',
  ssn: '',
  isOnboardingComplete: false,
  error: undefined,
  step: 1,
  isSignInLink: true
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
  [types.ACCOUNT_CREATION_FAILED](
    state: IOnboardingState,
    action: IOnboardingError,
  ) {
    return {
      ...state,
      error: action.error,
    };
  },
  [types.ONBOARDING_CLEAR_ERROR](state: IOnboardingState) {
    return {
      ...state,
      error: undefined,
    };
  },
});
