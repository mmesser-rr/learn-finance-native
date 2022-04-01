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
  WyreStack: undefined;
  SelectPlayer: undefined;
};

type SignUpScreenRouteProp = RouteProp<RootStackParamList, 'SignUp'>;
type SelectSportScreenRouteProp = RouteProp<RootStackParamList, 'SelectSport'>;
type SelectTeamScreenRouteProp = RouteProp<RootStackParamList, 'SelectTeam'>;
type PrivacyRouteProp = RouteProp<RootStackParamList, 'Privacy'>;
type AgreementRouteProp = RouteProp<RootStackParamList, 'Agreement'>;
type DisclosuresRouteProp = RouteProp<RootStackParamList, 'Disclosures'>;

type SignUpScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'SignUp'
>;

export type SignUpProps = {
  route: SignUpScreenRouteProp;
  navigation: SignUpScreenNavigationProp;
};

// Privacy
type PrivacyScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Privacy'
>;

export type PrivacyProps = {
  navigation: PrivacyScreenNavigationProp;
  route: PrivacyRouteProp;
};

type AgreementScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Agreement'
>;

export type AgreementProps = {
  navigation: AgreementScreenNavigationProp;
  route: AgreementRouteProp;
};

export type DisclosuresProps = {
  navigation: PrivacyScreenNavigationProp;
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
