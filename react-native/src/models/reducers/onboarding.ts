export interface IOnboardingState {
  firstName: string;
  lastName: string;
  mobilePhone: string;
  email: string;
  dateOfBirth?: string;
  level?: 'COLLEGE' | 'PROFESSIONAL';
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
}
