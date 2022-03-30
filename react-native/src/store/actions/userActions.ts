import {
  IGetUserByPhone,
  ILoginRequest,
  ILoginSuccess,
  IUserUpdate,
} from 'src/models/actions/user';
import {Athlete} from 'src/types/API';
import * as types from './types';

export function loginRequest(phone: string, password: string): ILoginRequest {
  return {
    type: types.LOGIN_REQUEST,
    phone,
    password,
  };
}

export function loginSuccess(id: string, token: string): ILoginSuccess {
  return {
    type: types.LOGIN_SUCCESS,
    id,
    token,
  };
}

export function updateUser(update: Partial<Athlete>): IUserUpdate {
  return {
    type: types.USER_UPDATE,
    update,
  };
}

export function getUserByPhone(phone: string): IGetUserByPhone {
  return {
    type: types.GET_USER_BY_PHONE,
    phone,
  };
}
