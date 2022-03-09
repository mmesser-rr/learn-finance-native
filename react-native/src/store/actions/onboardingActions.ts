import {IOnboardingState} from 'src/models/reducers/onboarding';
import {ONBOARDING_UPDATE} from './types';

export function updateOnboarding(update: Partial<IOnboardingState>) {
  return {
    type: ONBOARDING_UPDATE,
    update,
  };
}
