import {AthleteLevel} from 'src/types/API';

export interface IOnboardingState {
  firstName: string;
  lastName: string;
  mobilePhone: string;
  email: string;
  dateOfBirth?: string;
  level?: AthleteLevel;
  sport?: {
    airTableId: string;
    name: string;
  };
  team?: {
    airTableId: string;
    name: string;
  };
  address?: {
    city: string;
    state: string;
    streetAddress: string;
    zipCode: string;
    apt: string;
  };
  ssn: string;
  isOnboardingComplete: boolean;
  error?: string;
  step: number;
  isSignInLink: boolean;
}
