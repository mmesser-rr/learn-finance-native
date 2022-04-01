import {AthleteLevel} from 'src/types/API';

export interface IOnboardingState {
  id?: string;
  firstName: string;
  lastName: string;
  mobilePhone: string;
  password?: string;
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
