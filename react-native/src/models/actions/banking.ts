import {PodSettings, RecentTransaction} from 'src/types/API';

export interface IUpdateHomeStepAction {
  step: string;
}

export interface IUpdatePodSettings {
  type: String;
  settings: PodSettings;
}

export interface IPodSettingsUpdated {
  type: String;
  updated: boolean;
}

export interface ITypeOnlyAction {
  type: String;
}

export interface IRecentTransactionsLoaded {
  type: String;
  transactions: RecentTransaction[];
}

export interface IMarkRecentTransactionRead {
  type: String;
  id: string;
  transactionId: string;
}
