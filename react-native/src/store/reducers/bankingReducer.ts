import createReducer from 'src/lib/createReducer';

import {
  ATHLETE_ACCOUNTS_LOADED,
  PLAID_ACCOUNTS_LOADED,
  PLAID_ACCOUNT_SELECTED,
  POD_SETTINGS_UPDATED,
  RECENT_TRANSACTIONS_LOADED,
  TRANSFER_AMOUNT_ENTERED,
  UPDATE_HOME_STEP,
} from '../actions/types';
import {
  IAccountSelected,
  IAthleteAccountsLoaded,
  IPlaidAccountsLoaded,
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
  [PLAID_ACCOUNTS_LOADED](state: IBankingState, action: IPlaidAccountsLoaded) {
    return {...state, accounts: action.accounts};
  },
  [PLAID_ACCOUNT_SELECTED](state: IBankingState, action: IAccountSelected) {
    return {...state, selectedAccount: action.account};
  },
  [TRANSFER_AMOUNT_ENTERED](
    state: IBankingState,
    action: ITransferAmountEntered,
  ) {
    return {...state, transferAmount: action.transferAmount};
  },
  [ATHLETE_ACCOUNTS_LOADED](
    state: IBankingState,
    action: IAthleteAccountsLoaded,
  ) {
    // TODO: update state properly
    // return {...state, totalBalance: 100};
    return {...state};
  },
});
