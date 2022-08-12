/**
 *  Redux saga class init
 */
import {all} from 'redux-saga/effects';
import bankingSaga from './bankingSaga';
import onboardingSaga from './onboardingSaga';
import opportunitiesSaga from './opportunitiesSaga';
import userSaga from './userSaga';
import wyreSaga from './wyreSaga';

export default function* rootSaga() {
  yield all([onboardingSaga(), bankingSaga(), userSaga(), wyreSaga(), opportunitiesSaga()]);
}
