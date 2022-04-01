/* Redux saga class
 * initial account creation
 */
import {call, put, select, takeLatest} from 'redux-saga/effects';
import {API, Auth, graphqlOperation} from 'aws-amplify';
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
import {IGetUserByPhone, ILoginRequest} from 'src/models/actions/user';
import {athleteByPhone, getAthlete} from 'src/graphql/queries';
import {jwtSelector} from '../selectors/user';
import {IOnboardingState} from 'src/models/reducers/onboarding';

const compareAthletesByCreationDate = (a: Athlete, b: Athlete) =>
  b.createdAt.localeCompare(a.createdAt);

export function* onboardingSilentSignIn() {
  try {
    const {mobilePhone, password} = (yield select(
      (state: RootState) => state.onboardingReducer,
    )) as IOnboardingState;
    if (!mobilePhone || !password) {
      throw new Error('phone number and password are required');
    }
    const formattedPhone = '+1' + mobilePhone;
    const loginResponse = yield Auth.signIn({
      username: formattedPhone,
      password,
    });
    console.log('Silent Sign In Response:');
    console.log(loginResponse);
    const token = loginResponse.signInUserSession.accessToken.jwtToken;
    const id = loginResponse.username;
    yield put(userActions.loginSuccess(id, token));
  } catch (error) {
    console.log('Login attempt failed:', error);
  }
}

export function* loginRequest({phone, password}: ILoginRequest) {
  yield put(loadingActions.enableLoader());

  const queryFilter: AthleteByPhoneQueryVariables = {
    mobilePhone: phone,
  };
  try {
    const loginResponse = yield Auth.signIn({username: phone, password});
    console.log('Sign In Response:');
    console.log(loginResponse);
    const token = loginResponse.signInUserSession.accessToken.jwtToken;
    const id = loginResponse.username;
    yield put(userActions.loginSuccess(id, token));

    try {
      console.log('token for getUserByPhone:', token);
      const response = (yield call(
        [API, 'graphql'],
        graphqlOperation(athleteByPhone, queryFilter, token),
      )) as GraphQLResult<AthleteByPhoneQuery>;
      const athletes = (response.data?.athleteByPhone?.items ??
        []) as Athlete[];
      if (athletes.length === 0) {
        throw new Error('No user found with the phone number: ' + phone);
      }
      if (athletes.length > 1) {
        athletes.sort(compareAthletesByCreationDate);
      }

      const athlete = athletes[0];
      yield put(userActions.updateUser(athlete));

      NavigationService.navigate('UserLoginStack', {screen: 'UserFaceId'});
    } catch (err) {
      console.log('Error attempting to fetch Athlete info:', err);
    }
  } catch (error: any) {
    console.log('Login attempt failed:', error);
    let msg = '';
    let userNotFound: boolean | undefined;
    switch (error.message) {
      case 'Username should be either an email or a phone number.':
      case 'Password did not conform with policy: Password not long enough':
      case 'User is not confirmed.':
        msg = error.message;
        break;
      case 'Incorrect username or password.':
        msg = 'The phone number and password do not match. Please try again.';
        break;
      case 'User does not exist.':
        userNotFound = true;
        break;
      default:
        msg = error.message;
    }
    yield put(userActions.loginFailed(msg, userNotFound));
  }
  yield put(loadingActions.disableLoader());
}

export function* getUserByPhone({phone}: IGetUserByPhone) {
  const queryFilter: AthleteByPhoneQueryVariables = {
    mobilePhone: phone,
  };
  try {
    const token = (yield select(jwtSelector)) as string;
    console.log('token for getUserByPhone:', token);
    const response = (yield call(
      [API, 'graphql'],
      graphqlOperation(athleteByPhone, queryFilter, token),
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
  yield takeLatest(types.ONBOARDING_SILENT_SIGN_IN, onboardingSilentSignIn);
  yield takeLatest(types.LOGIN_REQUEST, loginRequest);
  yield takeLatest(types.GET_USER_BY_PHONE, getUserByPhone);
}
