/* Redux saga class
 * initial account creation
 */
import {call, put, select, takeLatest} from 'redux-saga/effects';
import {API, graphqlOperation} from 'aws-amplify';
import {GraphQLResult} from '@aws-amplify/api';

import * as loadingActions from 'src/store/actions/loadingActions';
import * as userActions from 'src/store/actions/userActions';
import {
  Athlete,
  AthleteByPhoneQuery,
  AthleteByPhoneQueryVariables,
  GetAthleteQuery,
  GetAthleteQueryVariables,
} from 'src/types/API';
import * as types from '../actions/types';
import NavigationService from 'src/navigation/NavigationService';
import {RootState} from '../root-state';
import {IGetUserByPhone} from 'src/models/actions/user';
import {athleteByPhone, getAthlete} from 'src/graphql/queries';

const compareAthletesByCreationDate = (a: Athlete, b: Athlete) =>
  b.createdAt.localeCompare(a.createdAt);

export function* getUserByPhone({phone}: IGetUserByPhone) {
  const queryFilter: AthleteByPhoneQueryVariables = {
    mobilePhone: phone,
  };
  try {
    const response = (yield call(
      [API, 'graphql'],
      graphqlOperation(athleteByPhone, queryFilter),
    )) as GraphQLResult<AthleteByPhoneQuery>;
    const athletes = (response.data?.athleteByPhone?.items ?? []) as Athlete[];
    if (athletes.length === 0) {
      throw new Error('No user found with the phone number: ' + phone);
    }
    if (athletes.length > 1) {
      athletes.sort(compareAthletesByCreationDate);
    }

    const athlete = athletes[0];
    yield put(userActions.updateUser(athlete));
  } catch (error) {
    console.log('Error attempting to fetch Athlete info:', error);
  }
}

export default function* userSaga() {
  yield takeLatest(types.GET_USER_BY_PHONE, getUserByPhone);
}
