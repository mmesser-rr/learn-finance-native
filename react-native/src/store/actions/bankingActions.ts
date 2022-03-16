import {
  IAccountSelected,
  IAccountsLoaded,
  IMarkRecentTransactionRead,
  IPodSettingsUpdated,
  IRecentTransactionsLoaded,
  ITransferAmountEntered,
  ITypeOnlyAction,
  IUpdatePodSettings,
} from 'src/models/actions/banking';
import {
  PlaidAccountDetail,
  PodSettings,
  RecentTransaction,
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

export function getAccounts(): ITypeOnlyAction {
  return {
    type: types.GET_ACCOUNTS,
  };
}

export function accountsLoaded(
  accounts: PlaidAccountDetail[],
): IAccountsLoaded {
  return {
    type: types.ACCOUNTS_LOADED,
    accounts,
  };
}

export function accountSelected(account: PlaidAccountDetail): IAccountSelected {
  return {
    type: types.ACCOUNT_SELECTED,
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
