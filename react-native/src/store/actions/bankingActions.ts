import * as returnTypes from 'src/models/actions/banking';
import {ITypeOnlyAction} from 'src/models/actions/common';
import {
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

export function updatePodSettings(
  settings: PodSettings,
): returnTypes.IUpdatePodSettings {
  return {
    type: types.UPDATE_POD_SETTINGS,
    settings,
  };
}

export function podSettingsUpdated(
  updated: boolean,
): returnTypes.IPodSettingsUpdated {
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
): returnTypes.IRecentTransactionsLoaded {
  return {
    type: types.RECENT_TRANSACTIONS_LOADED,
    transactions,
  };
}

export function markRecentTransactionRead(
  id: string,
  transactionId: string,
): returnTypes.IMarkRecentTransactionRead {
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
): returnTypes.IPlaidAccountsLoaded {
  return {
    type: types.PLAID_ACCOUNTS_LOADED,
    accounts,
  };
}

export function accountSelected(
  account: PlaidAccountDetail,
): returnTypes.IAccountSelected {
  return {
    type: types.PLAID_ACCOUNT_SELECTED,
    account,
  };
}

export function transferAmountEntered(
  transferAmount: string,
): returnTypes.ITransferAmountEntered {
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
): returnTypes.IAthleteAccountsLoaded {
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
): returnTypes.IBalanceHistoryLoaded {
  return {
    type: types.BALANCE_HISTORY_LOADED,
    entries,
  };
}

export function initiateUnitVerificationChallenge(): ITypeOnlyAction {
  return {
    type: types.INITIATE_UNIT_VERIFICATION,
  };
}

export function unitVerificationTokenLoaded(
  verificationToken: string,
): returnTypes.IUnitVerificationCodeLoaded {
  return {
    type: types.UNIT_VERIFICATION_TOKEN_LOADED,
    verificationToken,
  };
}

export function verifyUnitChallengeCode(
  code: string,
): returnTypes.IVerifyUnitChallengeCode {
  return {
    type: types.VERIFY_UNIT_CHALLENGE_CODE,
    code,
  };
}

export function setUnitVerificationCodeValidity(
  valid?: boolean,
): returnTypes.ISetUnitVerificationCodeValidity {
  return {
    type: types.SET_UNIT_VERIFICATION_CODE_VALIDITY,
    valid,
  };
}
