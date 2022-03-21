import {
  IAccountSelected,
  IPlaidAccountsLoaded,
  IMarkRecentTransactionRead,
  IPodSettingsUpdated,
  IRecentTransactionsLoaded,
  ITransferAmountEntered,
  ITypeOnlyAction,
  IUpdatePodSettings,
  IAthleteAccountsLoaded,
  IBalanceHistoryLoaded,
} from 'src/models/actions/banking';
import {
  AthleteAccount,
  PlaidAccountDetail,
  PodSettings,
  RecentTransaction,
  UnitAccount,
} from 'src/types/API';
import * as types from './types';

export function updateHomeStep(step: string) {
  return {
    type: types.UPDATE_HOME_STEP,
    step,
  };
}

export function updatePodSettings(settings: PodSettings): IUpdatePodSettings {
  return {
    type: types.UPDATE_POD_SETTINGS,
    settings,
  };
}

export function podSettingsUpdated(updated: boolean): IPodSettingsUpdated {
  return {
    type: types.POD_SETTINGS_UPDATED,
    updated,
  };
}

export function getRecentTransactions(): ITypeOnlyAction {
  return {
    type: types.GET_RECENT_TRANSACTIONS,
  };
}

export function recentTransactionsLoaded(
  transactions: RecentTransaction[],
): IRecentTransactionsLoaded {
  return {
    type: types.RECENT_TRANSACTIONS_LOADED,
    transactions,
  };
}

export function markRecentTransactionRead(
  id: string,
  transactionId: string,
): IMarkRecentTransactionRead {
  return {
    type: types.MARK_RECENT_TRANSACTION_READ,
    id,
    transactionId,
  };
}

export function getConnectedAccounts(): ITypeOnlyAction {
  return {
    type: types.GET_CONNECTED_ACCOUNTS,
  };
}

export function plaidAccountsLoaded(
  accounts: PlaidAccountDetail[],
): IPlaidAccountsLoaded {
  return {
    type: types.PLAID_ACCOUNTS_LOADED,
    accounts,
  };
}

export function accountSelected(account: PlaidAccountDetail): IAccountSelected {
  return {
    type: types.PLAID_ACCOUNT_SELECTED,
    account,
  };
}

export function transferAmountEntered(
  transferAmount: string,
): ITransferAmountEntered {
  return {
    type: types.TRANSFER_AMOUNT_ENTERED,
    transferAmount,
  };
}

export function createDeposit(): ITypeOnlyAction {
  return {
    type: types.CREATE_DEPOSIT,
  };
}

export function getAthleteAccounts(): ITypeOnlyAction {
  return {
    type: types.GET_ATHLETE_ACCOUNTS,
  };
}

export function athleteAccountsLoaded(
  accounts: UnitAccount[],
): IAthleteAccountsLoaded {
  return {
    type: types.ATHLETE_ACCOUNTS_LOADED,
    accounts,
  };
}

export function getBalanceHistory(): ITypeOnlyAction {
  return {
    type: types.GET_BALANCE_HISTORY,
  };
}

export function balanceHistoryLoaded(
  entries: UnitAccount[],
): IBalanceHistoryLoaded {
  return {
    type: types.BALANCE_HISTORY_LOADED,
    entries,
  };
}
