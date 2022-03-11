import {PodSettings} from 'src/types/API';

export interface IUpdateHomeStepAction {
  step: string;
}

export interface IUpdatePodSettings {
  type: String;
  settings: PodSettings;
}

export interface IPodSettingsUpdated {
  type: String;
  updated: boolean;
}
