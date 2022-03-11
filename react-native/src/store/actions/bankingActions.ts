import {
  IPodSettingsUpdated,
  IUpdatePodSettings,
} from 'src/models/actions/banking';
import {PodSettings} from 'src/types/API';
import {
  POD_SETTINGS_UPDATED,
  UPDATE_HOME_STEP,
  UPDATE_POD_SETTINGS,
} from './types';

export function updateHomeStep(step: string) {
  return {
    type: UPDATE_HOME_STEP,
    step,
  };
}

export function updatePodSettings(settings: PodSettings): IUpdatePodSettings {
  return {
    type: UPDATE_POD_SETTINGS,
    settings,
  };
}

export function podSettingsUpdated(updated: boolean): IPodSettingsUpdated {
  return {
    type: POD_SETTINGS_UPDATED,
    updated,
  };
}
