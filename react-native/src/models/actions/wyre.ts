import {WyreAccount} from 'src/types/API';

export interface IWyrePurchaseAmountEntered {
  type: String;
  purchaseAmount: string;
}

export interface IWyreWithdrawAmountEntered {
  type: String;
  withdrawAmount: string;
}

export interface IWyreAccountLoaded {
  type: String;
  account: WyreAccount;
}
