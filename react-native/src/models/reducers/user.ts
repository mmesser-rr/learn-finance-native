import {Athlete} from 'src/types/API';

export interface IUserState {
  isLoggedIn: boolean;
  user?: Athlete;
}
