import {ITypeOnlyAction} from 'src/models/actions/common';
import {
  IWyreAccountLoaded,
  IWyrePurchaseAmountEntered,
  IWyreWithdrawAmountEntered,
} from 'src/models/actions/wyre';
import {WyreAccount} from 'src/types/API';
import * as types from './types';

export function openRewardsAccount(): ITypeOnlyAction {
  return {
    type: types.OPEN_REWARDS_ACCOUNT,
  };
}

export function wyrePurchaseAmountEntered(
  amount: string,
): IWyrePurchaseAmountEntered {
  return {
    type: types.WYRE_PURCHASE_AMOUNT_ENTERED,
    purchaseAmount: amount,
  };
}

export function wyrePurchaseRequest(): ITypeOnlyAction {
  return {
    type: types.WYRE_PURCHASE_REQUEST,
  };
}

export function wyreWithdrawAmountEntered(
  amount: string,
): IWyreWithdrawAmountEntered {
  return {
    type: types.WYRE_WITHDRAW_AMOUNT_ENTERED,
    withdrawAmount: amount,
  };
}

export function wyreWithdrawRequest(): ITypeOnlyAction {
  return {
    type: types.WYRE_WITHDRAW_REQUEST,
  };
}

export function getWyreAccount(): ITypeOnlyAction {
  return {
    type: types.GET_WYRE_ACCOUNT,
  };
}

export function wyreAccountLoaded(account: WyreAccount): IWyreAccountLoaded {
  return {
    type: types.WYRE_ACCOUNT_LOADED,
    account,
  };
}
