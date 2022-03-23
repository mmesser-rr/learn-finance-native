import createReducer from 'src/lib/createReducer';

import {
  ATHLETE_ACCOUNTS_LOADED,
  BALANCE_HISTORY_LOADED,
  PLAID_ACCOUNTS_LOADED,
  PLAID_ACCOUNT_SELECTED,
  POD_SETTINGS_UPDATED,
  RECENT_TRANSACTIONS_LOADED,
  SET_UNIT_VERIFICATION_CODE_VALIDITY,
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
  ISetUnitVerificationCodeValidity,
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
});
