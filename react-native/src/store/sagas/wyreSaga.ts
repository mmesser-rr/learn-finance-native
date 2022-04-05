/* Redux saga class
 * initial account creation
 */
import {call, put, select, takeLatest} from 'redux-saga/effects';
import {API, graphqlOperation} from 'aws-amplify';
import {GraphQLResult} from '@aws-amplify/api';

import * as loadingActions from 'src/store/actions/loadingActions';
import * as userActions from 'src/store/actions/userActions';
import * as wyreActions from 'src/store/actions/wyreActions';
import {
  CreateWyreAccountMutation,
  CreateWyreAccountMutationVariables,
  GetWyreAccountQuery,
  GetWyreAccountQueryVariables,
  WyreAccount,
} from 'src/types/API';
import * as types from '../actions/types';
import NavigationService from 'src/navigation/NavigationService';
import {createWyreAccountCustom} from 'src/graphql/mutations_custom';
import {athleteIdSelector} from '../selectors/user';
import {getWyreAccount} from 'src/graphql/queries';

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
      graphqlOperation(createWyreAccountCustom, queryFilter),
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
    // NavigationService.navigate('RewardsAccountOpened');
  }
  yield put(loadingActions.disableLoader());
}

export function* wyrePurchaseRequest() {
  yield put(loadingActions.enableLoader());
  const athleteId = (yield select(athleteIdSelector)) as string | undefined;

  try {
    if (!athleteId) {
      throw new Error('openRewardsAccount is for logged in users only');
    }

    // TODO: make API call

    NavigationService.navigate('PurchaseSubmitted');
  } catch (error: any) {
    console.log('Failed to make Wyre purchase:', error);
    NavigationService.navigate('UniversalError');
  }
  yield put(loadingActions.disableLoader());
}

export function* getWyreAccountDetails() {
  const athleteId = (yield select(athleteIdSelector)) as string | undefined;

  try {
    if (!athleteId) {
      throw new Error('openRewardsAccount is for logged in users only');
    }

    const queryFilter: GetWyreAccountQueryVariables = {
      athleteId,
    };
    const response = (yield call(
      [API, 'graphql'],
      graphqlOperation(getWyreAccount, queryFilter),
    )) as GraphQLResult<GetWyreAccountQuery>;
    const account = response.data?.getWyreAccount as WyreAccount;
    yield put(wyreActions.wyreAccountLoaded(account));
  } catch (error: any) {
    console.log('Failed to get Wyre account:', error);
  }
}

export default function* wyreSaga() {
  yield takeLatest(types.OPEN_REWARDS_ACCOUNT, openRewardsAccount);
  yield takeLatest(types.WYRE_PURCHASE_REQUEST, wyrePurchaseRequest);
  yield takeLatest(types.GET_WYRE_ACCOUNT, getWyreAccountDetails);
}
