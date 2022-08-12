import { LearnStatus } from "src/types/API";

export interface ILoadLearnStatusesRequestState {
  type: string;
}

export interface IUpdateLearnStatusesRequestState {
  type: string;
  learnStatuses: LearnStatus[];
}