import {twoDecimalFormatter} from 'src/utils/functions';
import {RootState} from '../root-state';

export const hasMoneyInAccountSelector = (state: RootState) =>
  (state.bankingReducer.totalBalance ?? 0) > 0;

export const investmentsAccountBalanceSelector = (state: RootState) =>
  twoDecimalFormatter.format(
    (state.bankingReducer.investmentsAccount?.attributes?.balance ?? 0) / 100,
  );
