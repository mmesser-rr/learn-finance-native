import {ITypeOnlyAction} from 'src/models/actions/common';
import {
  ICreateAthlete,
  ICreateAthleteAndAccount,
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

export function createAthlete(): ICreateAthlete {
  return {
    type: types.CREATE_ATHLETE
  };
}

export function clearOnboardingState(): ITypeOnlyAction {
  return {
    type: types.CLEAR_ONBOARDING_STATE,
  };
}
