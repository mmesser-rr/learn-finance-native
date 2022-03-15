import {
  IMarkRecentTransactionRead,
  IPodSettingsUpdated,
  IRecentTransactionsLoaded,
  ITypeOnlyAction,
  IUpdatePodSettings,
} from 'src/models/actions/banking';
import {PodSettings, RecentTransaction} from 'src/types/API';
import {
  GET_RECENT_TRANSACTIONS,
  MARK_RECENT_TRANSACTION_READ,
  POD_SETTINGS_UPDATED,
  RECENT_TRANSACTIONS_LOADED,
  UPDATE_HOME_STEP,
  UPDATE_POD_SETTINGS,
} from './types';

export function updateHomeStep(step: string) {
  return {
    type: UPDATE_HOME_STEP,
    step,
  };
}

export function updatePodSettings(settings: PodSettings): IUpdatePodSettings {
  return {
    type: UPDATE_POD_SETTINGS,
    settings,
  };
}

export function podSettingsUpdated(updated: boolean): IPodSettingsUpdated {
  return {
    type: POD_SETTINGS_UPDATED,
    updated,
  };
}

export function getRecentTransactions(): ITypeOnlyAction {
  return {
    type: GET_RECENT_TRANSACTIONS,
  };
}

export function recentTransactionsLoaded(
  transactions: RecentTransaction[],
): IRecentTransactionsLoaded {
  return {
    type: RECENT_TRANSACTIONS_LOADED,
    transactions,
  };
}

export function markRecentTransactionRead(
  id: string,
  transactionId: string,
): IMarkRecentTransactionRead {
  return {
    type: MARK_RECENT_TRANSACTION_READ,
    id,
    transactionId,
  };
}
