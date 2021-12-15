import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export type RootStackParamList = {
  Welcome: undefined;
  SignUp: { step: string };
};

type SignUpScreenRouteProp = RouteProp<RootStackParamList, 'SignUp'>;

type SignUpScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'SignUp'
>;

export type SignUpProps = {
  route: SignUpScreenRouteProp;
  navigation: SignUpScreenNavigationProp;
};
