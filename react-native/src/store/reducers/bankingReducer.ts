import createReducer from 'src/lib/createReducer';

import {
  ATHLETE_ACCOUNTS_LOADED,
  BALANCE_HISTORY_LOADED,
  CLEAR_BANKING_STATE,
  PLAID_ACCOUNTS_LOADED,
  PLAID_ACCOUNT_SELECTED,
  POD_SETTINGS_UPDATED,
  RECENT_TRANSACTIONS_LOADED,
  SET_UNIT_TOKEN,
  SET_UNIT_VERIFICATION_CODE_VALIDITY,
  TRANSACTION_HISTORY_LOADED,
  TRANSFER_AMOUNT_ENTERED,
  UNIT_VERIFICATION_TOKEN_LOADED,
  UPDATE_HOME_STEP,
} from '../actions/types';
import {
  IAccountSelected,
  IAthleteAccountsLoaded,
  IBalanceHistoryLoaded,
  IPlaidAccountsLoaded,
  IPodSettingsUpdated,
  IRecentTransactionsLoaded,
  ISetUnitToken,
  ISetUnitVerificationCodeValidity,
  ITransactionHistoryLoaded,
  ITransferAmountEntered,
  IUnitVerificationCodeLoaded,
  IUpdateHomeStepAction,
} from 'src/models/actions/banking';
import {IBankingState} from 'src/models/reducers/banking';
import {PODsSteps} from 'src/utils/constants';
import {UnitAccount} from 'src/types/API';

const initialState: IBankingState = {
  step: PODsSteps[0],
  podSettingsUpdated: false,
};

export const bankingReducer = createReducer(initialState, {
  [UPDATE_HOME_STEP](state: IBankingState, action: IUpdateHomeStepAction) {
    return {...state, step: action.step};
  },
  [POD_SETTINGS_UPDATED](state: IBankingState, action: IPodSettingsUpdated) {
    return {...state, podSettingsUpdated: action.updated};
  },
  [RECENT_TRANSACTIONS_LOADED](
    state: IBankingState,
    action: IRecentTransactionsLoaded,
  ) {
    return {...state, recentTransactions: action.transactions};
  },
  [PLAID_ACCOUNTS_LOADED](state: IBankingState, action: IPlaidAccountsLoaded) {
    return {...state, plaidAccounts: action.accounts};
  },
  [PLAID_ACCOUNT_SELECTED](state: IBankingState, action: IAccountSelected) {
    return {...state, selectedAccount: action.account};
  },
  [TRANSFER_AMOUNT_ENTERED](
    state: IBankingState,
    action: ITransferAmountEntered,
  ) {
    return {...state, transferAmount: action.transferAmount};
  },
  [ATHLETE_ACCOUNTS_LOADED](
    state: IBankingState,
    action: IAthleteAccountsLoaded,
  ) {
    const spendingAccount = action.accounts.find(
      account => account.attributes?.tags?.podName === 'SPENDING',
    );
    const investmentsAccount = action.accounts.find(
      account => account.attributes?.tags?.podName === 'INVESTMENTS',
    );
    const savingsAccount = action.accounts.find(
      account => account.attributes?.tags?.podName === 'SAVINGS',
    );

    const totalBalance =
      // 100 +
      (spendingAccount?.attributes?.balance ?? 0) +
      (savingsAccount?.attributes?.balance ?? 0) +
      (investmentsAccount?.attributes?.balance ?? 0);

    return {
      ...state,
      spendingAccount,
      investmentsAccount,
      savingsAccount,
      totalBalance,
    };
  },
  [BALANCE_HISTORY_LOADED](
    state: IBankingState,
    action: IBalanceHistoryLoaded,
  ) {
    // const entries = action.entries;
    const entries: UnitAccount[] = [
      {
        id: 'fizz',
        type: 'history entry',
        attributes: {
          balance: 0,
          date: '2021-12-06',
        },
      },
      {
        id: 'buzz',
        type: 'history entry',
        attributes: {
          balance: 0,
          date: '2021-12-07',
        },
      },
      {
        id: 'bizz',
        type: 'history entry',
        attributes: {
          balance: 100,
          date: '2021-12-08',
        },
      },
      {
        id: 'bazz',
        type: 'history entry',
        attributes: {
          balance: 90,
          date: '2021-12-09',
        },
      },
      {
        id: 'bozz',
        type: 'history entry',
        attributes: {
          balance: 115,
          date: '2021-12-10',
        },
      },
      {
        id: 'fazz',
        type: 'history entry',
        attributes: {
          balance: 120,
          date: '2021-12-11',
        },
      },
    ];
    return {...state, balanceHistory: entries};
  },
  [TRANSACTION_HISTORY_LOADED](
    state: IBankingState,
    action: ITransactionHistoryLoaded,
  ) {
    // const entries = action.entries;
    const entries: UnitAccount[] = [
      {
        id: 'fizz',
        type: 'history entry',
        attributes: {
          amount: 20000,
          date: '2021-12-06T22:18:34Z',
          status: 'Posted',
          summary: 'Pods Allocation',
          description: 'from Spending to Investments',
          direction: 'debit',
        },
      },
      {
        id: 'buzz',
        type: 'history entry',
        attributes: {
          amount: 10000,
          date: '2021-12-07T22:18:34Z',
          status: 'Posted',
          summary: 'Pods Allocation',
          description: 'from Spending to Savings',
          direction: 'debit',
        },
      },
      {
        id: 'bizz',
        type: 'history entry',
        attributes: {
          amount: 50000,
          date: '2021-12-08T22:18:34Z',
          status: 'Posted',
          summary: 'Deposit',
          description: 'from Plaid to Spending',
          direction: 'credit',
        },
      },
      {
        id: 'bazz',
        type: 'history entry',
        attributes: {
          amount: 950,
          date: '2021-12-09',
          status: 'Posted',
          summary: 'Deposit',
          description: 'from Plaid to Spending',
          direction: 'credit',
        },
      },
      {
        id: 'bozz',
        type: 'history entry',
        attributes: {
          amount: 11500,
          date: '2021-12-10T22:18:34Z',
          status: 'Posted',
          summary: 'Deposit',
          description: 'from Plaid to Spending',
          direction: 'credit',
        },
      },
      {
        id: 'fazz',
        type: 'history entry',
        attributes: {
          amount: 1200,
          date: '2021-12-11T22:18:34Z',
          status: 'Pending',
          summary: 'Deposit',
          description: 'from Plaid to Spending',
          direction: 'credit',
        },
      },
      {
        id: 'fozz',
        type: 'history entry',
        attributes: {
          amount: 100000,
          date: '2021-12-12T22:18:34Z',
          status: 'Pending',
          summary: 'Purchase',
          description: 'from Uninvested to Rewards',
          direction: 'debit',
        },
      },
      {
        id: 'fyzz',
        type: 'history entry',
        attributes: {
          amount: 99030,
          date: '2021-12-13T22:18:34Z',
          status: 'Posted',
          summary: 'Purchase',
          description: 'from Uninvested to Rewards',
          direction: 'credit',
          currency: 'USDC',
        },
      },
      {
        id: 'byzz',
        type: 'history entry',
        attributes: {
          amount: 46830,
          date: '2021-12-15T22:18:34Z',
          status: 'Failed',
          summary: 'Purchase',
          description: 'from Uninvested to Rewards',
          direction: 'credit',
          currency: 'USDC',
        },
      },
    ];

    return {...state, transactionHistory: entries};
  },
  [UNIT_VERIFICATION_TOKEN_LOADED](
    state: IBankingState,
    action: IUnitVerificationCodeLoaded,
  ) {
    return {...state, unitVerificationToken: action.verificationToken};
  },
  [SET_UNIT_VERIFICATION_CODE_VALIDITY](
    state: IBankingState,
    action: ISetUnitVerificationCodeValidity,
  ) {
    return {...state, unitVerificationCodeValid: action.valid};
  },
  [SET_UNIT_TOKEN](state: IBankingState, action: ISetUnitToken) {
    return {
      ...state,
      unitToken: action.token,
      unitTokenExpiration: action.expiration,
    };
  },
  [CLEAR_BANKING_STATE]() {
    return initialState;
  },
});
