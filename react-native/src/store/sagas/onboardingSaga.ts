/* Redux saga class
 * initial account creation
 */
import {call, put, select, takeLatest} from 'redux-saga/effects';
import {API, graphqlOperation} from 'aws-amplify';
import {GraphQLResult} from '@aws-amplify/api';

import {
  createAthlete,
  openAppAndAccount,
  updateAthlete,
} from 'src/graphql/mutations';
import * as loadingActions from 'src/store/actions/loadingActions';
import * as onboardingActions from 'src/store/actions/onboardingActions';
import * as userActions from 'src/store/actions/userActions';
import {
  Athlete,
  CreateAthleteInput,
  CreateAthleteMutation,
  UpdateAthleteAccountMutationVariables,
  UpdateAthleteMutation,
  UpdateAthleteMutationVariables,
} from 'src/types/API';
import * as types from '../actions/types';
import NavigationService from 'src/navigation/NavigationService';
import {IOnboardingState} from 'src/models/reducers/onboarding';
import {RootState} from '../root-state';
import {ICreateAthleteAndAccount} from 'src/models/actions/onboarding';
import {jwtSelector} from '../selectors/user';

const getOnboardingState = (state: RootState) => state.onboardingReducer;

export function* addAthlete({ssn}: ICreateAthleteAndAccount) {
  yield put(loadingActions.enableLoader());
  yield put(onboardingActions.clearError());
  const onboardingState = (yield select(
    getOnboardingState,
  )) as IOnboardingState;
  const mutationInput: UpdateAthleteMutationVariables = {
    input: {
      id: onboardingState.id!,
      firstName: onboardingState.firstName,
      lastName: onboardingState.lastName,
      email: onboardingState.email,
      level: onboardingState.level,
      sport: onboardingState.sport,
      team: onboardingState.team,
      address: onboardingState.address,
      dateOfBirth: onboardingState.dateOfBirth,
      isActive: true,
      podSettings: {
        SAVINGS: 0,
        INVESTMENTS: 0,
        SPENDING: 0,
      },
    },
  };
  console.log('athlete', mutationInput.input);
  const token = (yield select(jwtSelector)) as string;
  console.log('token:', token);

  try {
    // const response = (yield call(
    //   [API, 'graphql'],
    //   graphqlOperation(updateAthlete, mutationInput),
    // )) as GraphQLResult<UpdateAthleteMutation>;
    const response = (yield API.graphql({
      query: updateAthlete,
      variables: mutationInput,
      authMode: 'AMAZON_COGNITO_USER_POOLS',
      // authToken: token,
    })) as GraphQLResult<UpdateAthleteMutation>;

    const newlyCreatedAthlete = response.data?.updateAthlete as Athlete;

    console.log('New Athlete ID:', newlyCreatedAthlete.id);
    try {
      yield API.graphql({
        query: openAppAndAccount,
        variables: {
          athleteId: newlyCreatedAthlete.id,
          ssn: ssn,
        },
        authMode: 'AMAZON_COGNITO_USER_POOLS',
      });
      // yield call(
      //   [API, 'graphql'],
      //   graphqlOperation(openAppAndAccount, {
      //     athleteId: newlyCreatedAthlete.id,
      //     ssn: ssn,
      //   }),
      // );

      yield put(userActions.updateUser(newlyCreatedAthlete));

      NavigationService.navigate('AccountCreateSuccess');
    } catch (error: any) {
      console.log('Error attempting to openAppAndAccount:', error);
      console.log(error.errors);
      console.log(error.errors[0].message);
      // yield put(
      //   onboardingActions.accountCreationFailed(
      //     'Sorry, we were unable to create your account at this time.',
      //   ),
      // );
      NavigationService.navigate('AccountCreateFailure');
    }
  } catch (error) {
    console.log('Error attempting to update new Athlete:', error);
    // yield put(
    //   onboardingActions.accountCreationFailed(
    //     'Sorry, we were unable to create your account at this time.',
    //   ),
    // );
    NavigationService.navigate('AccountCreateFailure');
  }

  yield put(loadingActions.disableLoader());
}

export default function* onboardingSaga() {
  yield takeLatest(types.CREATE_ATHLETE_AND_ACCOUNT, addAthlete);
}
