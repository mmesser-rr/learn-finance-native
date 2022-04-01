/* Redux saga class
 * initial account creation
 */
import {call, put, select, takeLatest} from 'redux-saga/effects';
import {API, graphqlOperation} from 'aws-amplify';
import {GraphQLResult} from '@aws-amplify/api';

import * as loadingActions from 'src/store/actions/loadingActions';
import * as userActions from 'src/store/actions/userActions';
import {
  CreateWyreAccountMutation,
  CreateWyreAccountMutationVariables,
} from 'src/types/API';
import * as types from '../actions/types';
import NavigationService from 'src/navigation/NavigationService';
import {RootState} from '../root-state';
import {createWyreAccount} from 'src/graphql/mutations';
import {athleteIdSelector} from '../selectors/user';

export function* openRewardsAccount() {
  yield put(loadingActions.enableLoader());
  const athleteId = (yield select(athleteIdSelector)) as string | undefined;

  try {
    if (!athleteId) {
      throw new Error('openRewardsAccount is for logged in users only');
    }

    const queryFilter: CreateWyreAccountMutationVariables = {
      athleteId,
    };

    const response = (yield call(
      [API, 'graphql'],
      graphqlOperation(createWyreAccount, queryFilter),
    )) as GraphQLResult<CreateWyreAccountMutation>;

    console.log('Create Wyre Account Response:');
    console.log(response);

    const wyreAccountId = response.data?.createWyreAccount?.wyreAccountId;
    console.log('Athlete Wyre Account ID: ' + wyreAccountId);
    NavigationService.navigate('RewardsAccountOpened');
    yield put(userActions.updateUser({wyreAccountId}));
  } catch (error: any) {
    console.log('Failed to open rewards account:', error);
    NavigationService.navigate('UniversalError');
  }
  yield put(loadingActions.disableLoader());
}

export default function* wyreSaga() {
  yield takeLatest(types.OPEN_REWARDS_ACCOUNT, openRewardsAccount);
}
