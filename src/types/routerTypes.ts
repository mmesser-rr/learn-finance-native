import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export type RootStackParamList = {
  Welcome: undefined;
  SignUp: { step: string };
  Terms: undefined;
  SelectLevel: undefined;
  SelectSport: undefined;
  SelectTeam: undefined;
  BankAccountIntro: undefined;
  CaptureDOB: undefined;
  CaptureAddress: undefined;
};

// sign up
type SignUpScreenRouteProp = RouteProp<RootStackParamList, 'SignUp'>;

type SignUpScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'SignUp'
>;

export type SignUpProps = {
  route: SignUpScreenRouteProp;
  navigation: SignUpScreenNavigationProp;
};

// terms
type TermsScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Terms'
>;

export type TermsProps = {
  navigation: TermsScreenNavigationProp;
};

// SelectSport
type SelectSportScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'SelectSport'
>;

export type SelectSportProps = {
  navigation: SelectSportScreenNavigationProp;
};
