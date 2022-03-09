import {Athlete} from 'src/types/API';
import * as types from './types';

export function updateUser(update: Partial<Athlete>) {
  return {
    type: types.USER_UPDATE,
    update,
  };
}
