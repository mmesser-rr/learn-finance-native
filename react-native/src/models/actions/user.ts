import {Athlete} from 'src/types/API';

export interface ILoginRequest {
  type: String;
  phone: string;
  password: string;
}

export interface ILoginSuccess {
  type: String;
  id: string;
  token: string;
}

export interface IUserUpdate {
  type: String;
  update: Partial<Athlete>;
}

export interface IGetUserByPhone {
  type: String;
  phone: string;
}
