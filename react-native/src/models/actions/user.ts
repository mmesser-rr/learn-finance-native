import {Athlete} from 'src/types/API';

export interface IUserUpdate {
  type: String;
  update: Partial<Athlete>;
}

export interface IGetUserByPhone {
  type: String;
  phone: string;
}
