import { UPDATE_HOME_STEP } from "./types";

export function updateHomeStep(step: string) {
  return {
    type: UPDATE_HOME_STEP,
    step,
  };
}
