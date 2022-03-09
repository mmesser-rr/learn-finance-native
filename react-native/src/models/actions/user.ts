import {Athlete} from 'src/types/API';

export interface IUserUpdate {
  type: String;
  update: Partial<Athlete>;
}
