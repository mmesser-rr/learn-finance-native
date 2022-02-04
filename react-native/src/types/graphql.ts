export enum InviteStatus {
  AVAILABLE = 'AVAILABLE',
  CHALLENGE = 'CHALLENGE',
  VERIFIED = 'VERIFIED',
  CLAIMED = 'CLAIMED'
}

export type GetInviteQuery = {
  getInvite: {
    code?: String,
    status?: InviteStatus,
    createdAt?: Date;
    updatedAt?: Date;
  }
}
