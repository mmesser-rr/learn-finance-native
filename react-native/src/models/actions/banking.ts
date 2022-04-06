import {
  PlaidAccountDetail,
  PodSettings,
  RecentTransaction,
  UnitAccount,
} from 'src/types/API';

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

export interface IRecentTransactionsLoaded {
  type: String;
  transactions: RecentTransaction[];
}

export interface IMarkRecentTransactionRead {
  type: String;
  id: string;
  transactionId: string;
}

export interface ITransactionHistoryLoaded {
  type: String;
  entries: UnitAccount[];
}

export interface IPlaidAccountsLoaded {
  type: String;
  accounts: PlaidAccountDetail[];
}

export interface IAccountSelected {
  type: String;
  account: PlaidAccountDetail;
}

export interface ITransferAmountEntered {
  type: String;
  transferAmount: string;
}

export interface IAthleteAccountsLoaded {
  type: String;
  accounts: UnitAccount[];
}

export interface IBalanceHistoryLoaded {
  type: String;
  entries: UnitAccount[];
}

export interface IUnitVerificationCodeLoaded {
  type: String;
  verificationToken: string;
}

export interface IVerifyUnitChallengeCode {
  type: String;
  code: string;
}

export interface ISetUnitVerificationCodeValidity {
  type: String;
  valid?: boolean;
}

export interface ISetUnitToken {
  type: String;
  token: string;
  expiration: number;
}

export interface IGetConnectedAccounts {
  type: String;
  indicateLoading?: boolean;
}
