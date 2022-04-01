import {IOnboardingState} from '../reducers/onboarding';

export interface IOnboardingUpdate {
  type: String;
  update: Partial<IOnboardingState>;
}

export interface ICreateAthleteAndAccount {
  type: String;
  ssn: string;
}

export interface IOnboardingError {
  type: String;
  error: string;
}
