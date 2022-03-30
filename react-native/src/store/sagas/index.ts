/**
 *  Redux saga class init
 */
import {takeEvery, all} from 'redux-saga/effects';
// import * as types from '../actions/types';
import bankingSaga from './bankingSaga';
// import loginSaga from './loginSaga';
import onboardingSaga from './onboardingSaga';
import userSaga from './userSaga';

export default function* rootSaga() {
  yield all([
    // takeEvery(types.LOGIN_REQUEST, loginSaga),
    onboardingSaga(),
    bankingSaga(),
    userSaga(),
  ]);
}
