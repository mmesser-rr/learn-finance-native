import {ITypeOnlyAction} from 'src/models/actions/common';
import {
  IGetUserByPhone,
  ILoginFailed,
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

export function loginFailed(
  errorMessage: string,
  userNotFound?: boolean,
): ILoginFailed {
  return {
    type: types.LOGIN_FAILED,
    errorMessage,
    userNotFound,
  };
}

export function logout(): ITypeOnlyAction {
  return {
    type: types.LOG_OUT,
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

export function clearUserState(): ITypeOnlyAction {
  return {
    type: types.CLEAR_USER_STATE,
  };
}
