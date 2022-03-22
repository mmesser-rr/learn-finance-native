import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

export type RootStackParamList = {
  Welcome: undefined;
  SignUp: {step: string};
  Terms: {fromScreen: string};
  Disclosures: {fromScreen: string};
  SelectLevel: undefined;
  SelectSport: {type: string};
  SelectTeam: {type: string};
  BankAccountIntro: undefined;
  CaptureDOB: undefined;
  CaptureAddress: undefined;
  CaptureSSN: undefined;
  AccountCreateSuccess: undefined;
  AccountCreateFailure: undefined;
  ProfileIntro: undefined;
  SelectPlayerTag: undefined;
  VerifyEmailCode: undefined;
  HomeStack: undefined;
  TransferStack: undefined;
  LastStepWelcome: undefined;
  UserLoginStack: undefined;
  UserBankingStack: undefined;
};

type SignUpScreenRouteProp = RouteProp<RootStackParamList, 'SignUp'>;
type SelectSportScreenRouteProp = RouteProp<RootStackParamList, 'SelectSport'>;
type SelectTeamScreenRouteProp = RouteProp<RootStackParamList, 'SelectTeam'>;
type TermsRouteProp = RouteProp<RootStackParamList, 'Terms'>;
type DisclosuresRouteProp = RouteProp<RootStackParamList, 'Disclosures'>;

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
  route: TermsRouteProp;
};

export type DisclosuresProps = {
  navigation: TermsScreenNavigationProp;
  route: DisclosuresRouteProp;
};

// SelectSport
type SelectSportScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'SelectSport'
>;

export type SelectSportProps = {
  navigation: SelectSportScreenNavigationProp;
  route: SelectSportScreenRouteProp;
};

// SelectTeam
type SelectTeamScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'SelectTeam'
>;

export type SelectTeamProps = {
  navigation: SelectTeamScreenNavigationProp;
  route: SelectTeamScreenRouteProp;
};
