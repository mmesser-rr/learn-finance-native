import {IOnboardingState} from 'src/models/reducers/onboarding';
import * as types from './types';

export function updateOnboarding(update: Partial<IOnboardingState>) {
  return {
    type: types.ONBOARDING_UPDATE,
    update,
  };
}

export function createAthleteAndAccount(ssn: string) {
  return {
    type: types.CREATE_ATHLETE_AND_ACCOUNT,
    ssn,
  };
}
