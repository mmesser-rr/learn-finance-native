/* Redux saga class
 * initial account creation
 */
import {call, put, select, takeLatest} from 'redux-saga/effects';
import {API, graphqlOperation} from 'aws-amplify';
import {format} from 'date-fns';

import {
  athleteUnitTokenVerification,
  createAthleteUnitToken,
  createPlaidPayment,
  podSettings,
  updateRecentTransaction,
} from 'src/graphql/mutations';
import * as loadingActions from 'src/store/actions/loadingActions';
import * as userActions from 'src/store/actions/userActions';
import * as bankingActions from 'src/store/actions/bankingActions';
import * as types from '../actions/types';
import {
  IGetConnectedAccounts,
  IMarkRecentTransactionRead,
  IUpdatePodSettings,
  IVerifyUnitChallengeCode,
} from 'src/models/actions/banking';
import {RootState} from '../root-state';
import {PodSettingsMutationInput} from 'src/types/graphql';
import {
  listAllUnitTransactions,
  listAthleteUnitAccounts,
  listPlaidAccounts,
  listRecentTransactions,
  listUnitBalanceHistory,
} from 'src/graphql/queries';
import {GraphQLResult} from '@aws-amplify/api';
import {
  AthleteUnitTokenVerificationMutation,
  CreateAthleteUnitTokenMutation,
  CreateAthleteUnitTokenMutationVariables,
  CreatePlaidPaymentMutation,
  CreatePlaidPaymentMutationVariables,
  ListAllUnitTransactionsQuery,
  ListAllUnitTransactionsQueryVariables,
  ListAthleteUnitAccountsQuery,
  ListAthleteUnitAccountsQueryVariables,
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
import {createPlaidPaymentCustom} from 'src/graphql/mutations_custom';

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

export function* getConnectedAccounts({
  indicateLoading,
}: IGetConnectedAccounts) {
  if (indicateLoading) yield put(loadingActions.enableLoader());

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

    if (indicateLoading) yield put(loadingActions.disableLoader());
  } catch (error) {
    console.log('Error attempting to retrieve Plaid accounts:', error);
    if (indicateLoading) yield put(loadingActions.disableLoader());
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
  const unitToken = (yield select(
    (state: RootState) => state.bankingReducer.unitToken,
  )) as string | undefined;

  try {
    if (!athleteId || !transferAmount || !accountId || !unitToken) {
      throw new Error(
        'Athlete ID, transfer amount, unit token, and account ID are required to create a deposit',
      );
    }

    console.log('Attempting to create a deposit');
    const amountInCents = +transferAmount * 100;

    // idempotency key that will prevent duplicate transactions
    // in case the user accidentally submits the same deposit quantity within the same minute
    const timeStamp = format(new Date(), 'yyyy-MM-dd-HH:mm');
    const idempotencyKey =
      amountInCents + '_' + athleteId.substring(0, 13) + '_' + timeStamp;
    console.log('Deposit has idempotency key:', idempotencyKey);

    const mutationInput: CreatePlaidPaymentMutationVariables = {
      athleteId: athleteId,
      plaidAccountId: accountId,
      amount: amountInCents,
      description: 'One time deposit',
      idempotencyKey: idempotencyKey,
      unitToken: unitToken,
    };

    console.log('Create Deposit input:', mutationInput);

    const response = (yield call(
      [API, 'graphql'],
      graphqlOperation(createPlaidPaymentCustom, mutationInput),
    )) as GraphQLResult<CreatePlaidPaymentMutation>;

    console.log('Create Deposit response:', response);

    yield put(loadingActions.disableLoader());
    NavigationService.navigate('DepositProcessed');
  } catch (error) {
    console.log('Error attempting to create deposit:', error);
    yield put(loadingActions.disableLoader());
  }

  yield put(bankingActions.setUnitVerificationCodeValidity(undefined));
}

export function* getAthleteAccounts() {
  yield put(loadingActions.enableLoader());

  const athleteId = (yield select(getAthleteId)) as string | undefined;

  try {
    if (!athleteId) {
      throw new Error('Athlete ID is required to get accounts');
    }

    console.log('Attempting to get accounts for user:', athleteId);

    const queryFilter: ListAthleteUnitAccountsQueryVariables = {
      athleteId,
    };

    const response = (yield call(
      [API, 'graphql'],
      graphqlOperation(listAthleteUnitAccounts, queryFilter),
    )) as GraphQLResult<ListAthleteUnitAccountsQuery>;

    const accounts = response.data?.listAthleteUnitAccounts as UnitAccount[];
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

export function* getTransactionHistory() {
  yield put(loadingActions.enableLoader());

  const athleteId = (yield select(getAthleteId)) as string | undefined;

  try {
    if (!athleteId) {
      throw new Error('Athlete ID is required to transaction history');
    }

    const queryFilter: ListAllUnitTransactionsQueryVariables = {athleteId};

    const response = (yield call(
      [API, 'graphql'],
      graphqlOperation(listAllUnitTransactions, queryFilter),
    )) as GraphQLResult<ListAllUnitTransactionsQuery>;

    const transactions =
      response.data && response.data.listAllUnitTransactions
        ? (response.data.listAllUnitTransactions as UnitAccount[])
        : [];
    console.log('Transaction History');
    console.log(transactions);
    yield put(bankingActions.transactionHistoryLoaded(transactions));

    yield put(loadingActions.disableLoader());
  } catch (error) {
    console.log('Error attempting to retrieve transaction history:', error);
    yield put(loadingActions.disableLoader());
  }
}

export function* initiateUnitVerificationChallenge() {
  console.log('initiating Banking phone challenge');
  yield put(bankingActions.setUnitVerificationCodeValidity(undefined));
  const athleteId = (yield select(getAthleteId)) as string | undefined;

  try {
    if (!athleteId) {
      throw new Error('initiateBankingPhoneChallenge is for logged in users');
    }

    const response = (yield call(
      [API, 'graphql'],
      graphqlOperation(athleteUnitTokenVerification, {
        athleteId,
      }),
    )) as GraphQLResult<AthleteUnitTokenVerificationMutation>;

    const verificationToken =
      response.data?.athleteUnitTokenVerification?.attributes
        ?.verificationToken;
    if (verificationToken) {
      yield put(bankingActions.unitVerificationTokenLoaded(verificationToken!));
    } else {
      console.log('Unable to initialize token verification');
      NavigationService.navigate('UniversalError');
    }
  } catch (error) {
    console.log('Error attempting to initiate phone challenge:', error);
    NavigationService.navigate('UniversalError');
  }
}

export function* verifyUnitChallengeCode({code}: IVerifyUnitChallengeCode) {
  yield put(loadingActions.enableLoader());

  const athleteId = (yield select(getAthleteId)) as string | undefined;
  const verificationToken = (yield select(
    (state: RootState) => state.bankingReducer.unitVerificationToken,
  )) as string | undefined;

  try {
    if (!athleteId || !verificationToken) {
      throw new Error(
        'Athlete ID, and Unit verification token are required to create Athlete Unit Token',
      );
    }

    const mutationInput: CreateAthleteUnitTokenMutationVariables = {
      athleteId: athleteId,
      verificationToken: verificationToken,
      verificationCode: code,
    };

    console.log('Create Athlete Unit Token input:', mutationInput);

    const response = (yield call(
      [API, 'graphql'],
      graphqlOperation(createAthleteUnitToken, mutationInput),
    )) as GraphQLResult<CreateAthleteUnitTokenMutation>;

    console.log(
      'Create Athlete Unit Token response:',
      response.data?.createAthleteUnitToken,
    );

    const token = response.data?.createAthleteUnitToken?.attributes?.token;
    const expiresIn =
      response.data?.createAthleteUnitToken?.attributes?.expiresIn;
    const isValid = !!token && !!expiresIn && expiresIn > 0;
    yield put(bankingActions.setUnitVerificationCodeValidity(isValid));

    yield put(loadingActions.disableLoader());

    if (isValid) {
      console.log('unit token will expire in ' + expiresIn / 1000 + 'seconds');
      const expirationDate = Date.now() + expiresIn;
      yield put(bankingActions.setUnitToken(token, expirationDate));
    }
  } catch (error: any) {
    console.log('Error attempting to create Athlete Unit Token:', error);
    if (
      error &&
      error.errors &&
      error.errors[0] &&
      error.errors[0].message?.includes(
        'Error: 400 - Verification check failed',
      )
    ) {
      yield put(bankingActions.setUnitVerificationCodeValidity(false));
    } else {
      NavigationService.navigate('UniversalError');
    }
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
  yield takeLatest(types.GET_TRANSACTION_HISTORY, getTransactionHistory);
  yield takeLatest(
    types.INITIATE_UNIT_VERIFICATION,
    initiateUnitVerificationChallenge,
  );
  yield takeLatest(types.VERIFY_UNIT_CHALLENGE_CODE, verifyUnitChallengeCode);
}
