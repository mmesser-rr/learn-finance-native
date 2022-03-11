/* Redux saga class
 * initial account creation
 */
import {call, put, select, takeLatest} from 'redux-saga/effects';
import {API, graphqlOperation} from 'aws-amplify';

import {podSettings} from 'src/graphql/mutations';
import * as loadingActions from 'src/store/actions/loadingActions';
import * as userActions from 'src/store/actions/userActions';
import * as bankingActions from 'src/store/actions/bankingActions';
import * as types from '../actions/types';
import {IUpdatePodSettings} from 'src/models/actions/banking';
import {RootState} from '../root-state';
import {PodSettingsMutationInput} from 'src/types/graphql';

const getAthleteId = (state: RootState) => state.userReducer.user?.id;

export function* updatePodSettings({settings}: IUpdatePodSettings) {
  yield put(loadingActions.enableLoader());

  const athleteId = (yield select(getAthleteId)) as string | undefined;

  try {
    if (!athleteId) {
      throw new Error('Athlete ID is required to update the pod settings');
    }

    console.log('Attempting to update Pod Settings for user:', athleteId);
    console.log('new Pod Settings:', settings);

    const mutationInput: PodSettingsMutationInput = {
      athleteId: athleteId!,
      savings: settings.SAVINGS,
      investments: settings.INVESTMENTS,
      spending: settings.SPENDING,
    };

    yield call([API, 'graphql'], graphqlOperation(podSettings, mutationInput));

    yield put(userActions.updateUser({podSettings: settings}));

    yield put(bankingActions.podSettingsUpdated(true));
    yield put(loadingActions.disableLoader());
  } catch (error) {
    console.log('Error attempting to update pod settings:', error);
    yield put(loadingActions.disableLoader());
  }
}

export default function* bankingSaga() {
  yield takeLatest(types.UPDATE_POD_SETTINGS, updatePodSettings);
}
