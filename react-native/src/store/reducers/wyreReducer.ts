import createReducer from 'src/lib/createReducer';

import * as actions from '../actions/types';
import * as actionModels from 'src/models/actions/wyre';
import {IWyreState} from 'src/models/reducers/wyre';

const initialState: IWyreState = {};

export const wyreReducer = createReducer(initialState, {
  [actions.WYRE_PURCHASE_AMOUNT_ENTERED](
    state: IWyreState,
    action: actionModels.IWyrePurchaseAmountEntered,
  ) {
    return {...state, purchaseAmount: action.purchaseAmount};
  },
  [actions.WYRE_WITHDRAW_AMOUNT_ENTERED](
    state: IWyreState,
    action: actionModels.IWyreWithdrawAmountEntered,
  ) {
    return {...state, withdrawAmount: action.withdrawAmount};
  },
  [actions.WYRE_ACCOUNT_LOADED](
    state: IWyreState,
    action: actionModels.IWyreAccountLoaded,
  ) {
    return {...state, wyreAccount: action.account};
  },
  [actions.CLEAR_WYRE_STATE]() {
    return initialState;
  },
});
