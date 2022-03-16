import createReducer from 'src/lib/createReducer';

import {
  ACCOUNTS_LOADED,
  ACCOUNT_SELECTED,
  POD_SETTINGS_UPDATED,
  RECENT_TRANSACTIONS_LOADED,
  TRANSFER_AMOUNT_ENTERED,
  UPDATE_HOME_STEP,
} from '../actions/types';
import {
  IAccountSelected,
  IAccountsLoaded,
  IPodSettingsUpdated,
  IRecentTransactionsLoaded,
  ITransferAmountEntered,
  IUpdateHomeStepAction,
} from 'src/models/actions/banking';
import {IBankingState} from 'src/models/reducers/banking';
import {PODsSteps} from 'src/utils/constants';

const initialState: IBankingState = {
  step: PODsSteps[0],
  podSettingsUpdated: false,
};

export const bankingReducer = createReducer(initialState, {
  [UPDATE_HOME_STEP](state: IBankingState, action: IUpdateHomeStepAction) {
    return {...state, step: action.step};
  },
  [POD_SETTINGS_UPDATED](state: IBankingState, action: IPodSettingsUpdated) {
    return {...state, podSettingsUpdated: action.updated};
  },
  [RECENT_TRANSACTIONS_LOADED](
    state: IBankingState,
    action: IRecentTransactionsLoaded,
  ) {
    return {...state, recentTransactions: action.transactions};
  },
  [ACCOUNTS_LOADED](state: IBankingState, action: IAccountsLoaded) {
    return {...state, accounts: action.accounts};
  },
  [ACCOUNT_SELECTED](state: IBankingState, action: IAccountSelected) {
    return {...state, selectedAccount: action.account};
  },
  [TRANSFER_AMOUNT_ENTERED](
    state: IBankingState,
    action: ITransferAmountEntered,
  ) {
    return {...state, transferAmount: action.transferAmount};
  },
});
