/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type PhoneChallenge = {
  __typename: "PhoneChallenge",
  code: string,
  phoneNumber: string,
  verified: boolean,
  createdAt: string,
  updatedAt: string,
};

export type Invite = {
  __typename: "Invite",
  code: string,
  status: Status,
  createdAt: string,
  updatedAt: string,
};

export enum Status {
  AVAILABLE = "AVAILABLE",
  CHALLENGE = "CHALLENGE",
  VERIFIED = "VERIFIED",
  CLAIMED = "CLAIMED",
}


export type EmailChallenge = {
  __typename: "EmailChallenge",
  code: string,
  email: string,
  verified: boolean,
  createdAt: string,
  updatedAt: string,
};

export type AthleteAccount = {
  __typename: "AthleteAccount",
  athlete: Athlete,
  unitAccountId: string,
  routingCode: string,
  accountNumber: string,
  podName: string,
  id: string,
  createdAt: string,
  updatedAt: string,
  athleteAccountsId?: string | null,
  owner?: string | null,
};

export type Athlete = {
  __typename: "Athlete",
  firstName: string,
  lastName: string,
  mobilePhone: string,
  athleteTag?: string | null,
  email: string,
  tag?: string | null,
  level: AthleteLevel,
  sport: AthleteSport,
  team: AthleteTeam,
  address: Address,
  dateOfBirth: string,
  accounts?: ModelAthleteAccountConnection | null,
  unitLookup?: AthleteUnitLookup | null,
  podSettings: PodSettings,
  plaidToken?: string | null,
  unitToken?: string | null,
  plaidProcessorToken?: ProcessorToken | null,
  wyreAccountId?: string | null,
  isActive: boolean,
  id: string,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export enum AthleteLevel {
  COLLEGE = "COLLEGE",
  PROFESSIONAL = "PROFESSIONAL",
}


export type AthleteSport = {
  __typename: "AthleteSport",
  name: string,
  airTableId: string,
  isActive?: boolean | null,
};

export type AthleteTeam = {
  __typename: "AthleteTeam",
  name: string,
  airTableId: string,
  isActive?: boolean | null,
};

export type Address = {
  __typename: "Address",
  streetAddress: string,
  apt?: string | null,
  city: string,
  state: string,
  zipCode: string,
};

export type ModelAthleteAccountConnection = {
  __typename: "ModelAthleteAccountConnection",
  items:  Array<AthleteAccount | null >,
  nextToken?: string | null,
};

export type AthleteUnitLookup = {
  __typename: "AthleteUnitLookup",
  appId: string,
  custId?: string | null,
};

export type PodSettings = {
  __typename: "PodSettings",
  SAVINGS: number,
  INVESTMENTS: number,
  SPENDING: number,
};

export type ProcessorToken = {
  __typename: "ProcessorToken",
  plaidAccountId: string,
  processorToken?: string | null,
};

export type UnitAccount = {
  __typename: "UnitAccount",
  type?: string | null,
  id?: string | null,
  attributes?: Attributes | null,
};

export type Attributes = {
  __typename: "Attributes",
  createdAt?: string | null,
  direction?: string | null,
  amount?: number | null,
  balance?: number | null,
  summary?: string | null,
  description?: string | null,
  counterparty?: Counterparty | null,
  name?: string | null,
  status?: string | null,
  date?: string | null,
  routingNumber?: string | null,
  accountNumber?: string | null,
  currency?: string | null,
  verificationToken?: string | null,
  expiresIn?: number | null,
  hold?: number | null,
  available?: number | null,
  tags?: Tags | null,
};

export type Counterparty = {
  __typename: "Counterparty",
  name?: string | null,
  routingNumber?: string | null,
  accountNumber?: string | null,
  accountType?: string | null,
};

export type Tags = {
  __typename: "Tags",
  podName?: string | null,
  athleteId?: string | null,
};

export type PlaidToken = {
  __typename: "PlaidToken",
  access_token?: string | null,
  item_id?: string | null,
  link_token?: string | null,
  request_id?: string | null,
  new_access_token?: string | null,
};

export type CreateEmailChallengeInput = {
  code: string,
  email: string,
  verified: boolean,
};

export type ModelEmailChallengeConditionInput = {
  verified?: ModelBooleanInput | null,
  and?: Array< ModelEmailChallengeConditionInput | null > | null,
  or?: Array< ModelEmailChallengeConditionInput | null > | null,
  not?: ModelEmailChallengeConditionInput | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type UpdateEmailChallengeInput = {
  code: string,
  email: string,
  verified?: boolean | null,
};

export type DeleteEmailChallengeInput = {
  code: string,
  email: string,
};

export type CreateInviteInput = {
  code: string,
  status: Status,
};

export type ModelInviteConditionInput = {
  and?: Array< ModelInviteConditionInput | null > | null,
  or?: Array< ModelInviteConditionInput | null > | null,
  not?: ModelInviteConditionInput | null,
};

export type UpdateInviteInput = {
  code: string,
  status: Status,
};

export type DeleteInviteInput = {
  code: string,
  status: Status,
};

export type CreatePhoneChallengeInput = {
  code: string,
  phoneNumber: string,
  verified: boolean,
};

export type ModelPhoneChallengeConditionInput = {
  verified?: ModelBooleanInput | null,
  and?: Array< ModelPhoneChallengeConditionInput | null > | null,
  or?: Array< ModelPhoneChallengeConditionInput | null > | null,
  not?: ModelPhoneChallengeConditionInput | null,
};

export type UpdatePhoneChallengeInput = {
  code: string,
  phoneNumber: string,
  verified?: boolean | null,
};

export type DeletePhoneChallengeInput = {
  code: string,
  phoneNumber: string,
};

export type CreateRecentTransactionInput = {
  transactionId: string,
  athleteId: string,
  status: string,
  amount?: number | null,
  idempotencyKey?: string | null,
  direction?: string | null,
  createdAt?: string | null,
  read?: boolean | null,
  settled?: string | null,
  podAllocation?: PodSettingsInput | null,
  id?: string | null,
};

export type PodSettingsInput = {
  SAVINGS: number,
  INVESTMENTS: number,
  SPENDING: number,
};

export type ModelRecentTransactionConditionInput = {
  transactionId?: ModelStringInput | null,
  athleteId?: ModelStringInput | null,
  status?: ModelStringInput | null,
  amount?: ModelFloatInput | null,
  idempotencyKey?: ModelStringInput | null,
  direction?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  read?: ModelBooleanInput | null,
  settled?: ModelStringInput | null,
  and?: Array< ModelRecentTransactionConditionInput | null > | null,
  or?: Array< ModelRecentTransactionConditionInput | null > | null,
  not?: ModelRecentTransactionConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type RecentTransaction = {
  __typename: "RecentTransaction",
  transactionId: string,
  athleteId: string,
  status: string,
  amount?: number | null,
  idempotencyKey?: string | null,
  direction?: string | null,
  createdAt?: string | null,
  read?: boolean | null,
  settled?: string | null,
  podAllocation?: PodSettings | null,
  id: string,
  updatedAt: string,
};

export type UpdateRecentTransactionInput = {
  transactionId?: string | null,
  athleteId?: string | null,
  status?: string | null,
  amount?: number | null,
  idempotencyKey?: string | null,
  direction?: string | null,
  createdAt?: string | null,
  read?: boolean | null,
  settled?: string | null,
  podAllocation?: PodSettingsInput | null,
  id: string,
};

export type DeleteRecentTransactionInput = {
  id: string,
};

export type CreateAthleteInput = {
  firstName: string,
  lastName: string,
  mobilePhone: string,
  athleteTag?: string | null,
  email: string,
  tag?: string | null,
  level: AthleteLevel,
  sport: AthleteSportInput,
  team: AthleteTeamInput,
  address: AddressInput,
  dateOfBirth: string,
  unitLookup?: AthleteUnitLookupInput | null,
  podSettings: PodSettingsInput,
  plaidToken?: string | null,
  unitToken?: string | null,
  plaidProcessorToken?: ProcessorTokenInput | null,
  wyreAccountId?: string | null,
  isActive: boolean,
  id?: string | null,
};

export type AthleteSportInput = {
  name: string,
  airTableId: string,
  isActive?: boolean | null,
};

export type AthleteTeamInput = {
  name: string,
  airTableId: string,
  isActive?: boolean | null,
};

export type AddressInput = {
  streetAddress: string,
  apt?: string | null,
  city: string,
  state: string,
  zipCode: string,
};

export type AthleteUnitLookupInput = {
  appId: string,
  custId?: string | null,
};

export type ProcessorTokenInput = {
  plaidAccountId: string,
  processorToken?: string | null,
};

export type ModelAthleteConditionInput = {
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  mobilePhone?: ModelStringInput | null,
  athleteTag?: ModelStringInput | null,
  email?: ModelStringInput | null,
  tag?: ModelStringInput | null,
  level?: ModelAthleteLevelInput | null,
  dateOfBirth?: ModelStringInput | null,
  plaidToken?: ModelStringInput | null,
  unitToken?: ModelStringInput | null,
  wyreAccountId?: ModelStringInput | null,
  isActive?: ModelBooleanInput | null,
  and?: Array< ModelAthleteConditionInput | null > | null,
  or?: Array< ModelAthleteConditionInput | null > | null,
  not?: ModelAthleteConditionInput | null,
};

export type ModelAthleteLevelInput = {
  eq?: AthleteLevel | null,
  ne?: AthleteLevel | null,
};

export type UpdateAthleteInput = {
  firstName?: string | null,
  lastName?: string | null,
  mobilePhone?: string | null,
  athleteTag?: string | null,
  email?: string | null,
  tag?: string | null,
  level?: AthleteLevel | null,
  sport?: AthleteSportInput | null,
  team?: AthleteTeamInput | null,
  address?: AddressInput | null,
  dateOfBirth?: string | null,
  unitLookup?: AthleteUnitLookupInput | null,
  podSettings?: PodSettingsInput | null,
  plaidToken?: string | null,
  unitToken?: string | null,
  plaidProcessorToken?: ProcessorTokenInput | null,
  wyreAccountId?: string | null,
  isActive?: boolean | null,
  id: string,
};

export type DeleteAthleteInput = {
  id: string,
};

export type CreateAthleteAccountInput = {
  unitAccountId: string,
  routingCode: string,
  accountNumber: string,
  podName: string,
  id?: string | null,
  athleteAccountsId?: string | null,
};

export type ModelAthleteAccountConditionInput = {
  unitAccountId?: ModelStringInput | null,
  routingCode?: ModelStringInput | null,
  accountNumber?: ModelStringInput | null,
  podName?: ModelStringInput | null,
  and?: Array< ModelAthleteAccountConditionInput | null > | null,
  or?: Array< ModelAthleteAccountConditionInput | null > | null,
  not?: ModelAthleteAccountConditionInput | null,
  athleteAccountsId?: ModelIDInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateAthleteAccountInput = {
  unitAccountId?: string | null,
  routingCode?: string | null,
  accountNumber?: string | null,
  podName?: string | null,
  id: string,
  athleteAccountsId?: string | null,
};

export type DeleteAthleteAccountInput = {
  id: string,
};

export type PlaidAccountDetail = {
  __typename: "PlaidAccountDetail",
  account_id?: string | null,
  balances?: Balance | null,
  mask?: string | null,
  name?: string | null,
  official_name?: string | null,
  subtype?: string | null,
  type?: string | null,
};

export type Balance = {
  __typename: "Balance",
  available?: number | null,
  current?: string | null,
  iso_currency_code?: string | null,
  limit?: string | null,
  unofficial_currency_code?: string | null,
};

export type ModelStringKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelEmailChallengeFilterInput = {
  code?: ModelStringInput | null,
  email?: ModelStringInput | null,
  verified?: ModelBooleanInput | null,
  and?: Array< ModelEmailChallengeFilterInput | null > | null,
  or?: Array< ModelEmailChallengeFilterInput | null > | null,
  not?: ModelEmailChallengeFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelEmailChallengeConnection = {
  __typename: "ModelEmailChallengeConnection",
  items:  Array<EmailChallenge | null >,
  nextToken?: string | null,
};

export type ModelInviteFilterInput = {
  code?: ModelStringInput | null,
  status?: ModelStatusInput | null,
  and?: Array< ModelInviteFilterInput | null > | null,
  or?: Array< ModelInviteFilterInput | null > | null,
  not?: ModelInviteFilterInput | null,
};

export type ModelStatusInput = {
  eq?: Status | null,
  ne?: Status | null,
};

export type ModelInviteConnection = {
  __typename: "ModelInviteConnection",
  items:  Array<Invite | null >,
  nextToken?: string | null,
};

export type ModelPhoneChallengeFilterInput = {
  code?: ModelStringInput | null,
  phoneNumber?: ModelStringInput | null,
  verified?: ModelBooleanInput | null,
  and?: Array< ModelPhoneChallengeFilterInput | null > | null,
  or?: Array< ModelPhoneChallengeFilterInput | null > | null,
  not?: ModelPhoneChallengeFilterInput | null,
};

export type ModelPhoneChallengeConnection = {
  __typename: "ModelPhoneChallengeConnection",
  items:  Array<PhoneChallenge | null >,
  nextToken?: string | null,
};

export type ModelRecentTransactionFilterInput = {
  transactionId?: ModelStringInput | null,
  athleteId?: ModelStringInput | null,
  status?: ModelStringInput | null,
  amount?: ModelFloatInput | null,
  idempotencyKey?: ModelStringInput | null,
  direction?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  read?: ModelBooleanInput | null,
  settled?: ModelStringInput | null,
  and?: Array< ModelRecentTransactionFilterInput | null > | null,
  or?: Array< ModelRecentTransactionFilterInput | null > | null,
  not?: ModelRecentTransactionFilterInput | null,
};

export type ModelRecentTransactionConnection = {
  __typename: "ModelRecentTransactionConnection",
  items:  Array<RecentTransaction | null >,
  nextToken?: string | null,
};

export type ModelAthleteFilterInput = {
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  mobilePhone?: ModelStringInput | null,
  athleteTag?: ModelStringInput | null,
  email?: ModelStringInput | null,
  tag?: ModelStringInput | null,
  level?: ModelAthleteLevelInput | null,
  dateOfBirth?: ModelStringInput | null,
  plaidToken?: ModelStringInput | null,
  unitToken?: ModelStringInput | null,
  wyreAccountId?: ModelStringInput | null,
  isActive?: ModelBooleanInput | null,
  and?: Array< ModelAthleteFilterInput | null > | null,
  or?: Array< ModelAthleteFilterInput | null > | null,
  not?: ModelAthleteFilterInput | null,
};

export type ModelAthleteConnection = {
  __typename: "ModelAthleteConnection",
  items:  Array<Athlete | null >,
  nextToken?: string | null,
};

export type ModelAthleteAccountFilterInput = {
  unitAccountId?: ModelStringInput | null,
  routingCode?: ModelStringInput | null,
  accountNumber?: ModelStringInput | null,
  podName?: ModelStringInput | null,
  and?: Array< ModelAthleteAccountFilterInput | null > | null,
  or?: Array< ModelAthleteAccountFilterInput | null > | null,
  not?: ModelAthleteAccountFilterInput | null,
  athleteAccountsId?: ModelIDInput | null,
};

export type InitiatePhoneChallengeMutationVariables = {
  phoneNumber: string,
};

export type InitiatePhoneChallengeMutation = {
  initiatePhoneChallenge?:  {
    __typename: "PhoneChallenge",
    code: string,
    phoneNumber: string,
    verified: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ReturnUserChallengeMutationVariables = {
  phoneNumber: string,
};

export type ReturnUserChallengeMutation = {
  returnUserChallenge?:  {
    __typename: "PhoneChallenge",
    code: string,
    phoneNumber: string,
    verified: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ValidateReturnUserMutationVariables = {
  phoneNumber: string,
  code: string,
};

export type ValidateReturnUserMutation = {
  validateReturnUser: boolean,
};

export type TryPhoneChallengeMutationVariables = {
  phoneNumber: string,
  code: string,
};

export type TryPhoneChallengeMutation = {
  tryPhoneChallenge: boolean,
};

export type GenerateInviteMutation = {
  generateInvite?:  {
    __typename: "Invite",
    code: string,
    status: Status,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type InitiateEmailChallengeMutationVariables = {
  email: string,
};

export type InitiateEmailChallengeMutation = {
  initiateEmailChallenge?:  {
    __typename: "EmailChallenge",
    code: string,
    email: string,
    verified: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type TryEmailChallengeMutationVariables = {
  email: string,
  code: string,
};

export type TryEmailChallengeMutation = {
  tryEmailChallenge: boolean,
};

export type OpenAppAndAccountMutationVariables = {
  ssn: string,
  athleteId: string,
};

export type OpenAppAndAccountMutation = {
  openAppAndAccount?:  Array< {
    __typename: "AthleteAccount",
    athlete:  {
      __typename: "Athlete",
      firstName: string,
      lastName: string,
      mobilePhone: string,
      athleteTag?: string | null,
      email: string,
      tag?: string | null,
      level: AthleteLevel,
      sport:  {
        __typename: "AthleteSport",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      },
      team:  {
        __typename: "AthleteTeam",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      },
      address:  {
        __typename: "Address",
        streetAddress: string,
        apt?: string | null,
        city: string,
        state: string,
        zipCode: string,
      },
      dateOfBirth: string,
      accounts?:  {
        __typename: "ModelAthleteAccountConnection",
        nextToken?: string | null,
      } | null,
      unitLookup?:  {
        __typename: "AthleteUnitLookup",
        appId: string,
        custId?: string | null,
      } | null,
      podSettings:  {
        __typename: "PodSettings",
        SAVINGS: number,
        INVESTMENTS: number,
        SPENDING: number,
      },
      plaidToken?: string | null,
      unitToken?: string | null,
      plaidProcessorToken?:  {
        __typename: "ProcessorToken",
        plaidAccountId: string,
        processorToken?: string | null,
      } | null,
      wyreAccountId?: string | null,
      isActive: boolean,
      id: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    unitAccountId: string,
    routingCode: string,
    accountNumber: string,
    podName: string,
    id: string,
    createdAt: string,
    updatedAt: string,
    athleteAccountsId?: string | null,
    owner?: string | null,
  } | null > | null,
};

export type OpenAccountMutationVariables = {
  athleteId: string,
  podName: string,
};

export type OpenAccountMutation = {
  openAccount?:  {
    __typename: "AthleteAccount",
    athlete:  {
      __typename: "Athlete",
      firstName: string,
      lastName: string,
      mobilePhone: string,
      athleteTag?: string | null,
      email: string,
      tag?: string | null,
      level: AthleteLevel,
      sport:  {
        __typename: "AthleteSport",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      },
      team:  {
        __typename: "AthleteTeam",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      },
      address:  {
        __typename: "Address",
        streetAddress: string,
        apt?: string | null,
        city: string,
        state: string,
        zipCode: string,
      },
      dateOfBirth: string,
      accounts?:  {
        __typename: "ModelAthleteAccountConnection",
        nextToken?: string | null,
      } | null,
      unitLookup?:  {
        __typename: "AthleteUnitLookup",
        appId: string,
        custId?: string | null,
      } | null,
      podSettings:  {
        __typename: "PodSettings",
        SAVINGS: number,
        INVESTMENTS: number,
        SPENDING: number,
      },
      plaidToken?: string | null,
      unitToken?: string | null,
      plaidProcessorToken?:  {
        __typename: "ProcessorToken",
        plaidAccountId: string,
        processorToken?: string | null,
      } | null,
      wyreAccountId?: string | null,
      isActive: boolean,
      id: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    unitAccountId: string,
    routingCode: string,
    accountNumber: string,
    podName: string,
    id: string,
    createdAt: string,
    updatedAt: string,
    athleteAccountsId?: string | null,
    owner?: string | null,
  } | null,
};

export type UnitWebhookServiceMutationVariables = {
  data?: string | null,
};

export type UnitWebhookServiceMutation = {
  unitWebhookService?:  {
    __typename: "UnitAccount",
    type?: string | null,
    id?: string | null,
    attributes?:  {
      __typename: "Attributes",
      createdAt?: string | null,
      direction?: string | null,
      amount?: number | null,
      balance?: number | null,
      summary?: string | null,
      description?: string | null,
      counterparty?:  {
        __typename: "Counterparty",
        name?: string | null,
        routingNumber?: string | null,
        accountNumber?: string | null,
        accountType?: string | null,
      } | null,
      name?: string | null,
      status?: string | null,
      date?: string | null,
      routingNumber?: string | null,
      accountNumber?: string | null,
      currency?: string | null,
      verificationToken?: string | null,
      expiresIn?: number | null,
      hold?: number | null,
      available?: number | null,
      tags?:  {
        __typename: "Tags",
        podName?: string | null,
        athleteId?: string | null,
      } | null,
    } | null,
  } | null,
};

export type PodSettingsMutationVariables = {
  athleteId: string,
  savings: number,
  investments: number,
  spending: number,
};

export type PodSettingsMutation = {
  podSettings?:  {
    __typename: "AthleteAccount",
    athlete:  {
      __typename: "Athlete",
      firstName: string,
      lastName: string,
      mobilePhone: string,
      athleteTag?: string | null,
      email: string,
      tag?: string | null,
      level: AthleteLevel,
      sport:  {
        __typename: "AthleteSport",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      },
      team:  {
        __typename: "AthleteTeam",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      },
      address:  {
        __typename: "Address",
        streetAddress: string,
        apt?: string | null,
        city: string,
        state: string,
        zipCode: string,
      },
      dateOfBirth: string,
      accounts?:  {
        __typename: "ModelAthleteAccountConnection",
        nextToken?: string | null,
      } | null,
      unitLookup?:  {
        __typename: "AthleteUnitLookup",
        appId: string,
        custId?: string | null,
      } | null,
      podSettings:  {
        __typename: "PodSettings",
        SAVINGS: number,
        INVESTMENTS: number,
        SPENDING: number,
      },
      plaidToken?: string | null,
      unitToken?: string | null,
      plaidProcessorToken?:  {
        __typename: "ProcessorToken",
        plaidAccountId: string,
        processorToken?: string | null,
      } | null,
      wyreAccountId?: string | null,
      isActive: boolean,
      id: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    unitAccountId: string,
    routingCode: string,
    accountNumber: string,
    podName: string,
    id: string,
    createdAt: string,
    updatedAt: string,
    athleteAccountsId?: string | null,
    owner?: string | null,
  } | null,
};

export type CreatePlaidLinkMutationVariables = {
  athleteId: string,
};

export type CreatePlaidLinkMutation = {
  createPlaidLink?:  {
    __typename: "PlaidToken",
    access_token?: string | null,
    item_id?: string | null,
    link_token?: string | null,
    request_id?: string | null,
    new_access_token?: string | null,
  } | null,
};

export type UpdatePlaidLinkMutationVariables = {
  athleteId: string,
  accessToken: string,
};

export type UpdatePlaidLinkMutation = {
  updatePlaidLink?:  {
    __typename: "PlaidToken",
    access_token?: string | null,
    item_id?: string | null,
    link_token?: string | null,
    request_id?: string | null,
    new_access_token?: string | null,
  } | null,
};

export type CreateAthleteUnitTokenMutationVariables = {
  athleteId: string,
  verificationToken: string,
  verificationCode: string,
};

export type CreateAthleteUnitTokenMutation = {
  createAthleteUnitToken?:  {
    __typename: "UnitAccount",
    type?: string | null,
    id?: string | null,
    attributes?:  {
      __typename: "Attributes",
      createdAt?: string | null,
      direction?: string | null,
      amount?: number | null,
      balance?: number | null,
      summary?: string | null,
      description?: string | null,
      counterparty?:  {
        __typename: "Counterparty",
        name?: string | null,
        routingNumber?: string | null,
        accountNumber?: string | null,
        accountType?: string | null,
      } | null,
      name?: string | null,
      status?: string | null,
      date?: string | null,
      routingNumber?: string | null,
      accountNumber?: string | null,
      currency?: string | null,
      verificationToken?: string | null,
      expiresIn?: number | null,
      hold?: number | null,
      available?: number | null,
      tags?:  {
        __typename: "Tags",
        podName?: string | null,
        athleteId?: string | null,
      } | null,
    } | null,
  } | null,
};

export type AthleteUnitTokenVerificationMutationVariables = {
  athleteId: string,
};

export type AthleteUnitTokenVerificationMutation = {
  athleteUnitTokenVerification?:  {
    __typename: "UnitAccount",
    type?: string | null,
    id?: string | null,
    attributes?:  {
      __typename: "Attributes",
      createdAt?: string | null,
      direction?: string | null,
      amount?: number | null,
      balance?: number | null,
      summary?: string | null,
      description?: string | null,
      counterparty?:  {
        __typename: "Counterparty",
        name?: string | null,
        routingNumber?: string | null,
        accountNumber?: string | null,
        accountType?: string | null,
      } | null,
      name?: string | null,
      status?: string | null,
      date?: string | null,
      routingNumber?: string | null,
      accountNumber?: string | null,
      currency?: string | null,
      verificationToken?: string | null,
      expiresIn?: number | null,
      hold?: number | null,
      available?: number | null,
      tags?:  {
        __typename: "Tags",
        podName?: string | null,
        athleteId?: string | null,
      } | null,
    } | null,
  } | null,
};

export type CreateWyreAccountMutationVariables = {
  athleteId: string,
};

export type CreateWyreAccountMutation = {
  createWyreAccount?:  {
    __typename: "AthleteAccount",
    athlete:  {
      __typename: "Athlete",
      firstName: string,
      lastName: string,
      mobilePhone: string,
      athleteTag?: string | null,
      email: string,
      tag?: string | null,
      level: AthleteLevel,
      sport:  {
        __typename: "AthleteSport",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      },
      team:  {
        __typename: "AthleteTeam",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      },
      address:  {
        __typename: "Address",
        streetAddress: string,
        apt?: string | null,
        city: string,
        state: string,
        zipCode: string,
      },
      dateOfBirth: string,
      accounts?:  {
        __typename: "ModelAthleteAccountConnection",
        nextToken?: string | null,
      } | null,
      unitLookup?:  {
        __typename: "AthleteUnitLookup",
        appId: string,
        custId?: string | null,
      } | null,
      podSettings:  {
        __typename: "PodSettings",
        SAVINGS: number,
        INVESTMENTS: number,
        SPENDING: number,
      },
      plaidToken?: string | null,
      unitToken?: string | null,
      plaidProcessorToken?:  {
        __typename: "ProcessorToken",
        plaidAccountId: string,
        processorToken?: string | null,
      } | null,
      wyreAccountId?: string | null,
      isActive: boolean,
      id: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    unitAccountId: string,
    routingCode: string,
    accountNumber: string,
    podName: string,
    id: string,
    createdAt: string,
    updatedAt: string,
    athleteAccountsId?: string | null,
    owner?: string | null,
  } | null,
};

export type CreatePlaidPaymentMutationVariables = {
  athleteId: string,
  plaidAccountId: string,
  amount: number,
  description?: string | null,
  idempotencyKey: string,
};

export type CreatePlaidPaymentMutation = {
  createPlaidPayment?:  {
    __typename: "UnitAccount",
    type?: string | null,
    id?: string | null,
    attributes?:  {
      __typename: "Attributes",
      createdAt?: string | null,
      direction?: string | null,
      amount?: number | null,
      balance?: number | null,
      summary?: string | null,
      description?: string | null,
      counterparty?:  {
        __typename: "Counterparty",
        name?: string | null,
        routingNumber?: string | null,
        accountNumber?: string | null,
        accountType?: string | null,
      } | null,
      name?: string | null,
      status?: string | null,
      date?: string | null,
      routingNumber?: string | null,
      accountNumber?: string | null,
      currency?: string | null,
      verificationToken?: string | null,
      expiresIn?: number | null,
      hold?: number | null,
      available?: number | null,
      tags?:  {
        __typename: "Tags",
        podName?: string | null,
        athleteId?: string | null,
      } | null,
    } | null,
  } | null,
};

export type BookPaymentMutationVariables = {
  athleteId: string,
  unitAccountId: string,
  amount: number,
  description?: string | null,
  receiverUnitAccountId: string,
  receiverAccountType?: string | null,
  idempotencyKey: string,
};

export type BookPaymentMutation = {
  bookPayment?:  {
    __typename: "UnitAccount",
    type?: string | null,
    id?: string | null,
    attributes?:  {
      __typename: "Attributes",
      createdAt?: string | null,
      direction?: string | null,
      amount?: number | null,
      balance?: number | null,
      summary?: string | null,
      description?: string | null,
      counterparty?:  {
        __typename: "Counterparty",
        name?: string | null,
        routingNumber?: string | null,
        accountNumber?: string | null,
        accountType?: string | null,
      } | null,
      name?: string | null,
      status?: string | null,
      date?: string | null,
      routingNumber?: string | null,
      accountNumber?: string | null,
      currency?: string | null,
      verificationToken?: string | null,
      expiresIn?: number | null,
      hold?: number | null,
      available?: number | null,
      tags?:  {
        __typename: "Tags",
        podName?: string | null,
        athleteId?: string | null,
      } | null,
    } | null,
  } | null,
};

export type DebitAccountMutationVariables = {
  athleteId: string,
  amount: number,
  description?: string | null,
  receiverName: string,
  receiverRoutingNumber: string,
  receiverAccountNumber: string,
  receiverAccountType?: string | null,
  addenda?: string | null,
  idempotencyKey: string,
};

export type DebitAccountMutation = {
  debitAccount?:  {
    __typename: "UnitAccount",
    type?: string | null,
    id?: string | null,
    attributes?:  {
      __typename: "Attributes",
      createdAt?: string | null,
      direction?: string | null,
      amount?: number | null,
      balance?: number | null,
      summary?: string | null,
      description?: string | null,
      counterparty?:  {
        __typename: "Counterparty",
        name?: string | null,
        routingNumber?: string | null,
        accountNumber?: string | null,
        accountType?: string | null,
      } | null,
      name?: string | null,
      status?: string | null,
      date?: string | null,
      routingNumber?: string | null,
      accountNumber?: string | null,
      currency?: string | null,
      verificationToken?: string | null,
      expiresIn?: number | null,
      hold?: number | null,
      available?: number | null,
      tags?:  {
        __typename: "Tags",
        podName?: string | null,
        athleteId?: string | null,
      } | null,
    } | null,
  } | null,
};

export type CreditAccountMutationVariables = {
  athleteId: string,
  amount: number,
  description?: string | null,
  receiverName: string,
  receiverRoutingNumber: string,
  receiverAccountNumber: string,
  receiverAccountType?: string | null,
  addenda?: string | null,
  idempotencyKey: string,
};

export type CreditAccountMutation = {
  creditAccount?:  {
    __typename: "UnitAccount",
    type?: string | null,
    id?: string | null,
    attributes?:  {
      __typename: "Attributes",
      createdAt?: string | null,
      direction?: string | null,
      amount?: number | null,
      balance?: number | null,
      summary?: string | null,
      description?: string | null,
      counterparty?:  {
        __typename: "Counterparty",
        name?: string | null,
        routingNumber?: string | null,
        accountNumber?: string | null,
        accountType?: string | null,
      } | null,
      name?: string | null,
      status?: string | null,
      date?: string | null,
      routingNumber?: string | null,
      accountNumber?: string | null,
      currency?: string | null,
      verificationToken?: string | null,
      expiresIn?: number | null,
      hold?: number | null,
      available?: number | null,
      tags?:  {
        __typename: "Tags",
        podName?: string | null,
        athleteId?: string | null,
      } | null,
    } | null,
  } | null,
};

export type CreateEmailChallengeMutationVariables = {
  input: CreateEmailChallengeInput,
  condition?: ModelEmailChallengeConditionInput | null,
};

export type CreateEmailChallengeMutation = {
  createEmailChallenge?:  {
    __typename: "EmailChallenge",
    code: string,
    email: string,
    verified: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateEmailChallengeMutationVariables = {
  input: UpdateEmailChallengeInput,
  condition?: ModelEmailChallengeConditionInput | null,
};

export type UpdateEmailChallengeMutation = {
  updateEmailChallenge?:  {
    __typename: "EmailChallenge",
    code: string,
    email: string,
    verified: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteEmailChallengeMutationVariables = {
  input: DeleteEmailChallengeInput,
  condition?: ModelEmailChallengeConditionInput | null,
};

export type DeleteEmailChallengeMutation = {
  deleteEmailChallenge?:  {
    __typename: "EmailChallenge",
    code: string,
    email: string,
    verified: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateInviteMutationVariables = {
  input: CreateInviteInput,
  condition?: ModelInviteConditionInput | null,
};

export type CreateInviteMutation = {
  createInvite?:  {
    __typename: "Invite",
    code: string,
    status: Status,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateInviteMutationVariables = {
  input: UpdateInviteInput,
  condition?: ModelInviteConditionInput | null,
};

export type UpdateInviteMutation = {
  updateInvite?:  {
    __typename: "Invite",
    code: string,
    status: Status,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteInviteMutationVariables = {
  input: DeleteInviteInput,
  condition?: ModelInviteConditionInput | null,
};

export type DeleteInviteMutation = {
  deleteInvite?:  {
    __typename: "Invite",
    code: string,
    status: Status,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreatePhoneChallengeMutationVariables = {
  input: CreatePhoneChallengeInput,
  condition?: ModelPhoneChallengeConditionInput | null,
};

export type CreatePhoneChallengeMutation = {
  createPhoneChallenge?:  {
    __typename: "PhoneChallenge",
    code: string,
    phoneNumber: string,
    verified: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdatePhoneChallengeMutationVariables = {
  input: UpdatePhoneChallengeInput,
  condition?: ModelPhoneChallengeConditionInput | null,
};

export type UpdatePhoneChallengeMutation = {
  updatePhoneChallenge?:  {
    __typename: "PhoneChallenge",
    code: string,
    phoneNumber: string,
    verified: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeletePhoneChallengeMutationVariables = {
  input: DeletePhoneChallengeInput,
  condition?: ModelPhoneChallengeConditionInput | null,
};

export type DeletePhoneChallengeMutation = {
  deletePhoneChallenge?:  {
    __typename: "PhoneChallenge",
    code: string,
    phoneNumber: string,
    verified: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateRecentTransactionMutationVariables = {
  input: CreateRecentTransactionInput,
  condition?: ModelRecentTransactionConditionInput | null,
};

export type CreateRecentTransactionMutation = {
  createRecentTransaction?:  {
    __typename: "RecentTransaction",
    transactionId: string,
    athleteId: string,
    status: string,
    amount?: number | null,
    idempotencyKey?: string | null,
    direction?: string | null,
    createdAt?: string | null,
    read?: boolean | null,
    settled?: string | null,
    podAllocation?:  {
      __typename: "PodSettings",
      SAVINGS: number,
      INVESTMENTS: number,
      SPENDING: number,
    } | null,
    id: string,
    updatedAt: string,
  } | null,
};

export type UpdateRecentTransactionMutationVariables = {
  input: UpdateRecentTransactionInput,
  condition?: ModelRecentTransactionConditionInput | null,
};

export type UpdateRecentTransactionMutation = {
  updateRecentTransaction?:  {
    __typename: "RecentTransaction",
    transactionId: string,
    athleteId: string,
    status: string,
    amount?: number | null,
    idempotencyKey?: string | null,
    direction?: string | null,
    createdAt?: string | null,
    read?: boolean | null,
    settled?: string | null,
    podAllocation?:  {
      __typename: "PodSettings",
      SAVINGS: number,
      INVESTMENTS: number,
      SPENDING: number,
    } | null,
    id: string,
    updatedAt: string,
  } | null,
};

export type DeleteRecentTransactionMutationVariables = {
  input: DeleteRecentTransactionInput,
  condition?: ModelRecentTransactionConditionInput | null,
};

export type DeleteRecentTransactionMutation = {
  deleteRecentTransaction?:  {
    __typename: "RecentTransaction",
    transactionId: string,
    athleteId: string,
    status: string,
    amount?: number | null,
    idempotencyKey?: string | null,
    direction?: string | null,
    createdAt?: string | null,
    read?: boolean | null,
    settled?: string | null,
    podAllocation?:  {
      __typename: "PodSettings",
      SAVINGS: number,
      INVESTMENTS: number,
      SPENDING: number,
    } | null,
    id: string,
    updatedAt: string,
  } | null,
};

export type CreateAthleteMutationVariables = {
  input: CreateAthleteInput,
  condition?: ModelAthleteConditionInput | null,
};

export type CreateAthleteMutation = {
  createAthlete?:  {
    __typename: "Athlete",
    firstName: string,
    lastName: string,
    mobilePhone: string,
    athleteTag?: string | null,
    email: string,
    tag?: string | null,
    level: AthleteLevel,
    sport:  {
      __typename: "AthleteSport",
      name: string,
      airTableId: string,
      isActive?: boolean | null,
    },
    team:  {
      __typename: "AthleteTeam",
      name: string,
      airTableId: string,
      isActive?: boolean | null,
    },
    address:  {
      __typename: "Address",
      streetAddress: string,
      apt?: string | null,
      city: string,
      state: string,
      zipCode: string,
    },
    dateOfBirth: string,
    accounts?:  {
      __typename: "ModelAthleteAccountConnection",
      items:  Array< {
        __typename: "AthleteAccount",
        unitAccountId: string,
        routingCode: string,
        accountNumber: string,
        podName: string,
        id: string,
        createdAt: string,
        updatedAt: string,
        athleteAccountsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    unitLookup?:  {
      __typename: "AthleteUnitLookup",
      appId: string,
      custId?: string | null,
    } | null,
    podSettings:  {
      __typename: "PodSettings",
      SAVINGS: number,
      INVESTMENTS: number,
      SPENDING: number,
    },
    plaidToken?: string | null,
    unitToken?: string | null,
    plaidProcessorToken?:  {
      __typename: "ProcessorToken",
      plaidAccountId: string,
      processorToken?: string | null,
    } | null,
    wyreAccountId?: string | null,
    isActive: boolean,
    id: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateAthleteMutationVariables = {
  input: UpdateAthleteInput,
  condition?: ModelAthleteConditionInput | null,
};

export type UpdateAthleteMutation = {
  updateAthlete?:  {
    __typename: "Athlete",
    firstName: string,
    lastName: string,
    mobilePhone: string,
    athleteTag?: string | null,
    email: string,
    tag?: string | null,
    level: AthleteLevel,
    sport:  {
      __typename: "AthleteSport",
      name: string,
      airTableId: string,
      isActive?: boolean | null,
    },
    team:  {
      __typename: "AthleteTeam",
      name: string,
      airTableId: string,
      isActive?: boolean | null,
    },
    address:  {
      __typename: "Address",
      streetAddress: string,
      apt?: string | null,
      city: string,
      state: string,
      zipCode: string,
    },
    dateOfBirth: string,
    accounts?:  {
      __typename: "ModelAthleteAccountConnection",
      items:  Array< {
        __typename: "AthleteAccount",
        unitAccountId: string,
        routingCode: string,
        accountNumber: string,
        podName: string,
        id: string,
        createdAt: string,
        updatedAt: string,
        athleteAccountsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    unitLookup?:  {
      __typename: "AthleteUnitLookup",
      appId: string,
      custId?: string | null,
    } | null,
    podSettings:  {
      __typename: "PodSettings",
      SAVINGS: number,
      INVESTMENTS: number,
      SPENDING: number,
    },
    plaidToken?: string | null,
    unitToken?: string | null,
    plaidProcessorToken?:  {
      __typename: "ProcessorToken",
      plaidAccountId: string,
      processorToken?: string | null,
    } | null,
    wyreAccountId?: string | null,
    isActive: boolean,
    id: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteAthleteMutationVariables = {
  input: DeleteAthleteInput,
  condition?: ModelAthleteConditionInput | null,
};

export type DeleteAthleteMutation = {
  deleteAthlete?:  {
    __typename: "Athlete",
    firstName: string,
    lastName: string,
    mobilePhone: string,
    athleteTag?: string | null,
    email: string,
    tag?: string | null,
    level: AthleteLevel,
    sport:  {
      __typename: "AthleteSport",
      name: string,
      airTableId: string,
      isActive?: boolean | null,
    },
    team:  {
      __typename: "AthleteTeam",
      name: string,
      airTableId: string,
      isActive?: boolean | null,
    },
    address:  {
      __typename: "Address",
      streetAddress: string,
      apt?: string | null,
      city: string,
      state: string,
      zipCode: string,
    },
    dateOfBirth: string,
    accounts?:  {
      __typename: "ModelAthleteAccountConnection",
      items:  Array< {
        __typename: "AthleteAccount",
        unitAccountId: string,
        routingCode: string,
        accountNumber: string,
        podName: string,
        id: string,
        createdAt: string,
        updatedAt: string,
        athleteAccountsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    unitLookup?:  {
      __typename: "AthleteUnitLookup",
      appId: string,
      custId?: string | null,
    } | null,
    podSettings:  {
      __typename: "PodSettings",
      SAVINGS: number,
      INVESTMENTS: number,
      SPENDING: number,
    },
    plaidToken?: string | null,
    unitToken?: string | null,
    plaidProcessorToken?:  {
      __typename: "ProcessorToken",
      plaidAccountId: string,
      processorToken?: string | null,
    } | null,
    wyreAccountId?: string | null,
    isActive: boolean,
    id: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateAthleteAccountMutationVariables = {
  input: CreateAthleteAccountInput,
  condition?: ModelAthleteAccountConditionInput | null,
};

export type CreateAthleteAccountMutation = {
  createAthleteAccount?:  {
    __typename: "AthleteAccount",
    athlete:  {
      __typename: "Athlete",
      firstName: string,
      lastName: string,
      mobilePhone: string,
      athleteTag?: string | null,
      email: string,
      tag?: string | null,
      level: AthleteLevel,
      sport:  {
        __typename: "AthleteSport",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      },
      team:  {
        __typename: "AthleteTeam",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      },
      address:  {
        __typename: "Address",
        streetAddress: string,
        apt?: string | null,
        city: string,
        state: string,
        zipCode: string,
      },
      dateOfBirth: string,
      accounts?:  {
        __typename: "ModelAthleteAccountConnection",
        nextToken?: string | null,
      } | null,
      unitLookup?:  {
        __typename: "AthleteUnitLookup",
        appId: string,
        custId?: string | null,
      } | null,
      podSettings:  {
        __typename: "PodSettings",
        SAVINGS: number,
        INVESTMENTS: number,
        SPENDING: number,
      },
      plaidToken?: string | null,
      unitToken?: string | null,
      plaidProcessorToken?:  {
        __typename: "ProcessorToken",
        plaidAccountId: string,
        processorToken?: string | null,
      } | null,
      wyreAccountId?: string | null,
      isActive: boolean,
      id: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    unitAccountId: string,
    routingCode: string,
    accountNumber: string,
    podName: string,
    id: string,
    createdAt: string,
    updatedAt: string,
    athleteAccountsId?: string | null,
    owner?: string | null,
  } | null,
};

export type UpdateAthleteAccountMutationVariables = {
  input: UpdateAthleteAccountInput,
  condition?: ModelAthleteAccountConditionInput | null,
};

export type UpdateAthleteAccountMutation = {
  updateAthleteAccount?:  {
    __typename: "AthleteAccount",
    athlete:  {
      __typename: "Athlete",
      firstName: string,
      lastName: string,
      mobilePhone: string,
      athleteTag?: string | null,
      email: string,
      tag?: string | null,
      level: AthleteLevel,
      sport:  {
        __typename: "AthleteSport",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      },
      team:  {
        __typename: "AthleteTeam",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      },
      address:  {
        __typename: "Address",
        streetAddress: string,
        apt?: string | null,
        city: string,
        state: string,
        zipCode: string,
      },
      dateOfBirth: string,
      accounts?:  {
        __typename: "ModelAthleteAccountConnection",
        nextToken?: string | null,
      } | null,
      unitLookup?:  {
        __typename: "AthleteUnitLookup",
        appId: string,
        custId?: string | null,
      } | null,
      podSettings:  {
        __typename: "PodSettings",
        SAVINGS: number,
        INVESTMENTS: number,
        SPENDING: number,
      },
      plaidToken?: string | null,
      unitToken?: string | null,
      plaidProcessorToken?:  {
        __typename: "ProcessorToken",
        plaidAccountId: string,
        processorToken?: string | null,
      } | null,
      wyreAccountId?: string | null,
      isActive: boolean,
      id: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    unitAccountId: string,
    routingCode: string,
    accountNumber: string,
    podName: string,
    id: string,
    createdAt: string,
    updatedAt: string,
    athleteAccountsId?: string | null,
    owner?: string | null,
  } | null,
};

export type DeleteAthleteAccountMutationVariables = {
  input: DeleteAthleteAccountInput,
  condition?: ModelAthleteAccountConditionInput | null,
};

export type DeleteAthleteAccountMutation = {
  deleteAthleteAccount?:  {
    __typename: "AthleteAccount",
    athlete:  {
      __typename: "Athlete",
      firstName: string,
      lastName: string,
      mobilePhone: string,
      athleteTag?: string | null,
      email: string,
      tag?: string | null,
      level: AthleteLevel,
      sport:  {
        __typename: "AthleteSport",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      },
      team:  {
        __typename: "AthleteTeam",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      },
      address:  {
        __typename: "Address",
        streetAddress: string,
        apt?: string | null,
        city: string,
        state: string,
        zipCode: string,
      },
      dateOfBirth: string,
      accounts?:  {
        __typename: "ModelAthleteAccountConnection",
        nextToken?: string | null,
      } | null,
      unitLookup?:  {
        __typename: "AthleteUnitLookup",
        appId: string,
        custId?: string | null,
      } | null,
      podSettings:  {
        __typename: "PodSettings",
        SAVINGS: number,
        INVESTMENTS: number,
        SPENDING: number,
      },
      plaidToken?: string | null,
      unitToken?: string | null,
      plaidProcessorToken?:  {
        __typename: "ProcessorToken",
        plaidAccountId: string,
        processorToken?: string | null,
      } | null,
      wyreAccountId?: string | null,
      isActive: boolean,
      id: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    unitAccountId: string,
    routingCode: string,
    accountNumber: string,
    podName: string,
    id: string,
    createdAt: string,
    updatedAt: string,
    athleteAccountsId?: string | null,
    owner?: string | null,
  } | null,
};

export type ListPlaidAccountsQueryVariables = {
  athleteId: string,
};

export type ListPlaidAccountsQuery = {
  listPlaidAccounts?:  Array< {
    __typename: "PlaidAccountDetail",
    account_id?: string | null,
    balances?:  {
      __typename: "Balance",
      available?: number | null,
      current?: string | null,
      iso_currency_code?: string | null,
      limit?: string | null,
      unofficial_currency_code?: string | null,
    } | null,
    mask?: string | null,
    name?: string | null,
    official_name?: string | null,
    subtype?: string | null,
    type?: string | null,
  } | null > | null,
};

export type ListAthleteUnitAccountsQueryVariables = {
  athleteId: string,
};

export type ListAthleteUnitAccountsQuery = {
  listAthleteUnitAccounts?:  Array< {
    __typename: "UnitAccount",
    type?: string | null,
    id?: string | null,
    attributes?:  {
      __typename: "Attributes",
      createdAt?: string | null,
      direction?: string | null,
      amount?: number | null,
      balance?: number | null,
      summary?: string | null,
      description?: string | null,
      counterparty?:  {
        __typename: "Counterparty",
        name?: string | null,
        routingNumber?: string | null,
        accountNumber?: string | null,
        accountType?: string | null,
      } | null,
      name?: string | null,
      status?: string | null,
      date?: string | null,
      routingNumber?: string | null,
      accountNumber?: string | null,
      currency?: string | null,
      verificationToken?: string | null,
      expiresIn?: number | null,
      hold?: number | null,
      available?: number | null,
      tags?:  {
        __typename: "Tags",
        podName?: string | null,
        athleteId?: string | null,
      } | null,
    } | null,
  } | null > | null,
};

export type GetAthleteUnitAccountByIdQueryVariables = {
  athleteId: string,
  unitAccountId: string,
};

export type GetAthleteUnitAccountByIdQuery = {
  getAthleteUnitAccountById?:  {
    __typename: "UnitAccount",
    type?: string | null,
    id?: string | null,
    attributes?:  {
      __typename: "Attributes",
      createdAt?: string | null,
      direction?: string | null,
      amount?: number | null,
      balance?: number | null,
      summary?: string | null,
      description?: string | null,
      counterparty?:  {
        __typename: "Counterparty",
        name?: string | null,
        routingNumber?: string | null,
        accountNumber?: string | null,
        accountType?: string | null,
      } | null,
      name?: string | null,
      status?: string | null,
      date?: string | null,
      routingNumber?: string | null,
      accountNumber?: string | null,
      currency?: string | null,
      verificationToken?: string | null,
      expiresIn?: number | null,
      hold?: number | null,
      available?: number | null,
      tags?:  {
        __typename: "Tags",
        podName?: string | null,
        athleteId?: string | null,
      } | null,
    } | null,
  } | null,
};

export type GetUnitTransactionByIdQueryVariables = {
  unitAccountId: string,
  unitTransactionId: string,
};

export type GetUnitTransactionByIdQuery = {
  getUnitTransactionById?:  {
    __typename: "UnitAccount",
    type?: string | null,
    id?: string | null,
    attributes?:  {
      __typename: "Attributes",
      createdAt?: string | null,
      direction?: string | null,
      amount?: number | null,
      balance?: number | null,
      summary?: string | null,
      description?: string | null,
      counterparty?:  {
        __typename: "Counterparty",
        name?: string | null,
        routingNumber?: string | null,
        accountNumber?: string | null,
        accountType?: string | null,
      } | null,
      name?: string | null,
      status?: string | null,
      date?: string | null,
      routingNumber?: string | null,
      accountNumber?: string | null,
      currency?: string | null,
      verificationToken?: string | null,
      expiresIn?: number | null,
      hold?: number | null,
      available?: number | null,
      tags?:  {
        __typename: "Tags",
        podName?: string | null,
        athleteId?: string | null,
      } | null,
    } | null,
  } | null,
};

export type ListAllUnitTransactionsQueryVariables = {
  athleteId: string,
};

export type ListAllUnitTransactionsQuery = {
  listAllUnitTransactions?:  Array< {
    __typename: "UnitAccount",
    type?: string | null,
    id?: string | null,
    attributes?:  {
      __typename: "Attributes",
      createdAt?: string | null,
      direction?: string | null,
      amount?: number | null,
      balance?: number | null,
      summary?: string | null,
      description?: string | null,
      counterparty?:  {
        __typename: "Counterparty",
        name?: string | null,
        routingNumber?: string | null,
        accountNumber?: string | null,
        accountType?: string | null,
      } | null,
      name?: string | null,
      status?: string | null,
      date?: string | null,
      routingNumber?: string | null,
      accountNumber?: string | null,
      currency?: string | null,
      verificationToken?: string | null,
      expiresIn?: number | null,
      hold?: number | null,
      available?: number | null,
      tags?:  {
        __typename: "Tags",
        podName?: string | null,
        athleteId?: string | null,
      } | null,
    } | null,
  } | null > | null,
};

export type ListUnitBalanceHistoryQueryVariables = {
  athleteId: string,
};

export type ListUnitBalanceHistoryQuery = {
  listUnitBalanceHistory?:  Array< {
    __typename: "UnitAccount",
    type?: string | null,
    id?: string | null,
    attributes?:  {
      __typename: "Attributes",
      createdAt?: string | null,
      direction?: string | null,
      amount?: number | null,
      balance?: number | null,
      summary?: string | null,
      description?: string | null,
      counterparty?:  {
        __typename: "Counterparty",
        name?: string | null,
        routingNumber?: string | null,
        accountNumber?: string | null,
        accountType?: string | null,
      } | null,
      name?: string | null,
      status?: string | null,
      date?: string | null,
      routingNumber?: string | null,
      accountNumber?: string | null,
      currency?: string | null,
      verificationToken?: string | null,
      expiresIn?: number | null,
      hold?: number | null,
      available?: number | null,
      tags?:  {
        __typename: "Tags",
        podName?: string | null,
        athleteId?: string | null,
      } | null,
    } | null,
  } | null > | null,
};

export type UnitAccountStatementQueryVariables = {
  athleteId: string,
};

export type UnitAccountStatementQuery = {
  unitAccountStatement?:  Array< {
    __typename: "UnitAccount",
    type?: string | null,
    id?: string | null,
    attributes?:  {
      __typename: "Attributes",
      createdAt?: string | null,
      direction?: string | null,
      amount?: number | null,
      balance?: number | null,
      summary?: string | null,
      description?: string | null,
      counterparty?:  {
        __typename: "Counterparty",
        name?: string | null,
        routingNumber?: string | null,
        accountNumber?: string | null,
        accountType?: string | null,
      } | null,
      name?: string | null,
      status?: string | null,
      date?: string | null,
      routingNumber?: string | null,
      accountNumber?: string | null,
      currency?: string | null,
      verificationToken?: string | null,
      expiresIn?: number | null,
      hold?: number | null,
      available?: number | null,
      tags?:  {
        __typename: "Tags",
        podName?: string | null,
        athleteId?: string | null,
      } | null,
    } | null,
  } | null > | null,
};

export type GetAthleteSchoolQuery = {
  getAthleteSchool?:  Array< {
    __typename: "AthleteTeam",
    name: string,
    airTableId: string,
    isActive?: boolean | null,
  } | null > | null,
};

export type GetEmailChallengeQueryVariables = {
  code: string,
  email: string,
};

export type GetEmailChallengeQuery = {
  getEmailChallenge?:  {
    __typename: "EmailChallenge",
    code: string,
    email: string,
    verified: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListEmailChallengesQueryVariables = {
  code?: string | null,
  email?: ModelStringKeyConditionInput | null,
  filter?: ModelEmailChallengeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListEmailChallengesQuery = {
  listEmailChallenges?:  {
    __typename: "ModelEmailChallengeConnection",
    items:  Array< {
      __typename: "EmailChallenge",
      code: string,
      email: string,
      verified: boolean,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetInviteQueryVariables = {
  code: string,
  status: Status,
};

export type GetInviteQuery = {
  getInvite?:  {
    __typename: "Invite",
    code: string,
    status: Status,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListInvitesQueryVariables = {
  code?: string | null,
  status?: ModelStringKeyConditionInput | null,
  filter?: ModelInviteFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListInvitesQuery = {
  listInvites?:  {
    __typename: "ModelInviteConnection",
    items:  Array< {
      __typename: "Invite",
      code: string,
      status: Status,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetPhoneChallengeQueryVariables = {
  code: string,
  phoneNumber: string,
};

export type GetPhoneChallengeQuery = {
  getPhoneChallenge?:  {
    __typename: "PhoneChallenge",
    code: string,
    phoneNumber: string,
    verified: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListPhoneChallengesQueryVariables = {
  code?: string | null,
  phoneNumber?: ModelStringKeyConditionInput | null,
  filter?: ModelPhoneChallengeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListPhoneChallengesQuery = {
  listPhoneChallenges?:  {
    __typename: "ModelPhoneChallengeConnection",
    items:  Array< {
      __typename: "PhoneChallenge",
      code: string,
      phoneNumber: string,
      verified: boolean,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetRecentTransactionQueryVariables = {
  id: string,
};

export type GetRecentTransactionQuery = {
  getRecentTransaction?:  {
    __typename: "RecentTransaction",
    transactionId: string,
    athleteId: string,
    status: string,
    amount?: number | null,
    idempotencyKey?: string | null,
    direction?: string | null,
    createdAt?: string | null,
    read?: boolean | null,
    settled?: string | null,
    podAllocation?:  {
      __typename: "PodSettings",
      SAVINGS: number,
      INVESTMENTS: number,
      SPENDING: number,
    } | null,
    id: string,
    updatedAt: string,
  } | null,
};

export type ListRecentTransactionsQueryVariables = {
  filter?: ModelRecentTransactionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListRecentTransactionsQuery = {
  listRecentTransactions?:  {
    __typename: "ModelRecentTransactionConnection",
    items:  Array< {
      __typename: "RecentTransaction",
      transactionId: string,
      athleteId: string,
      status: string,
      amount?: number | null,
      idempotencyKey?: string | null,
      direction?: string | null,
      createdAt?: string | null,
      read?: boolean | null,
      settled?: string | null,
      podAllocation?:  {
        __typename: "PodSettings",
        SAVINGS: number,
        INVESTMENTS: number,
        SPENDING: number,
      } | null,
      id: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetAthleteQueryVariables = {
  id: string,
};

export type GetAthleteQuery = {
  getAthlete?:  {
    __typename: "Athlete",
    firstName: string,
    lastName: string,
    mobilePhone: string,
    athleteTag?: string | null,
    email: string,
    tag?: string | null,
    level: AthleteLevel,
    sport:  {
      __typename: "AthleteSport",
      name: string,
      airTableId: string,
      isActive?: boolean | null,
    },
    team:  {
      __typename: "AthleteTeam",
      name: string,
      airTableId: string,
      isActive?: boolean | null,
    },
    address:  {
      __typename: "Address",
      streetAddress: string,
      apt?: string | null,
      city: string,
      state: string,
      zipCode: string,
    },
    dateOfBirth: string,
    accounts?:  {
      __typename: "ModelAthleteAccountConnection",
      items:  Array< {
        __typename: "AthleteAccount",
        unitAccountId: string,
        routingCode: string,
        accountNumber: string,
        podName: string,
        id: string,
        createdAt: string,
        updatedAt: string,
        athleteAccountsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    unitLookup?:  {
      __typename: "AthleteUnitLookup",
      appId: string,
      custId?: string | null,
    } | null,
    podSettings:  {
      __typename: "PodSettings",
      SAVINGS: number,
      INVESTMENTS: number,
      SPENDING: number,
    },
    plaidToken?: string | null,
    unitToken?: string | null,
    plaidProcessorToken?:  {
      __typename: "ProcessorToken",
      plaidAccountId: string,
      processorToken?: string | null,
    } | null,
    wyreAccountId?: string | null,
    isActive: boolean,
    id: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListAthletesQueryVariables = {
  filter?: ModelAthleteFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAthletesQuery = {
  listAthletes?:  {
    __typename: "ModelAthleteConnection",
    items:  Array< {
      __typename: "Athlete",
      firstName: string,
      lastName: string,
      mobilePhone: string,
      athleteTag?: string | null,
      email: string,
      tag?: string | null,
      level: AthleteLevel,
      sport:  {
        __typename: "AthleteSport",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      },
      team:  {
        __typename: "AthleteTeam",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      },
      address:  {
        __typename: "Address",
        streetAddress: string,
        apt?: string | null,
        city: string,
        state: string,
        zipCode: string,
      },
      dateOfBirth: string,
      accounts?:  {
        __typename: "ModelAthleteAccountConnection",
        nextToken?: string | null,
      } | null,
      unitLookup?:  {
        __typename: "AthleteUnitLookup",
        appId: string,
        custId?: string | null,
      } | null,
      podSettings:  {
        __typename: "PodSettings",
        SAVINGS: number,
        INVESTMENTS: number,
        SPENDING: number,
      },
      plaidToken?: string | null,
      unitToken?: string | null,
      plaidProcessorToken?:  {
        __typename: "ProcessorToken",
        plaidAccountId: string,
        processorToken?: string | null,
      } | null,
      wyreAccountId?: string | null,
      isActive: boolean,
      id: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type AthleteByPhoneQueryVariables = {
  mobilePhone: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelAthleteFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type AthleteByPhoneQuery = {
  athleteByPhone?:  {
    __typename: "ModelAthleteConnection",
    items:  Array< {
      __typename: "Athlete",
      firstName: string,
      lastName: string,
      mobilePhone: string,
      athleteTag?: string | null,
      email: string,
      tag?: string | null,
      level: AthleteLevel,
      sport:  {
        __typename: "AthleteSport",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      },
      team:  {
        __typename: "AthleteTeam",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      },
      address:  {
        __typename: "Address",
        streetAddress: string,
        apt?: string | null,
        city: string,
        state: string,
        zipCode: string,
      },
      dateOfBirth: string,
      accounts?:  {
        __typename: "ModelAthleteAccountConnection",
        nextToken?: string | null,
      } | null,
      unitLookup?:  {
        __typename: "AthleteUnitLookup",
        appId: string,
        custId?: string | null,
      } | null,
      podSettings:  {
        __typename: "PodSettings",
        SAVINGS: number,
        INVESTMENTS: number,
        SPENDING: number,
      },
      plaidToken?: string | null,
      unitToken?: string | null,
      plaidProcessorToken?:  {
        __typename: "ProcessorToken",
        plaidAccountId: string,
        processorToken?: string | null,
      } | null,
      wyreAccountId?: string | null,
      isActive: boolean,
      id: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetAthleteAccountQueryVariables = {
  id: string,
};

export type GetAthleteAccountQuery = {
  getAthleteAccount?:  {
    __typename: "AthleteAccount",
    athlete:  {
      __typename: "Athlete",
      firstName: string,
      lastName: string,
      mobilePhone: string,
      athleteTag?: string | null,
      email: string,
      tag?: string | null,
      level: AthleteLevel,
      sport:  {
        __typename: "AthleteSport",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      },
      team:  {
        __typename: "AthleteTeam",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      },
      address:  {
        __typename: "Address",
        streetAddress: string,
        apt?: string | null,
        city: string,
        state: string,
        zipCode: string,
      },
      dateOfBirth: string,
      accounts?:  {
        __typename: "ModelAthleteAccountConnection",
        nextToken?: string | null,
      } | null,
      unitLookup?:  {
        __typename: "AthleteUnitLookup",
        appId: string,
        custId?: string | null,
      } | null,
      podSettings:  {
        __typename: "PodSettings",
        SAVINGS: number,
        INVESTMENTS: number,
        SPENDING: number,
      },
      plaidToken?: string | null,
      unitToken?: string | null,
      plaidProcessorToken?:  {
        __typename: "ProcessorToken",
        plaidAccountId: string,
        processorToken?: string | null,
      } | null,
      wyreAccountId?: string | null,
      isActive: boolean,
      id: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    unitAccountId: string,
    routingCode: string,
    accountNumber: string,
    podName: string,
    id: string,
    createdAt: string,
    updatedAt: string,
    athleteAccountsId?: string | null,
    owner?: string | null,
  } | null,
};

export type ListAthleteAccountsQueryVariables = {
  filter?: ModelAthleteAccountFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAthleteAccountsQuery = {
  listAthleteAccounts?:  {
    __typename: "ModelAthleteAccountConnection",
    items:  Array< {
      __typename: "AthleteAccount",
      athlete:  {
        __typename: "Athlete",
        firstName: string,
        lastName: string,
        mobilePhone: string,
        athleteTag?: string | null,
        email: string,
        tag?: string | null,
        level: AthleteLevel,
        dateOfBirth: string,
        plaidToken?: string | null,
        unitToken?: string | null,
        wyreAccountId?: string | null,
        isActive: boolean,
        id: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      },
      unitAccountId: string,
      routingCode: string,
      accountNumber: string,
      podName: string,
      id: string,
      createdAt: string,
      updatedAt: string,
      athleteAccountsId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateEmailChallengeSubscription = {
  onCreateEmailChallenge?:  {
    __typename: "EmailChallenge",
    code: string,
    email: string,
    verified: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateEmailChallengeSubscription = {
  onUpdateEmailChallenge?:  {
    __typename: "EmailChallenge",
    code: string,
    email: string,
    verified: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteEmailChallengeSubscription = {
  onDeleteEmailChallenge?:  {
    __typename: "EmailChallenge",
    code: string,
    email: string,
    verified: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateInviteSubscription = {
  onCreateInvite?:  {
    __typename: "Invite",
    code: string,
    status: Status,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateInviteSubscription = {
  onUpdateInvite?:  {
    __typename: "Invite",
    code: string,
    status: Status,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteInviteSubscription = {
  onDeleteInvite?:  {
    __typename: "Invite",
    code: string,
    status: Status,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreatePhoneChallengeSubscription = {
  onCreatePhoneChallenge?:  {
    __typename: "PhoneChallenge",
    code: string,
    phoneNumber: string,
    verified: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdatePhoneChallengeSubscription = {
  onUpdatePhoneChallenge?:  {
    __typename: "PhoneChallenge",
    code: string,
    phoneNumber: string,
    verified: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeletePhoneChallengeSubscription = {
  onDeletePhoneChallenge?:  {
    __typename: "PhoneChallenge",
    code: string,
    phoneNumber: string,
    verified: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateRecentTransactionSubscription = {
  onCreateRecentTransaction?:  {
    __typename: "RecentTransaction",
    transactionId: string,
    athleteId: string,
    status: string,
    amount?: number | null,
    idempotencyKey?: string | null,
    direction?: string | null,
    createdAt?: string | null,
    read?: boolean | null,
    settled?: string | null,
    podAllocation?:  {
      __typename: "PodSettings",
      SAVINGS: number,
      INVESTMENTS: number,
      SPENDING: number,
    } | null,
    id: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateRecentTransactionSubscription = {
  onUpdateRecentTransaction?:  {
    __typename: "RecentTransaction",
    transactionId: string,
    athleteId: string,
    status: string,
    amount?: number | null,
    idempotencyKey?: string | null,
    direction?: string | null,
    createdAt?: string | null,
    read?: boolean | null,
    settled?: string | null,
    podAllocation?:  {
      __typename: "PodSettings",
      SAVINGS: number,
      INVESTMENTS: number,
      SPENDING: number,
    } | null,
    id: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteRecentTransactionSubscription = {
  onDeleteRecentTransaction?:  {
    __typename: "RecentTransaction",
    transactionId: string,
    athleteId: string,
    status: string,
    amount?: number | null,
    idempotencyKey?: string | null,
    direction?: string | null,
    createdAt?: string | null,
    read?: boolean | null,
    settled?: string | null,
    podAllocation?:  {
      __typename: "PodSettings",
      SAVINGS: number,
      INVESTMENTS: number,
      SPENDING: number,
    } | null,
    id: string,
    updatedAt: string,
  } | null,
};

export type OnCreateAthleteSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateAthleteSubscription = {
  onCreateAthlete?:  {
    __typename: "Athlete",
    firstName: string,
    lastName: string,
    mobilePhone: string,
    athleteTag?: string | null,
    email: string,
    tag?: string | null,
    level: AthleteLevel,
    sport:  {
      __typename: "AthleteSport",
      name: string,
      airTableId: string,
      isActive?: boolean | null,
    },
    team:  {
      __typename: "AthleteTeam",
      name: string,
      airTableId: string,
      isActive?: boolean | null,
    },
    address:  {
      __typename: "Address",
      streetAddress: string,
      apt?: string | null,
      city: string,
      state: string,
      zipCode: string,
    },
    dateOfBirth: string,
    accounts?:  {
      __typename: "ModelAthleteAccountConnection",
      items:  Array< {
        __typename: "AthleteAccount",
        unitAccountId: string,
        routingCode: string,
        accountNumber: string,
        podName: string,
        id: string,
        createdAt: string,
        updatedAt: string,
        athleteAccountsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    unitLookup?:  {
      __typename: "AthleteUnitLookup",
      appId: string,
      custId?: string | null,
    } | null,
    podSettings:  {
      __typename: "PodSettings",
      SAVINGS: number,
      INVESTMENTS: number,
      SPENDING: number,
    },
    plaidToken?: string | null,
    unitToken?: string | null,
    plaidProcessorToken?:  {
      __typename: "ProcessorToken",
      plaidAccountId: string,
      processorToken?: string | null,
    } | null,
    wyreAccountId?: string | null,
    isActive: boolean,
    id: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateAthleteSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateAthleteSubscription = {
  onUpdateAthlete?:  {
    __typename: "Athlete",
    firstName: string,
    lastName: string,
    mobilePhone: string,
    athleteTag?: string | null,
    email: string,
    tag?: string | null,
    level: AthleteLevel,
    sport:  {
      __typename: "AthleteSport",
      name: string,
      airTableId: string,
      isActive?: boolean | null,
    },
    team:  {
      __typename: "AthleteTeam",
      name: string,
      airTableId: string,
      isActive?: boolean | null,
    },
    address:  {
      __typename: "Address",
      streetAddress: string,
      apt?: string | null,
      city: string,
      state: string,
      zipCode: string,
    },
    dateOfBirth: string,
    accounts?:  {
      __typename: "ModelAthleteAccountConnection",
      items:  Array< {
        __typename: "AthleteAccount",
        unitAccountId: string,
        routingCode: string,
        accountNumber: string,
        podName: string,
        id: string,
        createdAt: string,
        updatedAt: string,
        athleteAccountsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    unitLookup?:  {
      __typename: "AthleteUnitLookup",
      appId: string,
      custId?: string | null,
    } | null,
    podSettings:  {
      __typename: "PodSettings",
      SAVINGS: number,
      INVESTMENTS: number,
      SPENDING: number,
    },
    plaidToken?: string | null,
    unitToken?: string | null,
    plaidProcessorToken?:  {
      __typename: "ProcessorToken",
      plaidAccountId: string,
      processorToken?: string | null,
    } | null,
    wyreAccountId?: string | null,
    isActive: boolean,
    id: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteAthleteSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteAthleteSubscription = {
  onDeleteAthlete?:  {
    __typename: "Athlete",
    firstName: string,
    lastName: string,
    mobilePhone: string,
    athleteTag?: string | null,
    email: string,
    tag?: string | null,
    level: AthleteLevel,
    sport:  {
      __typename: "AthleteSport",
      name: string,
      airTableId: string,
      isActive?: boolean | null,
    },
    team:  {
      __typename: "AthleteTeam",
      name: string,
      airTableId: string,
      isActive?: boolean | null,
    },
    address:  {
      __typename: "Address",
      streetAddress: string,
      apt?: string | null,
      city: string,
      state: string,
      zipCode: string,
    },
    dateOfBirth: string,
    accounts?:  {
      __typename: "ModelAthleteAccountConnection",
      items:  Array< {
        __typename: "AthleteAccount",
        unitAccountId: string,
        routingCode: string,
        accountNumber: string,
        podName: string,
        id: string,
        createdAt: string,
        updatedAt: string,
        athleteAccountsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    unitLookup?:  {
      __typename: "AthleteUnitLookup",
      appId: string,
      custId?: string | null,
    } | null,
    podSettings:  {
      __typename: "PodSettings",
      SAVINGS: number,
      INVESTMENTS: number,
      SPENDING: number,
    },
    plaidToken?: string | null,
    unitToken?: string | null,
    plaidProcessorToken?:  {
      __typename: "ProcessorToken",
      plaidAccountId: string,
      processorToken?: string | null,
    } | null,
    wyreAccountId?: string | null,
    isActive: boolean,
    id: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateAthleteAccountSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateAthleteAccountSubscription = {
  onCreateAthleteAccount?:  {
    __typename: "AthleteAccount",
    athlete:  {
      __typename: "Athlete",
      firstName: string,
      lastName: string,
      mobilePhone: string,
      athleteTag?: string | null,
      email: string,
      tag?: string | null,
      level: AthleteLevel,
      sport:  {
        __typename: "AthleteSport",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      },
      team:  {
        __typename: "AthleteTeam",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      },
      address:  {
        __typename: "Address",
        streetAddress: string,
        apt?: string | null,
        city: string,
        state: string,
        zipCode: string,
      },
      dateOfBirth: string,
      accounts?:  {
        __typename: "ModelAthleteAccountConnection",
        nextToken?: string | null,
      } | null,
      unitLookup?:  {
        __typename: "AthleteUnitLookup",
        appId: string,
        custId?: string | null,
      } | null,
      podSettings:  {
        __typename: "PodSettings",
        SAVINGS: number,
        INVESTMENTS: number,
        SPENDING: number,
      },
      plaidToken?: string | null,
      unitToken?: string | null,
      plaidProcessorToken?:  {
        __typename: "ProcessorToken",
        plaidAccountId: string,
        processorToken?: string | null,
      } | null,
      wyreAccountId?: string | null,
      isActive: boolean,
      id: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    unitAccountId: string,
    routingCode: string,
    accountNumber: string,
    podName: string,
    id: string,
    createdAt: string,
    updatedAt: string,
    athleteAccountsId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnUpdateAthleteAccountSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateAthleteAccountSubscription = {
  onUpdateAthleteAccount?:  {
    __typename: "AthleteAccount",
    athlete:  {
      __typename: "Athlete",
      firstName: string,
      lastName: string,
      mobilePhone: string,
      athleteTag?: string | null,
      email: string,
      tag?: string | null,
      level: AthleteLevel,
      sport:  {
        __typename: "AthleteSport",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      },
      team:  {
        __typename: "AthleteTeam",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      },
      address:  {
        __typename: "Address",
        streetAddress: string,
        apt?: string | null,
        city: string,
        state: string,
        zipCode: string,
      },
      dateOfBirth: string,
      accounts?:  {
        __typename: "ModelAthleteAccountConnection",
        nextToken?: string | null,
      } | null,
      unitLookup?:  {
        __typename: "AthleteUnitLookup",
        appId: string,
        custId?: string | null,
      } | null,
      podSettings:  {
        __typename: "PodSettings",
        SAVINGS: number,
        INVESTMENTS: number,
        SPENDING: number,
      },
      plaidToken?: string | null,
      unitToken?: string | null,
      plaidProcessorToken?:  {
        __typename: "ProcessorToken",
        plaidAccountId: string,
        processorToken?: string | null,
      } | null,
      wyreAccountId?: string | null,
      isActive: boolean,
      id: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    unitAccountId: string,
    routingCode: string,
    accountNumber: string,
    podName: string,
    id: string,
    createdAt: string,
    updatedAt: string,
    athleteAccountsId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnDeleteAthleteAccountSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteAthleteAccountSubscription = {
  onDeleteAthleteAccount?:  {
    __typename: "AthleteAccount",
    athlete:  {
      __typename: "Athlete",
      firstName: string,
      lastName: string,
      mobilePhone: string,
      athleteTag?: string | null,
      email: string,
      tag?: string | null,
      level: AthleteLevel,
      sport:  {
        __typename: "AthleteSport",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      },
      team:  {
        __typename: "AthleteTeam",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      },
      address:  {
        __typename: "Address",
        streetAddress: string,
        apt?: string | null,
        city: string,
        state: string,
        zipCode: string,
      },
      dateOfBirth: string,
      accounts?:  {
        __typename: "ModelAthleteAccountConnection",
        nextToken?: string | null,
      } | null,
      unitLookup?:  {
        __typename: "AthleteUnitLookup",
        appId: string,
        custId?: string | null,
      } | null,
      podSettings:  {
        __typename: "PodSettings",
        SAVINGS: number,
        INVESTMENTS: number,
        SPENDING: number,
      },
      plaidToken?: string | null,
      unitToken?: string | null,
      plaidProcessorToken?:  {
        __typename: "ProcessorToken",
        plaidAccountId: string,
        processorToken?: string | null,
      } | null,
      wyreAccountId?: string | null,
      isActive: boolean,
      id: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    unitAccountId: string,
    routingCode: string,
    accountNumber: string,
    podName: string,
    id: string,
    createdAt: string,
    updatedAt: string,
    athleteAccountsId?: string | null,
    owner?: string | null,
  } | null,
};
