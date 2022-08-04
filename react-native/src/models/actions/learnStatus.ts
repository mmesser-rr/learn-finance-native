export interface IUpdateLearnStatusRequestState {
  type: string;
  learnStatusId: string;
  athleteId: string;
  learnItemId: string;
  passedDepositIndex: number;
}