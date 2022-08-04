import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

export type RootStackParamList = {
  Welcome: undefined;
  SignUp: {step: string};
  Privacy: {fromScreen: string};
  Agreement: {fromScreen: string};
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
  WyreFullScreenNotification: undefined;
  UserLoginStack: undefined;
  UserBankingStack: undefined;
  UniversalError: undefined;
  WyreStack: undefined;
  SelectPlayer: undefined;
  OpportunitiesStack: undefined;
};

type SignUpScreenNavigationProp = StackNavigationProp<RootStackParamList, 'SignUp'>;
type SignUpScreenRouteProp = RouteProp<RootStackParamList, 'SignUp'>;
export type SignUpProps = {
  route: SignUpScreenRouteProp;
  navigation: SignUpScreenNavigationProp;
};

// Privacy
type PrivacyRouteProp = RouteProp<RootStackParamList, 'Privacy'>;
type PrivacyScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Privacy'>;
export type PrivacyProps = {
  navigation: PrivacyScreenNavigationProp;
  route: PrivacyRouteProp;
};

type AgreementRouteProp = RouteProp<RootStackParamList, 'Agreement'>;
type AgreementScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Agreement'>;
export type AgreementProps = {
  navigation: AgreementScreenNavigationProp;
  route: AgreementRouteProp;
};

type DisclosuresRouteProp = RouteProp<RootStackParamList, 'Disclosures'>;
export type DisclosuresProps = {
  navigation: PrivacyScreenNavigationProp;
  route: DisclosuresRouteProp;
};

// SelectSport
type SelectSportScreenRouteProp = RouteProp<RootStackParamList, 'SelectSport'>;
type SelectSportScreenNavigationProp = StackNavigationProp<RootStackParamList, 'SelectSport'>;
export type SelectSportProps = {
  navigation: SelectSportScreenNavigationProp;
  route: SelectSportScreenRouteProp;
};

// SelectTeam
type SelectTeamScreenRouteProp = RouteProp<RootStackParamList, 'SelectTeam'>;
type SelectTeamScreenNavigationProp = StackNavigationProp<RootStackParamList, 'SelectTeam'>;
export type SelectTeamProps = {
  navigation: SelectTeamScreenNavigationProp;
  route: SelectTeamScreenRouteProp;
};