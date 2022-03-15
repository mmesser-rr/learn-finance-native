/* Redux saga class
 * initial account creation
 */
import {call, put, select, takeLatest} from 'redux-saga/effects';
import {API, graphqlOperation} from 'aws-amplify';

import {podSettings, updateRecentTransaction} from 'src/graphql/mutations';
import * as loadingActions from 'src/store/actions/loadingActions';
import * as userActions from 'src/store/actions/userActions';
import * as bankingActions from 'src/store/actions/bankingActions';
import * as types from '../actions/types';
import {
  IMarkRecentTransactionRead,
  IUpdatePodSettings,
} from 'src/models/actions/banking';
import {RootState} from '../root-state';
import {PodSettingsMutationInput} from 'src/types/graphql';
import {listRecentTransactions} from 'src/graphql/queries';
import {GraphQLResult} from '@aws-amplify/api';
import {
  ListRecentTransactionsQuery,
  ListRecentTransactionsQueryVariables,
  RecentTransaction,
  UpdateRecentTransactionMutationVariables,
} from 'src/types/API';

const getAthleteId = (state: RootState) => state.userReducer.user?.id;

export function* updatePodSettings({settings}: IUpdatePodSettings) {
  yield put(loadingActions.enableLoader());

  const athleteId = (yield select(getAthleteId)) as string | undefined;

  try {
    if (!athleteId) {
      throw new Error('Athlete ID is required to update the pod settings');
    }

    console.log('Attempting to update Pod Settings for user:', athleteId);
    console.log('new Pod Settings:', settings);

    const mutationInput: PodSettingsMutationInput = {
      athleteId: athleteId!,
      savings: settings.SAVINGS,
      investments: settings.INVESTMENTS,
      spending: settings.SPENDING,
    };

    yield call([API, 'graphql'], graphqlOperation(podSettings, mutationInput));

    yield put(userActions.updateUser({podSettings: settings}));

    yield put(bankingActions.podSettingsUpdated(true));
    yield put(loadingActions.disableLoader());
  } catch (error) {
    console.log('Error attempting to update pod settings:', error);
    yield put(loadingActions.disableLoader());
  }
}

export function* getRecentTransactions() {
  yield put(loadingActions.enableLoader());

  const athleteId = (yield select(getAthleteId)) as string | undefined;

  try {
    if (!athleteId) {
      throw new Error('Athlete ID is required to get transactions');
    }

    console.log('Attempting to get recent transactions for user:', athleteId);

    const queryFilter: ListRecentTransactionsQueryVariables = {
      filter: {
        read: {eq: false},
        athleteId: {eq: athleteId},
      },
    };

    const response = (yield call(
      [API, 'graphql'],
      graphqlOperation(listRecentTransactions, queryFilter),
    )) as GraphQLResult<ListRecentTransactionsQuery>;

    const transactions =
      response.data && response.data.listRecentTransactions
        ? (response.data.listRecentTransactions!.items as RecentTransaction[])
        : [];
    console.log(transactions);
    yield put(bankingActions.recentTransactionsLoaded(transactions));

    yield put(loadingActions.disableLoader());
  } catch (error) {
    console.log('Error attempting to retrieve recent transactions:', error);
    yield put(loadingActions.disableLoader());
  }
}

export function* markRecentTransactionRead({
  id,
  transactionId,
}: IMarkRecentTransactionRead) {
  try {
    console.log(`Marking transaction ${transactionId} as read`);

    const mutationInput: UpdateRecentTransactionMutationVariables = {
      condition: {
        transactionId: {eq: transactionId},
      },
      input: {
        id: id,
        read: true,
      },
    };

    yield call(
      [API, 'graphql'],
      graphqlOperation(updateRecentTransaction, mutationInput),
    );
  } catch (error) {
    console.log('Error marking recent transaction as read:', error);
  }
}

export default function* bankingSaga() {
  yield takeLatest(types.UPDATE_POD_SETTINGS, updatePodSettings);
  yield takeLatest(types.GET_RECENT_TRANSACTIONS, getRecentTransactions);
  yield takeLatest(
    types.MARK_RECENT_TRANSACTION_READ,
    markRecentTransactionRead,
  );
}
