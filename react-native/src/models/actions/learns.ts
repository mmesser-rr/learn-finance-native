import { Learn } from "src/types/API";

export interface ILoadLearnsRequestState {
  type: string;
}

export interface IUpdateLearnsRequestState {
  type: string;
  learns: Learn[];
}