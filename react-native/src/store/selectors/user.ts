import {RootState} from '../root-state';

export const athleteIdSelector = (state: RootState) =>
  state.userReducer.user?.id;
export const jwtSelector = (state: RootState) => state.userReducer.token;
