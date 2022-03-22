/* Redux saga class
 * initial account creation
 */
import {call, put, select, takeLatest} from 'redux-saga/effects';
import {API, graphqlOperation} from 'aws-amplify';

import {
  createPlaidPayment,
  podSettings,
  updateRecentTransaction,
} from 'src/graphql/mutations';
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
import {
  listAthletUnitAccounts,
  listPlaidAccounts,
  listRecentTransactions,
  listUnitBalanceHistory,
} from 'src/graphql/queries';
import {GraphQLResult} from '@aws-amplify/api';
import {
  CreatePlaidPaymentMutation,
  CreatePlaidPaymentMutationVariables,
  ListAthletUnitAccountsQuery,
  ListAthletUnitAccountsQueryVariables,
  ListPlaidAccountsQuery,
  ListPlaidAccountsQueryVariables,
  ListRecentTransactionsQuery,
  ListRecentTransactionsQueryVariables,
  ListUnitBalanceHistoryQuery,
  ListUnitBalanceHistoryQueryVariables,
  PlaidAccountDetail,
  RecentTransaction,
  UnitAccount,
  UpdateRecentTransactionMutationVariables,
} from 'src/types/API';
import NavigationService from 'src/navigation/NavigationService';

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

export function* getConnectedAccounts() {
  yield put(loadingActions.enableLoader());

  const athleteId = (yield select(getAthleteId)) as string | undefined;

  try {
    if (!athleteId) {
      throw new Error('Athlete ID is required to get accounts');
    }

    console.log(
      'Attempting to get connected Plaid accounts for user:',
      athleteId,
    );

    const queryFilter: ListPlaidAccountsQueryVariables = {athleteId};

    const response = (yield call(
      [API, 'graphql'],
      graphqlOperation(listPlaidAccounts, queryFilter),
    )) as GraphQLResult<ListPlaidAccountsQuery>;

    const accounts = response.data?.listPlaidAccounts as PlaidAccountDetail[];
    yield put(bankingActions.plaidAccountsLoaded(accounts));

    yield put(loadingActions.disableLoader());
  } catch (error) {
    console.log('Error attempting to retrieve Plaid accounts:', error);
    yield put(loadingActions.disableLoader());
  }
}

export function* createDeposit() {
  yield put(loadingActions.enableLoader());

  const athleteId = (yield select(getAthleteId)) as string | undefined;
  const transferAmount = (yield select(
    (state: RootState) => state.bankingReducer.transferAmount,
  )) as string | undefined;
  const accountId = (yield select(
    (state: RootState) => state.bankingReducer.selectedAccount?.account_id,
  )) as string | undefined;

  try {
    if (!athleteId || !transferAmount || !accountId) {
      throw new Error(
        'Athlete ID, transfer amount, and account ID are required to create a deposit',
      );
    }

    console.log('Attempting to create a deposit');
    const amountInCents = +transferAmount * 100;

    const mutationInput: CreatePlaidPaymentMutationVariables = {
      athleteId: athleteId,
      plaidAccountId: accountId,
      amount: amountInCents,
      description: 'One time deposit',
    };

    const response = (yield call(
      [API, 'graphql'],
      graphqlOperation(createPlaidPayment, mutationInput),
    )) as GraphQLResult<CreatePlaidPaymentMutation>;

    console.log('Create Deposit response:', response);

    yield put(loadingActions.disableLoader());
    NavigationService.navigate('DepositProcessed');
  } catch (error) {
    console.log('Error attempting to create deposit:', error);
    yield put(loadingActions.disableLoader());
  }
}

export function* getAthleteAccounts() {
  yield put(loadingActions.enableLoader());

  const athleteId = (yield select(getAthleteId)) as string | undefined;

  try {
    if (!athleteId) {
      throw new Error('Athlete ID is required to get accounts');
    }

    console.log('Attempting to get accounts for user:', athleteId);

    const queryFilter: ListAthletUnitAccountsQueryVariables = {
      athleteId,
    };

    const response = (yield call(
      [API, 'graphql'],
      graphqlOperation(listAthletUnitAccounts, queryFilter),
    )) as GraphQLResult<ListAthletUnitAccountsQuery>;

    const accounts = response.data?.listAthletUnitAccounts as UnitAccount[];
    yield put(bankingActions.athleteAccountsLoaded(accounts));

    yield put(loadingActions.disableLoader());
  } catch (error) {
    console.log('Error attempting to retrieve accounts:', error);
    yield put(loadingActions.disableLoader());
  }
}

export function* getBalanceHistory() {
  yield put(loadingActions.enableLoader());

  const athleteId = (yield select(getAthleteId)) as string | undefined;

  try {
    if (!athleteId) {
      throw new Error('Athlete ID is required to get accounts');
    }

    console.log('Attempting to get accounts for user:', athleteId);

    const queryFilter: ListUnitBalanceHistoryQueryVariables = {
      athleteId,
    };

    const response = (yield call(
      [API, 'graphql'],
      graphqlOperation(listUnitBalanceHistory, queryFilter),
    )) as GraphQLResult<ListUnitBalanceHistoryQuery>;

    const historyEntries = response.data
      ?.listUnitBalanceHistory as UnitAccount[];
    yield put(bankingActions.balanceHistoryLoaded(historyEntries));

    yield put(loadingActions.disableLoader());
  } catch (error) {
    console.log('Error attempting to retrieve accounts:', error);
    yield put(loadingActions.disableLoader());
  }
}

export default function* bankingSaga() {
  yield takeLatest(types.UPDATE_POD_SETTINGS, updatePodSettings);
  yield takeLatest(types.GET_RECENT_TRANSACTIONS, getRecentTransactions);
  yield takeLatest(
    types.MARK_RECENT_TRANSACTION_READ,
    markRecentTransactionRead,
  );
  yield takeLatest(types.GET_CONNECTED_ACCOUNTS, getConnectedAccounts);
  yield takeLatest(types.CREATE_DEPOSIT, createDeposit);
  yield takeLatest(types.GET_ATHLETE_ACCOUNTS, getAthleteAccounts);
  yield takeLatest(types.GET_BALANCE_HISTORY, getBalanceHistory);
}
