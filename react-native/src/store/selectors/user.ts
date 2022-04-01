import {NoWyreStates} from 'src/config/data';
import {RootState} from '../root-state';

export const jwtSelector = (state: RootState) => state.userReducer.token;
