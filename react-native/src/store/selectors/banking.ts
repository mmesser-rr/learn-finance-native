import {NoWyreStates} from 'src/config/data';
import {RootState} from '../root-state';

export const wyreEligibleSelector = (state: RootState) =>
  !!state.userReducer.user &&
  NoWyreStates.indexOf(state.userReducer.user.address.state) === -1;
