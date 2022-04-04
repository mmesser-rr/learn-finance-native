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
});
