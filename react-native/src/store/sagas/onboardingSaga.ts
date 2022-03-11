/* Redux saga class
 * initial account creation
 */
import {call, put, select, takeLatest} from 'redux-saga/effects';
import {API, graphqlOperation} from 'aws-amplify';
import {GraphQLResult} from '@aws-amplify/api';

import {createAthlete, openAppAndAccount} from 'src/graphql/mutations';
import * as loadingActions from 'src/store/actions/loadingActions';
import * as onboardingActions from 'src/store/actions/onboardingActions';
import * as userActions from 'src/store/actions/userActions';
import {
  Athlete,
  CreateAthleteInput,
  CreateAthleteMutation,
} from 'src/types/API';
import * as types from '../actions/types';
import NavigationService from 'src/navigation/NavigationService';
import {IOnboardingState} from 'src/models/reducers/onboarding';
import {RootState} from '../root-state';
import {ICreateAthleteAndAccount} from 'src/models/actions/onboarding';

const getOnboardingState = (state: RootState) => state.onboardingReducer;

export function* addAthlete({ssn}: ICreateAthleteAndAccount) {
  yield put(loadingActions.enableLoader());
  yield put(onboardingActions.clearError());
  const onboardingState = (yield select(
    getOnboardingState,
  )) as IOnboardingState;
  const athlete: CreateAthleteInput = {
    firstName: onboardingState.firstName!,
    lastName: onboardingState.lastName!,
    mobilePhone: '+1' + onboardingState.mobilePhone,
    email: onboardingState.email!,
    level: onboardingState.level!,
    sport: onboardingState.sport!,
    team: onboardingState.team!,
    address: onboardingState.address!,
    dateOfBirth: onboardingState.dateOfBirth!,
    isActive: true,
    podSettings: {
      SAVINGS: 0,
      INVESTMENTS: 0,
      SPENDING: 0,
    },
  };
  console.log('athlete', athlete);

  try {
    const response = (yield call(
      [API, 'graphql'],
      graphqlOperation(createAthlete, {input: athlete}),
    )) as GraphQLResult<CreateAthleteMutation>;

    const newlyCreatedAthlete = response.data?.createAthlete as Athlete;

    console.log('New Athlete ID:', newlyCreatedAthlete.id);
    try {
      yield call(
        [API, 'graphql'],
        graphqlOperation(openAppAndAccount, {
          athleteId: newlyCreatedAthlete.id,
          ssn: ssn,
        }),
      );

      yield put(userActions.updateUser(newlyCreatedAthlete));

      NavigationService.navigate('AccountCreateSuccess');
    } catch (error) {
      console.log('Error attempting to openAppAndAccount:', error);
      yield put(
        onboardingActions.accountCreationFailed(
          'Sorry, we were unable to create your account at this time.',
        ),
      );
    }
  } catch (error) {
    console.log('Error attempting to create Athlete:', error);
    yield put(
      onboardingActions.accountCreationFailed(
        'Sorry, we were unable to create your account at this time.',
      ),
    );
  }

  yield put(loadingActions.disableLoader());
}

export default function* onboardingSaga() {
  yield takeLatest(types.CREATE_ATHLETE_AND_ACCOUNT, addAthlete);
}
