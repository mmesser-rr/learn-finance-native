import {NoWyreStates} from 'src/config/data';
import {RootState} from '../root-state';

export const wyreEligibleSelector = (state: RootState) =>
  !!state.userReducer.user &&
  state.userReducer.user.address &&
  NoWyreStates.indexOf(state.userReducer.user.address.state) === -1;

export const hasMoneyInAccountSelector = (state: RootState) =>
  (state.bankingReducer.totalBalance ?? 0) > 0;
