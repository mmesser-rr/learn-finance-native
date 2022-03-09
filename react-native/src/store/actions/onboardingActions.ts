import {
  ICreateAthleteAndAccount,
  IOnboardingClearError,
  IOnboardingError,
  IOnboardingUpdate,
} from 'src/models/actions/onboarding';
import {IOnboardingState} from 'src/models/reducers/onboarding';
import * as types from './types';

export function updateOnboarding(
  update: Partial<IOnboardingState>,
): IOnboardingUpdate {
  return {
    type: types.ONBOARDING_UPDATE,
    update,
  };
}

export function createAthleteAndAccount(ssn: string): ICreateAthleteAndAccount {
  return {
    type: types.CREATE_ATHLETE_AND_ACCOUNT,
    ssn,
  };
}

export function accountCreationFailed(error: string): IOnboardingError {
  return {
    type: types.ACCOUNT_CREATION_FAILED,
    error,
  };
}

export function clearError(): IOnboardingClearError {
  return {
    type: types.ONBOARDING_CLEAR_ERROR,
  };
}
