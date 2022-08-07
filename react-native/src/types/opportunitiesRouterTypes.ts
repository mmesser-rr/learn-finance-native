import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import { Deposit, Learn, Quiz } from './API';

export type OpportunitiesStackParamList = {
  Opportunities: undefined;
  LearnVideo: {depositData: Deposit};
  Exercise: {started: boolean, questions: Quiz[]}
  Redeem: {
    heroPhotoUri: string,
    title: string,
    logoUri: string,
    wealthAmount: number,
    description: string
  };
  AboutEvent: {
    heroPhotoUri: string,
    logoUri: string,
    tagline: string,
    sponsor: string,
    title: string,
    description: string,
    dateTime: number,
    location: string,
    reward: number
  }
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