import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import { Deposit, Event, Learn, Quiz } from './API';

export type OpportunitiesStackParamList = {
  Opportunities: undefined;
  LearnVideo: undefined;
  Exercise: {started: boolean, questions: Quiz[]}
  ExerciseResult: undefined;
  Redeem: {
    heroPhotoUri: string,
    title: string,
    logoUri: string,
    wealthAmount: number,
    description: string
  };
  AboutEvent: {
    data: Event
  }
};

// Opportunities
type OpportunitiesRouteProp = RouteProp<OpportunitiesStackParamList, 'Opportunities'>;
type OpportunitiesNavigationProp = StackNavigationProp<OpportunitiesStackParamList, 'Opportunities'>;
export type OpportunitiesProps = {
  navigation: OpportunitiesNavigationProp;
  route: OpportunitiesRouteProp;
};

// LearnVideo
type LearnVideoRouteProp = RouteProp<OpportunitiesStackParamList, 'LearnVideo'>;
type LearnVideoNavigationProp = StackNavigationProp<OpportunitiesStackParamList, 'LearnVideo'>;
export type LearnVideoProps = {
  navigation: LearnVideoNavigationProp;
  route: LearnVideoRouteProp;
};

// Exercise
type ExerciseRouteProp = RouteProp<OpportunitiesStackParamList, 'Exercise'>;
type ExerciseNavigationProp = StackNavigationProp<OpportunitiesStackParamList, 'Exercise'>;
export type ExerciseProps = {
  navigation: ExerciseNavigationProp;
  route: ExerciseRouteProp;
};

// ExerciseResult
type ExerciseResultRouteProp = RouteProp<OpportunitiesStackParamList, 'ExerciseResult'>;
type ExerciseResultNavigationProp = StackNavigationProp<OpportunitiesStackParamList, 'ExerciseResult'>;
export type ExerciseResultProps = {
  navigation: ExerciseResultNavigationProp;
  route: ExerciseResultRouteProp;
};

// Redeem
type RedeemRouteProp = RouteProp<OpportunitiesStackParamList, 'Redeem'>;
type RedeemNavigationProp = StackNavigationProp<OpportunitiesStackParamList, 'Redeem'>;
export type RedeemProps = {
  navigation: RedeemNavigationProp;
  route: RedeemRouteProp;
};

// AboutEvent
type AboutEventRouteProp = RouteProp<OpportunitiesStackParamList, 'AboutEvent'>;
type AboutEventNavigationProp = StackNavigationProp<OpportunitiesStackParamList, 'AboutEvent'>;
export type AboutEventProps = {
  navigation: AboutEventNavigationProp;
  route: AboutEventRouteProp;
};