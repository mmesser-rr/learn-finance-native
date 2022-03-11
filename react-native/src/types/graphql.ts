export enum InviteStatus {
  AVAILABLE = 'AVAILABLE',
  CHALLENGE = 'CHALLENGE',
  VERIFIED = 'VERIFIED',
  CLAIMED = 'CLAIMED',
}

export type GetInviteQuery = {
  getInvite: {
    code?: String;
    status?: InviteStatus;
    createdAt?: Date;
    updatedAt?: Date;
  };
};

export type CreatePlaidLink = {
  createPlaidLink: {
    access_token?: string;
    item_id?: string;
    link_token: string;
    new_access_token?: string;
    request_id: string;
  };
};

export type PodSettingsMutationInput = {
  athleteId: string;
  savings: number;
  investments: number;
  spending: number;
};
