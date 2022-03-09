import {IOnboardingState} from '../reducers/onboarding';

export interface IOnboardingUpdate {
  type: String;
  update: Partial<IOnboardingState>;
}
