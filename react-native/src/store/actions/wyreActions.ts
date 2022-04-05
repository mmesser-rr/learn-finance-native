import {ITypeOnlyAction} from 'src/models/actions/common';
import {IWyrePurchaseAmountEntered} from 'src/models/actions/wyre';
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
