/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type Opportunity = {
  __typename: "Opportunity",
  id: string,
  categories: Array< string | null >,
  creatorId: string,
  creator: Athlete,
  details: string,
  detailsTldr: string,
  endDateTime: number,
  eventType: string,
  heroPhotoUri: string,
  isPrivate: boolean,
  location?: Location | null,
  locationDetail?: LocationDetail | null,
  logoUri: string,
  onlineReserved: number,
  onlineTotal: number,
  organizations?: ModelOrganizationConnection | null,
  orgs?:  Array<Org | null > | null,
  registrationUrl: string,
  reward: number,
  rewardDetails: string,
  seatsReserved: number,
  seatsTotal: number,
  startDateTime: number,
  status: string,
  subtitle: string,
  tags: Array< string | null >,
  title: string,
  timezone: string,
  websitePrompt: string,
  websiteUrl: string,
  createdAt: string,
  updatedAt: string,
};

export type Athlete = {
  __typename: "Athlete",
  firstName: string,
  lastName: string,
  mobilePhone: string,
  athleteTag?: string | null,
  bio?: string | null,
  profilePhotoUri?: string | null,
  heroPhotoUri?: string | null,
  email: string,
  level?: AthleteLevel | null,
  sport?: AthleteSport | null,
  team?: AthleteTeam | null,
  address?: Address | null,
  dateOfBirth?: string | null,
  accounts?: ModelAthleteAccountConnection | null,
  unitLookup?: AthleteUnitLookup | null,
  podSettings?: PodSettings | null,
  plaidToken?: string | null,
  plaidProcessorToken?: ProcessorToken | null,
  wyreId?: string | null,
  isActive: boolean,
  handle?: string | null,
  wealthBalance: number,
  socialHandles?: ModelSocialHandleConnection | null,
  id: string,
  createdAt: string,
  updatedAt: string,
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

export type ModelSocialHandleConnection = {
  __typename: "ModelSocialHandleConnection",
  items:  Array<SocialHandle | null >,
  nextToken?: string | null,
};

export type SocialHandle = {
  __typename: "SocialHandle",
  platform: SocialPlatform,
  handle: string,
  id: string,
  createdAt: string,
  updatedAt: string,
  athleteSocialHandlesId?: string | null,
};

export enum SocialPlatform {
  TWITTER = "TWITTER",
  INSTAGRAM = "INSTAGRAM",
  DISCORD = "DISCORD",
  TELEGRAM = "TELEGRAM",
}


export type Location = {
  __typename: "Location",
  lat: number,
  lon: number,
};

export type LocationDetail = {
  __typename: "LocationDetail",
  address: string,
  unit?: string | null,
  city: string,
  state: string,
  zipCode: string,
  country: string,
  name?: string | null,
};

export type ModelOrganizationConnection = {
  __typename: "ModelOrganizationConnection",
  items:  Array<Organization | null >,
  nextToken?: string | null,
};

export type Organization = {
  __typename: "Organization",
  id: string,
  displayName: string,
  relationshipType: OrganizationRelationshipType,
  opportunityId: string,
  createdAt: string,
  updatedAt: string,
};

export enum OrganizationRelationshipType {
  ORGANIZER = "ORGANIZER",
  OWNER = "OWNER",
  SPONSOR = "SPONSOR",
}


export type Org = {
  __typename: "Org",
  displayName: string,
  relationshipType: OrganizationRelationshipType,
};

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
  routingNumber?: string | null,
  accountNumber?: string | null,
  currency?: string | null,
  hold?: number | null,
  available?: number | null,
};

export type Counterparty = {
  __typename: "Counterparty",
  name?: string | null,
  routingNumber?: string | null,
  accountNumber?: string | null,
  accountType?: string | null,
};

export type PlaidToken = {
  __typename: "PlaidToken",
  access_token?: string | null,
  item_id?: string | null,
  link_token?: string | null,
  request_id?: string | null,
  new_access_token?: string | null,
};

export type CreateAthleteInput = {
  firstName: string,
  lastName: string,
  mobilePhone: string,
  athleteTag?: string | null,
  bio?: string | null,
  profilePhotoUri?: string | null,
  heroPhotoUri?: string | null,
  email: string,
  level?: AthleteLevel | null,
  sport?: AthleteSportInput | null,
  team?: AthleteTeamInput | null,
  address?: AddressInput | null,
  dateOfBirth?: string | null,
  unitLookup?: AthleteUnitLookupInput | null,
  podSettings?: PodSettingsInput | null,
  plaidToken?: string | null,
  plaidProcessorToken?: ProcessorTokenInput | null,
  wyreId?: string | null,
  isActive: boolean,
  handle?: string | null,
  wealthBalance: number,
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

export type PodSettingsInput = {
  SAVINGS: number,
  INVESTMENTS: number,
  SPENDING: number,
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
  bio?: ModelStringInput | null,
  profilePhotoUri?: ModelStringInput | null,
  heroPhotoUri?: ModelStringInput | null,
  email?: ModelStringInput | null,
  level?: ModelAthleteLevelInput | null,
  dateOfBirth?: ModelStringInput | null,
  plaidToken?: ModelStringInput | null,
  wyreId?: ModelStringInput | null,
  isActive?: ModelBooleanInput | null,
  handle?: ModelStringInput | null,
  wealthBalance?: ModelIntInput | null,
  and?: Array< ModelAthleteConditionInput | null > | null,
  or?: Array< ModelAthleteConditionInput | null > | null,
  not?: ModelAthleteConditionInput | null,
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


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelAthleteLevelInput = {
  eq?: AthleteLevel | null,
  ne?: AthleteLevel | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelIntInput = {
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

export type UpdateAthleteInput = {
  firstName?: string | null,
  lastName?: string | null,
  mobilePhone?: string | null,
  athleteTag?: string | null,
  bio?: string | null,
  profilePhotoUri?: string | null,
  heroPhotoUri?: string | null,
  email?: string | null,
  level?: AthleteLevel | null,
  sport?: AthleteSportInput | null,
  team?: AthleteTeamInput | null,
  address?: AddressInput | null,
  dateOfBirth?: string | null,
  unitLookup?: AthleteUnitLookupInput | null,
  podSettings?: PodSettingsInput | null,
  plaidToken?: string | null,
  plaidProcessorToken?: ProcessorTokenInput | null,
  wyreId?: string | null,
  isActive?: boolean | null,
  handle?: string | null,
  wealthBalance?: number | null,
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

export type CreateRecentTransactionInput = {
  transactionId: string,
  athleteId?: string | null,
  status?: string | null,
  amount?: number | null,
  direction?: string | null,
  createdAt?: string | null,
  read?: boolean | null,
  settled?: string | null,
  podAllocation?: PodSettingsInput | null,
  id?: string | null,
};

export type ModelRecentTransactionConditionInput = {
  transactionId?: ModelStringInput | null,
  athleteId?: ModelStringInput | null,
  status?: ModelStringInput | null,
  amount?: ModelFloatInput | null,
  direction?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  read?: ModelBooleanInput | null,
  settled?: ModelStringInput | null,
  and?: Array< ModelRecentTransactionConditionInput | null > | null,
  or?: Array< ModelRecentTransactionConditionInput | null > | null,
  not?: ModelRecentTransactionConditionInput | null,
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
  athleteId?: string | null,
  status?: string | null,
  amount?: number | null,
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

export type CreateSocialHandleInput = {
  platform: SocialPlatform,
  handle: string,
  id?: string | null,
  athleteSocialHandlesId?: string | null,
};

export type ModelSocialHandleConditionInput = {
  platform?: ModelSocialPlatformInput | null,
  handle?: ModelStringInput | null,
  and?: Array< ModelSocialHandleConditionInput | null > | null,
  or?: Array< ModelSocialHandleConditionInput | null > | null,
  not?: ModelSocialHandleConditionInput | null,
  athleteSocialHandlesId?: ModelIDInput | null,
};

export type ModelSocialPlatformInput = {
  eq?: SocialPlatform | null,
  ne?: SocialPlatform | null,
};

export type UpdateSocialHandleInput = {
  platform?: SocialPlatform | null,
  handle?: string | null,
  id: string,
  athleteSocialHandlesId?: string | null,
};

export type DeleteSocialHandleInput = {
  id: string,
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

export type UpdateEmailChallengeInput = {
  code: string,
  email: string,
  verified?: boolean | null,
};

export type DeleteEmailChallengeInput = {
  code: string,
  email: string,
};

export type CreateEventInput = {
  creatorId: string,
  sponsor: string,
  title: string,
  category: string,
  heroPhotoUri: string,
  logoUri: string,
  tagline: string,
  description: string,
  dateTime: number,
  location: string,
  reward: number,
  registered: boolean,
  id?: string | null,
};

export type ModelEventConditionInput = {
  creatorId?: ModelIDInput | null,
  sponsor?: ModelStringInput | null,
  title?: ModelStringInput | null,
  category?: ModelStringInput | null,
  heroPhotoUri?: ModelStringInput | null,
  logoUri?: ModelStringInput | null,
  tagline?: ModelStringInput | null,
  description?: ModelStringInput | null,
  dateTime?: ModelFloatInput | null,
  location?: ModelStringInput | null,
  reward?: ModelIntInput | null,
  registered?: ModelBooleanInput | null,
  and?: Array< ModelEventConditionInput | null > | null,
  or?: Array< ModelEventConditionInput | null > | null,
  not?: ModelEventConditionInput | null,
};

export type Event = {
  __typename: "Event",
  creatorId: string,
  creator: Athlete,
  sponsor: string,
  title: string,
  category: string,
  heroPhotoUri: string,
  logoUri: string,
  tagline: string,
  description: string,
  dateTime: number,
  location: string,
  reward: number,
  registered: boolean,
  id: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateEventInput = {
  creatorId?: string | null,
  sponsor?: string | null,
  title?: string | null,
  category?: string | null,
  heroPhotoUri?: string | null,
  logoUri?: string | null,
  tagline?: string | null,
  description?: string | null,
  dateTime?: number | null,
  location?: string | null,
  reward?: number | null,
  registered?: boolean | null,
  id: string,
};

export type DeleteEventInput = {
  id: string,
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

export type CreateLearnInput = {
  creatorId: string,
  bgImageUri?: string | null,
  sponsor: string,
  title: string,
  level: LearnLevel,
  reward: number,
  deposits: Array< DepositInput >,
  id?: string | null,
};

export enum LearnLevel {
  BEGINNER = "BEGINNER",
  MEDIUM = "MEDIUM",
  ADVANCED = "ADVANCED",
  EXPERT = "EXPERT",
}


export type DepositInput = {
  videoUri?: string | null,
  title: string,
  questions: Array< QuizInput >,
};

export type QuizInput = {
  questionText: string,
  answers: Array< string >,
  correctAnswer: string,
};

export type ModelLearnConditionInput = {
  creatorId?: ModelIDInput | null,
  bgImageUri?: ModelStringInput | null,
  sponsor?: ModelStringInput | null,
  title?: ModelStringInput | null,
  level?: ModelLearnLevelInput | null,
  reward?: ModelIntInput | null,
  and?: Array< ModelLearnConditionInput | null > | null,
  or?: Array< ModelLearnConditionInput | null > | null,
  not?: ModelLearnConditionInput | null,
};

export type ModelLearnLevelInput = {
  eq?: LearnLevel | null,
  ne?: LearnLevel | null,
};

export type Learn = {
  __typename: "Learn",
  creatorId: string,
  creator: Athlete,
  bgImageUri?: string | null,
  sponsor: string,
  title: string,
  level: LearnLevel,
  reward: number,
  deposits:  Array<Deposit >,
  id: string,
  createdAt: string,
  updatedAt: string,
};

export type Deposit = {
  __typename: "Deposit",
  videoUri?: string | null,
  title: string,
  questions:  Array<Quiz >,
};

export type Quiz = {
  __typename: "Quiz",
  questionText: string,
  answers: Array< string >,
  correctAnswer: string,
};

export type UpdateLearnInput = {
  creatorId?: string | null,
  bgImageUri?: string | null,
  sponsor?: string | null,
  title?: string | null,
  level?: LearnLevel | null,
  reward?: number | null,
  deposits?: Array< DepositInput > | null,
  id: string,
};

export type DeleteLearnInput = {
  id: string,
};

export type CreateLearnStatusInput = {
  athleteId: string,
  learnItemId: string,
  passedDepositIndex: number,
  id?: string | null,
};

export type ModelLearnStatusConditionInput = {
  athleteId?: ModelIDInput | null,
  learnItemId?: ModelIDInput | null,
  passedDepositIndex?: ModelIntInput | null,
  and?: Array< ModelLearnStatusConditionInput | null > | null,
  or?: Array< ModelLearnStatusConditionInput | null > | null,
  not?: ModelLearnStatusConditionInput | null,
};

export type LearnStatus = {
  __typename: "LearnStatus",
  athleteId: string,
  learnItemId: string,
  passedDepositIndex: number,
  id: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateLearnStatusInput = {
  athleteId?: string | null,
  learnItemId?: string | null,
  passedDepositIndex?: number | null,
  id: string,
};

export type DeleteLearnStatusInput = {
  id: string,
};

export type CreateOpportunityInput = {
  id?: string | null,
  categories: Array< string | null >,
  creatorId: string,
  details: string,
  detailsTldr: string,
  endDateTime: number,
  eventType: string,
  heroPhotoUri: string,
  isPrivate: boolean,
  location?: LocationInput | null,
  locationDetail?: LocationDetailInput | null,
  logoUri: string,
  onlineReserved: number,
  onlineTotal: number,
  orgs?: Array< OrgInput | null > | null,
  registrationUrl: string,
  reward: number,
  rewardDetails: string,
  seatsReserved: number,
  seatsTotal: number,
  startDateTime: number,
  status: string,
  subtitle: string,
  tags: Array< string | null >,
  title: string,
  timezone: string,
  websitePrompt: string,
  websiteUrl: string,
};

export type LocationInput = {
  lat: number,
  lon: number,
};

export type LocationDetailInput = {
  address: string,
  unit?: string | null,
  city: string,
  state: string,
  zipCode: string,
  country: string,
  name?: string | null,
};

export type OrgInput = {
  displayName: string,
  relationshipType: OrganizationRelationshipType,
};

export type ModelOpportunityConditionInput = {
  categories?: ModelStringInput | null,
  creatorId?: ModelIDInput | null,
  details?: ModelStringInput | null,
  detailsTldr?: ModelStringInput | null,
  endDateTime?: ModelFloatInput | null,
  eventType?: ModelStringInput | null,
  heroPhotoUri?: ModelStringInput | null,
  isPrivate?: ModelBooleanInput | null,
  logoUri?: ModelStringInput | null,
  onlineReserved?: ModelIntInput | null,
  onlineTotal?: ModelIntInput | null,
  registrationUrl?: ModelStringInput | null,
  reward?: ModelFloatInput | null,
  rewardDetails?: ModelStringInput | null,
  seatsReserved?: ModelIntInput | null,
  seatsTotal?: ModelIntInput | null,
  startDateTime?: ModelFloatInput | null,
  status?: ModelStringInput | null,
  subtitle?: ModelStringInput | null,
  tags?: ModelStringInput | null,
  title?: ModelStringInput | null,
  timezone?: ModelStringInput | null,
  websitePrompt?: ModelStringInput | null,
  websiteUrl?: ModelStringInput | null,
  and?: Array< ModelOpportunityConditionInput | null > | null,
  or?: Array< ModelOpportunityConditionInput | null > | null,
  not?: ModelOpportunityConditionInput | null,
};

export type UpdateOpportunityInput = {
  id: string,
  categories?: Array< string | null > | null,
  creatorId?: string | null,
  details?: string | null,
  detailsTldr?: string | null,
  endDateTime?: number | null,
  eventType?: string | null,
  heroPhotoUri?: string | null,
  isPrivate?: boolean | null,
  location?: LocationInput | null,
  locationDetail?: LocationDetailInput | null,
  logoUri?: string | null,
  onlineReserved?: number | null,
  onlineTotal?: number | null,
  orgs?: Array< OrgInput | null > | null,
  registrationUrl?: string | null,
  reward?: number | null,
  rewardDetails?: string | null,
  seatsReserved?: number | null,
  seatsTotal?: number | null,
  startDateTime?: number | null,
  status?: string | null,
  subtitle?: string | null,
  tags?: Array< string | null > | null,
  title?: string | null,
  timezone?: string | null,
  websitePrompt?: string | null,
  websiteUrl?: string | null,
};

export type DeleteOpportunityInput = {
  id: string,
};

export type CreateOrganizationInput = {
  id?: string | null,
  displayName: string,
  relationshipType: OrganizationRelationshipType,
  opportunityId: string,
};

export type ModelOrganizationConditionInput = {
  displayName?: ModelStringInput | null,
  relationshipType?: ModelOrganizationRelationshipTypeInput | null,
  opportunityId?: ModelIDInput | null,
  and?: Array< ModelOrganizationConditionInput | null > | null,
  or?: Array< ModelOrganizationConditionInput | null > | null,
  not?: ModelOrganizationConditionInput | null,
};

export type ModelOrganizationRelationshipTypeInput = {
  eq?: OrganizationRelationshipType | null,
  ne?: OrganizationRelationshipType | null,
};

export type UpdateOrganizationInput = {
  id: string,
  displayName?: string | null,
  relationshipType?: OrganizationRelationshipType | null,
  opportunityId?: string | null,
};

export type DeleteOrganizationInput = {
  id: string,
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

export type CreateRewardInput = {
  id?: string | null,
  creatorId: string,
  title: string,
  wealthAmount: number,
  logoUri?: string | null,
  description?: string | null,
  heroPhotoUri?: string | null,
  redeemed: boolean,
};

export type ModelRewardConditionInput = {
  creatorId?: ModelIDInput | null,
  title?: ModelStringInput | null,
  wealthAmount?: ModelIntInput | null,
  logoUri?: ModelStringInput | null,
  description?: ModelStringInput | null,
  heroPhotoUri?: ModelStringInput | null,
  redeemed?: ModelBooleanInput | null,
  and?: Array< ModelRewardConditionInput | null > | null,
  or?: Array< ModelRewardConditionInput | null > | null,
  not?: ModelRewardConditionInput | null,
};

export type Reward = {
  __typename: "Reward",
  id: string,
  creatorId: string,
  creator: Athlete,
  title: string,
  wealthAmount: number,
  logoUri?: string | null,
  description?: string | null,
  heroPhotoUri?: string | null,
  redeemed: boolean,
  createdAt: string,
  updatedAt: string,
};

export type UpdateRewardInput = {
  id: string,
  creatorId?: string | null,
  title?: string | null,
  wealthAmount?: number | null,
  logoUri?: string | null,
  description?: string | null,
  heroPhotoUri?: string | null,
  redeemed?: boolean | null,
};

export type DeleteRewardInput = {
  id: string,
};

export type ModelLearnFilterInput = {
  creatorId?: ModelIDInput | null,
  bgImageUri?: ModelStringInput | null,
  sponsor?: ModelStringInput | null,
  title?: ModelStringInput | null,
  level?: ModelLearnLevelInput | null,
  reward?: ModelIntInput | null,
  and?: Array< ModelLearnFilterInput | null > | null,
  or?: Array< ModelLearnFilterInput | null > | null,
  not?: ModelLearnFilterInput | null,
};

export type ModelLearnConnection = {
  __typename: "ModelLearnConnection",
  items:  Array<Learn | null >,
  nextToken?: string | null,
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

export type ModelOpportunityConnection = {
  __typename: "ModelOpportunityConnection",
  items?:  Array<Opportunity | null > | null,
  total?: number | null,
  nextToken?: string | null,
};

export type SearchableEventFilterInput = {
  creatorId?: SearchableIDFilterInput | null,
  sponsor?: SearchableStringFilterInput | null,
  title?: SearchableStringFilterInput | null,
  category?: SearchableStringFilterInput | null,
  heroPhotoUri?: SearchableStringFilterInput | null,
  logoUri?: SearchableStringFilterInput | null,
  tagline?: SearchableStringFilterInput | null,
  description?: SearchableStringFilterInput | null,
  dateTime?: SearchableFloatFilterInput | null,
  location?: SearchableStringFilterInput | null,
  reward?: SearchableIntFilterInput | null,
  registered?: SearchableBooleanFilterInput | null,
  id?: SearchableIDFilterInput | null,
  createdAt?: SearchableStringFilterInput | null,
  updatedAt?: SearchableStringFilterInput | null,
  and?: Array< SearchableEventFilterInput | null > | null,
  or?: Array< SearchableEventFilterInput | null > | null,
  not?: SearchableEventFilterInput | null,
};

export type SearchableIDFilterInput = {
  ne?: string | null,
  gt?: string | null,
  lt?: string | null,
  gte?: string | null,
  lte?: string | null,
  eq?: string | null,
  match?: string | null,
  matchPhrase?: string | null,
  matchPhrasePrefix?: string | null,
  multiMatch?: string | null,
  exists?: boolean | null,
  wildcard?: string | null,
  regexp?: string | null,
  range?: Array< string | null > | null,
};

export type SearchableStringFilterInput = {
  ne?: string | null,
  gt?: string | null,
  lt?: string | null,
  gte?: string | null,
  lte?: string | null,
  eq?: string | null,
  match?: string | null,
  matchPhrase?: string | null,
  matchPhrasePrefix?: string | null,
  multiMatch?: string | null,
  exists?: boolean | null,
  wildcard?: string | null,
  regexp?: string | null,
  range?: Array< string | null > | null,
};

export type SearchableFloatFilterInput = {
  ne?: number | null,
  gt?: number | null,
  lt?: number | null,
  gte?: number | null,
  lte?: number | null,
  eq?: number | null,
  range?: Array< number | null > | null,
};

export type SearchableIntFilterInput = {
  ne?: number | null,
  gt?: number | null,
  lt?: number | null,
  gte?: number | null,
  lte?: number | null,
  eq?: number | null,
  range?: Array< number | null > | null,
};

export type SearchableBooleanFilterInput = {
  eq?: boolean | null,
  ne?: boolean | null,
};

export type SearchableEventSortInput = {
  field?: SearchableEventSortableFields | null,
  direction?: SearchableSortDirection | null,
};

export enum SearchableEventSortableFields {
  creatorId = "creatorId",
  sponsor = "sponsor",
  title = "title",
  category = "category",
  heroPhotoUri = "heroPhotoUri",
  logoUri = "logoUri",
  tagline = "tagline",
  description = "description",
  dateTime = "dateTime",
  location = "location",
  reward = "reward",
  registered = "registered",
  id = "id",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}


export enum SearchableSortDirection {
  asc = "asc",
  desc = "desc",
}


export type SearchableEventAggregationInput = {
  name: string,
  type: SearchableAggregateType,
  field: SearchableEventAggregateField,
};

export enum SearchableAggregateType {
  terms = "terms",
  avg = "avg",
  min = "min",
  max = "max",
  sum = "sum",
}


export enum SearchableEventAggregateField {
  creatorId = "creatorId",
  sponsor = "sponsor",
  title = "title",
  category = "category",
  heroPhotoUri = "heroPhotoUri",
  logoUri = "logoUri",
  tagline = "tagline",
  description = "description",
  dateTime = "dateTime",
  location = "location",
  reward = "reward",
  registered = "registered",
  id = "id",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}


export type SearchableEventConnection = {
  __typename: "SearchableEventConnection",
  items:  Array<Event | null >,
  nextToken?: string | null,
  total?: number | null,
  aggregateItems:  Array<SearchableAggregateResult | null >,
};

export type SearchableAggregateResult = {
  __typename: "SearchableAggregateResult",
  name: string,
  result?: SearchableAggregateGenericResult | null,
};

export type SearchableAggregateGenericResult = SearchableAggregateScalarResult | SearchableAggregateBucketResult


export type SearchableAggregateScalarResult = {
  __typename: "SearchableAggregateScalarResult",
  value: number,
};

export type SearchableAggregateBucketResult = {
  __typename: "SearchableAggregateBucketResult",
  buckets?:  Array<SearchableAggregateBucketResultItem | null > | null,
};

export type SearchableAggregateBucketResultItem = {
  __typename: "SearchableAggregateBucketResultItem",
  key: string,
  doc_count: number,
};

export type SearchableLearnFilterInput = {
  creatorId?: SearchableIDFilterInput | null,
  bgImageUri?: SearchableStringFilterInput | null,
  sponsor?: SearchableStringFilterInput | null,
  title?: SearchableStringFilterInput | null,
  reward?: SearchableIntFilterInput | null,
  id?: SearchableIDFilterInput | null,
  createdAt?: SearchableStringFilterInput | null,
  updatedAt?: SearchableStringFilterInput | null,
  level?: SearchableStringFilterInput | null,
  and?: Array< SearchableLearnFilterInput | null > | null,
  or?: Array< SearchableLearnFilterInput | null > | null,
  not?: SearchableLearnFilterInput | null,
};

export type SearchableLearnSortInput = {
  field?: SearchableLearnSortableFields | null,
  direction?: SearchableSortDirection | null,
};

export enum SearchableLearnSortableFields {
  creatorId = "creatorId",
  bgImageUri = "bgImageUri",
  sponsor = "sponsor",
  title = "title",
  reward = "reward",
  id = "id",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}


export type SearchableLearnAggregationInput = {
  name: string,
  type: SearchableAggregateType,
  field: SearchableLearnAggregateField,
};

export enum SearchableLearnAggregateField {
  creatorId = "creatorId",
  bgImageUri = "bgImageUri",
  sponsor = "sponsor",
  title = "title",
  level = "level",
  reward = "reward",
  id = "id",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}


export type SearchableLearnConnection = {
  __typename: "SearchableLearnConnection",
  items:  Array<Learn | null >,
  nextToken?: string | null,
  total?: number | null,
  aggregateItems:  Array<SearchableAggregateResult | null >,
};

export type SearchableLearnStatusFilterInput = {
  athleteId?: SearchableIDFilterInput | null,
  learnItemId?: SearchableIDFilterInput | null,
  passedDepositIndex?: SearchableIntFilterInput | null,
  id?: SearchableIDFilterInput | null,
  createdAt?: SearchableStringFilterInput | null,
  updatedAt?: SearchableStringFilterInput | null,
  and?: Array< SearchableLearnStatusFilterInput | null > | null,
  or?: Array< SearchableLearnStatusFilterInput | null > | null,
  not?: SearchableLearnStatusFilterInput | null,
};

export type SearchableLearnStatusSortInput = {
  field?: SearchableLearnStatusSortableFields | null,
  direction?: SearchableSortDirection | null,
};

export enum SearchableLearnStatusSortableFields {
  athleteId = "athleteId",
  learnItemId = "learnItemId",
  passedDepositIndex = "passedDepositIndex",
  id = "id",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}


export type SearchableLearnStatusAggregationInput = {
  name: string,
  type: SearchableAggregateType,
  field: SearchableLearnStatusAggregateField,
};

export enum SearchableLearnStatusAggregateField {
  athleteId = "athleteId",
  learnItemId = "learnItemId",
  passedDepositIndex = "passedDepositIndex",
  id = "id",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}


export type SearchableLearnStatusConnection = {
  __typename: "SearchableLearnStatusConnection",
  items:  Array<LearnStatus | null >,
  nextToken?: string | null,
  total?: number | null,
  aggregateItems:  Array<SearchableAggregateResult | null >,
};

export type SearchableOpportunityFilterInput = {
  id?: SearchableIDFilterInput | null,
  categories?: SearchableStringFilterInput | null,
  creatorId?: SearchableIDFilterInput | null,
  details?: SearchableStringFilterInput | null,
  detailsTldr?: SearchableStringFilterInput | null,
  endDateTime?: SearchableFloatFilterInput | null,
  eventType?: SearchableStringFilterInput | null,
  heroPhotoUri?: SearchableStringFilterInput | null,
  isPrivate?: SearchableBooleanFilterInput | null,
  logoUri?: SearchableStringFilterInput | null,
  onlineReserved?: SearchableIntFilterInput | null,
  onlineTotal?: SearchableIntFilterInput | null,
  registrationUrl?: SearchableStringFilterInput | null,
  reward?: SearchableFloatFilterInput | null,
  rewardDetails?: SearchableStringFilterInput | null,
  seatsReserved?: SearchableIntFilterInput | null,
  seatsTotal?: SearchableIntFilterInput | null,
  startDateTime?: SearchableFloatFilterInput | null,
  status?: SearchableStringFilterInput | null,
  subtitle?: SearchableStringFilterInput | null,
  tags?: SearchableStringFilterInput | null,
  title?: SearchableStringFilterInput | null,
  timezone?: SearchableStringFilterInput | null,
  websitePrompt?: SearchableStringFilterInput | null,
  websiteUrl?: SearchableStringFilterInput | null,
  createdAt?: SearchableStringFilterInput | null,
  updatedAt?: SearchableStringFilterInput | null,
  and?: Array< SearchableOpportunityFilterInput | null > | null,
  or?: Array< SearchableOpportunityFilterInput | null > | null,
  not?: SearchableOpportunityFilterInput | null,
};

export type SearchableOpportunitySortInput = {
  field?: SearchableOpportunitySortableFields | null,
  direction?: SearchableSortDirection | null,
};

export enum SearchableOpportunitySortableFields {
  id = "id",
  categories = "categories",
  creatorId = "creatorId",
  details = "details",
  detailsTldr = "detailsTldr",
  endDateTime = "endDateTime",
  eventType = "eventType",
  heroPhotoUri = "heroPhotoUri",
  isPrivate = "isPrivate",
  logoUri = "logoUri",
  onlineReserved = "onlineReserved",
  onlineTotal = "onlineTotal",
  registrationUrl = "registrationUrl",
  reward = "reward",
  rewardDetails = "rewardDetails",
  seatsReserved = "seatsReserved",
  seatsTotal = "seatsTotal",
  startDateTime = "startDateTime",
  status = "status",
  subtitle = "subtitle",
  tags = "tags",
  title = "title",
  timezone = "timezone",
  websitePrompt = "websitePrompt",
  websiteUrl = "websiteUrl",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}


export type SearchableOpportunityAggregationInput = {
  name: string,
  type: SearchableAggregateType,
  field: SearchableOpportunityAggregateField,
};

export enum SearchableOpportunityAggregateField {
  id = "id",
  categories = "categories",
  creatorId = "creatorId",
  details = "details",
  detailsTldr = "detailsTldr",
  endDateTime = "endDateTime",
  eventType = "eventType",
  heroPhotoUri = "heroPhotoUri",
  isPrivate = "isPrivate",
  logoUri = "logoUri",
  onlineReserved = "onlineReserved",
  onlineTotal = "onlineTotal",
  registrationUrl = "registrationUrl",
  reward = "reward",
  rewardDetails = "rewardDetails",
  seatsReserved = "seatsReserved",
  seatsTotal = "seatsTotal",
  startDateTime = "startDateTime",
  status = "status",
  subtitle = "subtitle",
  tags = "tags",
  title = "title",
  timezone = "timezone",
  websitePrompt = "websitePrompt",
  websiteUrl = "websiteUrl",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}


export type SearchableOpportunityConnection = {
  __typename: "SearchableOpportunityConnection",
  items:  Array<Opportunity | null >,
  nextToken?: string | null,
  total?: number | null,
  aggregateItems:  Array<SearchableAggregateResult | null >,
};

export type SearchableRewardFilterInput = {
  id?: SearchableIDFilterInput | null,
  creatorId?: SearchableIDFilterInput | null,
  title?: SearchableStringFilterInput | null,
  wealthAmount?: SearchableIntFilterInput | null,
  logoUri?: SearchableStringFilterInput | null,
  description?: SearchableStringFilterInput | null,
  heroPhotoUri?: SearchableStringFilterInput | null,
  redeemed?: SearchableBooleanFilterInput | null,
  createdAt?: SearchableStringFilterInput | null,
  updatedAt?: SearchableStringFilterInput | null,
  and?: Array< SearchableRewardFilterInput | null > | null,
  or?: Array< SearchableRewardFilterInput | null > | null,
  not?: SearchableRewardFilterInput | null,
};

export type SearchableRewardSortInput = {
  field?: SearchableRewardSortableFields | null,
  direction?: SearchableSortDirection | null,
};

export enum SearchableRewardSortableFields {
  id = "id",
  creatorId = "creatorId",
  title = "title",
  wealthAmount = "wealthAmount",
  logoUri = "logoUri",
  description = "description",
  heroPhotoUri = "heroPhotoUri",
  redeemed = "redeemed",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}


export type SearchableRewardAggregationInput = {
  name: string,
  type: SearchableAggregateType,
  field: SearchableRewardAggregateField,
};

export enum SearchableRewardAggregateField {
  id = "id",
  creatorId = "creatorId",
  title = "title",
  wealthAmount = "wealthAmount",
  logoUri = "logoUri",
  description = "description",
  heroPhotoUri = "heroPhotoUri",
  redeemed = "redeemed",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}


export type SearchableRewardConnection = {
  __typename: "SearchableRewardConnection",
  items:  Array<Reward | null >,
  nextToken?: string | null,
  total?: number | null,
  aggregateItems:  Array<SearchableAggregateResult | null >,
};

export type ModelAthleteFilterInput = {
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  mobilePhone?: ModelStringInput | null,
  athleteTag?: ModelStringInput | null,
  bio?: ModelStringInput | null,
  profilePhotoUri?: ModelStringInput | null,
  heroPhotoUri?: ModelStringInput | null,
  email?: ModelStringInput | null,
  level?: ModelAthleteLevelInput | null,
  dateOfBirth?: ModelStringInput | null,
  plaidToken?: ModelStringInput | null,
  wyreId?: ModelStringInput | null,
  isActive?: ModelBooleanInput | null,
  handle?: ModelStringInput | null,
  wealthBalance?: ModelIntInput | null,
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

export type ModelRecentTransactionFilterInput = {
  transactionId?: ModelStringInput | null,
  athleteId?: ModelStringInput | null,
  status?: ModelStringInput | null,
  amount?: ModelFloatInput | null,
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

export type ModelSocialHandleFilterInput = {
  platform?: ModelSocialPlatformInput | null,
  handle?: ModelStringInput | null,
  and?: Array< ModelSocialHandleFilterInput | null > | null,
  or?: Array< ModelSocialHandleFilterInput | null > | null,
  not?: ModelSocialHandleFilterInput | null,
  athleteSocialHandlesId?: ModelIDInput | null,
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

export type ModelEventFilterInput = {
  creatorId?: ModelIDInput | null,
  sponsor?: ModelStringInput | null,
  title?: ModelStringInput | null,
  category?: ModelStringInput | null,
  heroPhotoUri?: ModelStringInput | null,
  logoUri?: ModelStringInput | null,
  tagline?: ModelStringInput | null,
  description?: ModelStringInput | null,
  dateTime?: ModelFloatInput | null,
  location?: ModelStringInput | null,
  reward?: ModelIntInput | null,
  registered?: ModelBooleanInput | null,
  and?: Array< ModelEventFilterInput | null > | null,
  or?: Array< ModelEventFilterInput | null > | null,
  not?: ModelEventFilterInput | null,
};

export type ModelEventConnection = {
  __typename: "ModelEventConnection",
  items:  Array<Event | null >,
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

export type ModelLearnStatusFilterInput = {
  athleteId?: ModelIDInput | null,
  learnItemId?: ModelIDInput | null,
  passedDepositIndex?: ModelIntInput | null,
  and?: Array< ModelLearnStatusFilterInput | null > | null,
  or?: Array< ModelLearnStatusFilterInput | null > | null,
  not?: ModelLearnStatusFilterInput | null,
};

export type ModelLearnStatusConnection = {
  __typename: "ModelLearnStatusConnection",
  items:  Array<LearnStatus | null >,
  nextToken?: string | null,
};

export type ModelOpportunityFilterInput = {
  id?: ModelIDInput | null,
  categories?: ModelStringInput | null,
  creatorId?: ModelIDInput | null,
  details?: ModelStringInput | null,
  detailsTldr?: ModelStringInput | null,
  endDateTime?: ModelFloatInput | null,
  eventType?: ModelStringInput | null,
  heroPhotoUri?: ModelStringInput | null,
  isPrivate?: ModelBooleanInput | null,
  logoUri?: ModelStringInput | null,
  onlineReserved?: ModelIntInput | null,
  onlineTotal?: ModelIntInput | null,
  registrationUrl?: ModelStringInput | null,
  reward?: ModelFloatInput | null,
  rewardDetails?: ModelStringInput | null,
  seatsReserved?: ModelIntInput | null,
  seatsTotal?: ModelIntInput | null,
  startDateTime?: ModelFloatInput | null,
  status?: ModelStringInput | null,
  subtitle?: ModelStringInput | null,
  tags?: ModelStringInput | null,
  title?: ModelStringInput | null,
  timezone?: ModelStringInput | null,
  websitePrompt?: ModelStringInput | null,
  websiteUrl?: ModelStringInput | null,
  and?: Array< ModelOpportunityFilterInput | null > | null,
  or?: Array< ModelOpportunityFilterInput | null > | null,
  not?: ModelOpportunityFilterInput | null,
};

export type ModelOrganizationFilterInput = {
  id?: ModelIDInput | null,
  displayName?: ModelStringInput | null,
  relationshipType?: ModelOrganizationRelationshipTypeInput | null,
  opportunityId?: ModelIDInput | null,
  and?: Array< ModelOrganizationFilterInput | null > | null,
  or?: Array< ModelOrganizationFilterInput | null > | null,
  not?: ModelOrganizationFilterInput | null,
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

export type ModelRewardFilterInput = {
  id?: ModelIDInput | null,
  creatorId?: ModelIDInput | null,
  title?: ModelStringInput | null,
  wealthAmount?: ModelIntInput | null,
  logoUri?: ModelStringInput | null,
  description?: ModelStringInput | null,
  heroPhotoUri?: ModelStringInput | null,
  redeemed?: ModelBooleanInput | null,
  and?: Array< ModelRewardFilterInput | null > | null,
  or?: Array< ModelRewardFilterInput | null > | null,
  not?: ModelRewardFilterInput | null,
};

export type ModelRewardConnection = {
  __typename: "ModelRewardConnection",
  items:  Array<Reward | null >,
  nextToken?: string | null,
};

export type getOpportunityQueryVariables = {
  id: string,
};

export type getOpportunityQuery = {
  getOpportunity?:  {
    __typename: "Opportunity",
    id: string,
    categories: Array< string | null >,
    createdAt: string,
    creator:  {
      __typename: "Athlete",
      id: string,
      handle?: string | null,
    },
    creatorId: string,
    details: string,
    detailsTldr: string,
    endDateTime: number,
    eventType: string,
    heroPhotoUri: string,
    isPrivate: boolean,
    locationDetail?:  {
      __typename: "LocationDetail",
      address: string,
      city: string,
      country: string,
      name?: string | null,
      state: string,
      unit?: string | null,
      zipCode: string,
    } | null,
    logoUri: string,
    onlineReserved: number,
    onlineTotal: number,
    organizations?:  {
      __typename: "ModelOrganizationConnection",
      items:  Array< {
        __typename: "Organization",
        id: string,
        displayName: string,
        relationshipType: OrganizationRelationshipType,
      } | null >,
    } | null,
    orgs?:  Array< {
      __typename: "Org",
      displayName: string,
      relationshipType: OrganizationRelationshipType,
    } | null > | null,
    registrationUrl: string,
    reward: number,
    rewardDetails: string,
    seatsReserved: number,
    seatsTotal: number,
    startDateTime: number,
    subtitle: string,
    status: string,
    tags: Array< string | null >,
    timezone: string,
    title: string,
    updatedAt: string,
    websitePrompt: string,
    websiteUrl: string,
  } | null,
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
      bio?: string | null,
      profilePhotoUri?: string | null,
      heroPhotoUri?: string | null,
      email: string,
      level?: AthleteLevel | null,
      sport?:  {
        __typename: "AthleteSport",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      } | null,
      team?:  {
        __typename: "AthleteTeam",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      } | null,
      address?:  {
        __typename: "Address",
        streetAddress: string,
        apt?: string | null,
        city: string,
        state: string,
        zipCode: string,
      } | null,
      dateOfBirth?: string | null,
      accounts?:  {
        __typename: "ModelAthleteAccountConnection",
        nextToken?: string | null,
      } | null,
      unitLookup?:  {
        __typename: "AthleteUnitLookup",
        appId: string,
        custId?: string | null,
      } | null,
      podSettings?:  {
        __typename: "PodSettings",
        SAVINGS: number,
        INVESTMENTS: number,
        SPENDING: number,
      } | null,
      plaidToken?: string | null,
      plaidProcessorToken?:  {
        __typename: "ProcessorToken",
        plaidAccountId: string,
        processorToken?: string | null,
      } | null,
      wyreId?: string | null,
      isActive: boolean,
      handle?: string | null,
      wealthBalance: number,
      socialHandles?:  {
        __typename: "ModelSocialHandleConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    },
    unitAccountId: string,
    routingCode: string,
    accountNumber: string,
    podName: string,
    id: string,
    createdAt: string,
    updatedAt: string,
    athleteAccountsId?: string | null,
  } | null > | null,
};

export type OpenAccountMutationVariables = {
  athleteId: string,
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
      bio?: string | null,
      profilePhotoUri?: string | null,
      heroPhotoUri?: string | null,
      email: string,
      level?: AthleteLevel | null,
      sport?:  {
        __typename: "AthleteSport",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      } | null,
      team?:  {
        __typename: "AthleteTeam",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      } | null,
      address?:  {
        __typename: "Address",
        streetAddress: string,
        apt?: string | null,
        city: string,
        state: string,
        zipCode: string,
      } | null,
      dateOfBirth?: string | null,
      accounts?:  {
        __typename: "ModelAthleteAccountConnection",
        nextToken?: string | null,
      } | null,
      unitLookup?:  {
        __typename: "AthleteUnitLookup",
        appId: string,
        custId?: string | null,
      } | null,
      podSettings?:  {
        __typename: "PodSettings",
        SAVINGS: number,
        INVESTMENTS: number,
        SPENDING: number,
      } | null,
      plaidToken?: string | null,
      plaidProcessorToken?:  {
        __typename: "ProcessorToken",
        plaidAccountId: string,
        processorToken?: string | null,
      } | null,
      wyreId?: string | null,
      isActive: boolean,
      handle?: string | null,
      wealthBalance: number,
      socialHandles?:  {
        __typename: "ModelSocialHandleConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    },
    unitAccountId: string,
    routingCode: string,
    accountNumber: string,
    podName: string,
    id: string,
    createdAt: string,
    updatedAt: string,
    athleteAccountsId?: string | null,
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
      routingNumber?: string | null,
      accountNumber?: string | null,
      currency?: string | null,
      hold?: number | null,
      available?: number | null,
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
      bio?: string | null,
      profilePhotoUri?: string | null,
      heroPhotoUri?: string | null,
      email: string,
      level?: AthleteLevel | null,
      sport?:  {
        __typename: "AthleteSport",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      } | null,
      team?:  {
        __typename: "AthleteTeam",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      } | null,
      address?:  {
        __typename: "Address",
        streetAddress: string,
        apt?: string | null,
        city: string,
        state: string,
        zipCode: string,
      } | null,
      dateOfBirth?: string | null,
      accounts?:  {
        __typename: "ModelAthleteAccountConnection",
        nextToken?: string | null,
      } | null,
      unitLookup?:  {
        __typename: "AthleteUnitLookup",
        appId: string,
        custId?: string | null,
      } | null,
      podSettings?:  {
        __typename: "PodSettings",
        SAVINGS: number,
        INVESTMENTS: number,
        SPENDING: number,
      } | null,
      plaidToken?: string | null,
      plaidProcessorToken?:  {
        __typename: "ProcessorToken",
        plaidAccountId: string,
        processorToken?: string | null,
      } | null,
      wyreId?: string | null,
      isActive: boolean,
      handle?: string | null,
      wealthBalance: number,
      socialHandles?:  {
        __typename: "ModelSocialHandleConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    },
    unitAccountId: string,
    routingCode: string,
    accountNumber: string,
    podName: string,
    id: string,
    createdAt: string,
    updatedAt: string,
    athleteAccountsId?: string | null,
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

export type CreatePlaidPaymentMutationVariables = {
  athleteId: string,
  plaidAccountId: string,
  amount: number,
  description?: string | null,
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
      routingNumber?: string | null,
      accountNumber?: string | null,
      currency?: string | null,
      hold?: number | null,
      available?: number | null,
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
      routingNumber?: string | null,
      accountNumber?: string | null,
      currency?: string | null,
      hold?: number | null,
      available?: number | null,
    } | null,
  } | null,
};

export type DebitAccountMutationVariables = {
  athleteId: string,
  unitAccountId: string,
  amount: number,
  description?: string | null,
  receiverName: string,
  receiverRoutingNumber: string,
  receiverAccountNumber: string,
  receiverAccountType?: string | null,
  addenda?: string | null,
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
      routingNumber?: string | null,
      accountNumber?: string | null,
      currency?: string | null,
      hold?: number | null,
      available?: number | null,
    } | null,
  } | null,
};

export type CreditAccountMutationVariables = {
  athleteId: string,
  unitAccountId: string,
  amount: number,
  description?: string | null,
  receiverName: string,
  receiverRoutingNumber: string,
  receiverAccountNumber: string,
  receiverAccountType?: string | null,
  addenda?: string | null,
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
      routingNumber?: string | null,
      accountNumber?: string | null,
      currency?: string | null,
      hold?: number | null,
      available?: number | null,
    } | null,
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
    bio?: string | null,
    profilePhotoUri?: string | null,
    heroPhotoUri?: string | null,
    email: string,
    level?: AthleteLevel | null,
    sport?:  {
      __typename: "AthleteSport",
      name: string,
      airTableId: string,
      isActive?: boolean | null,
    } | null,
    team?:  {
      __typename: "AthleteTeam",
      name: string,
      airTableId: string,
      isActive?: boolean | null,
    } | null,
    address?:  {
      __typename: "Address",
      streetAddress: string,
      apt?: string | null,
      city: string,
      state: string,
      zipCode: string,
    } | null,
    dateOfBirth?: string | null,
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
      } | null >,
      nextToken?: string | null,
    } | null,
    unitLookup?:  {
      __typename: "AthleteUnitLookup",
      appId: string,
      custId?: string | null,
    } | null,
    podSettings?:  {
      __typename: "PodSettings",
      SAVINGS: number,
      INVESTMENTS: number,
      SPENDING: number,
    } | null,
    plaidToken?: string | null,
    plaidProcessorToken?:  {
      __typename: "ProcessorToken",
      plaidAccountId: string,
      processorToken?: string | null,
    } | null,
    wyreId?: string | null,
    isActive: boolean,
    handle?: string | null,
    wealthBalance: number,
    socialHandles?:  {
      __typename: "ModelSocialHandleConnection",
      items:  Array< {
        __typename: "SocialHandle",
        platform: SocialPlatform,
        handle: string,
        id: string,
        createdAt: string,
        updatedAt: string,
        athleteSocialHandlesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
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
    bio?: string | null,
    profilePhotoUri?: string | null,
    heroPhotoUri?: string | null,
    email: string,
    level?: AthleteLevel | null,
    sport?:  {
      __typename: "AthleteSport",
      name: string,
      airTableId: string,
      isActive?: boolean | null,
    } | null,
    team?:  {
      __typename: "AthleteTeam",
      name: string,
      airTableId: string,
      isActive?: boolean | null,
    } | null,
    address?:  {
      __typename: "Address",
      streetAddress: string,
      apt?: string | null,
      city: string,
      state: string,
      zipCode: string,
    } | null,
    dateOfBirth?: string | null,
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
      } | null >,
      nextToken?: string | null,
    } | null,
    unitLookup?:  {
      __typename: "AthleteUnitLookup",
      appId: string,
      custId?: string | null,
    } | null,
    podSettings?:  {
      __typename: "PodSettings",
      SAVINGS: number,
      INVESTMENTS: number,
      SPENDING: number,
    } | null,
    plaidToken?: string | null,
    plaidProcessorToken?:  {
      __typename: "ProcessorToken",
      plaidAccountId: string,
      processorToken?: string | null,
    } | null,
    wyreId?: string | null,
    isActive: boolean,
    handle?: string | null,
    wealthBalance: number,
    socialHandles?:  {
      __typename: "ModelSocialHandleConnection",
      items:  Array< {
        __typename: "SocialHandle",
        platform: SocialPlatform,
        handle: string,
        id: string,
        createdAt: string,
        updatedAt: string,
        athleteSocialHandlesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
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
    bio?: string | null,
    profilePhotoUri?: string | null,
    heroPhotoUri?: string | null,
    email: string,
    level?: AthleteLevel | null,
    sport?:  {
      __typename: "AthleteSport",
      name: string,
      airTableId: string,
      isActive?: boolean | null,
    } | null,
    team?:  {
      __typename: "AthleteTeam",
      name: string,
      airTableId: string,
      isActive?: boolean | null,
    } | null,
    address?:  {
      __typename: "Address",
      streetAddress: string,
      apt?: string | null,
      city: string,
      state: string,
      zipCode: string,
    } | null,
    dateOfBirth?: string | null,
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
      } | null >,
      nextToken?: string | null,
    } | null,
    unitLookup?:  {
      __typename: "AthleteUnitLookup",
      appId: string,
      custId?: string | null,
    } | null,
    podSettings?:  {
      __typename: "PodSettings",
      SAVINGS: number,
      INVESTMENTS: number,
      SPENDING: number,
    } | null,
    plaidToken?: string | null,
    plaidProcessorToken?:  {
      __typename: "ProcessorToken",
      plaidAccountId: string,
      processorToken?: string | null,
    } | null,
    wyreId?: string | null,
    isActive: boolean,
    handle?: string | null,
    wealthBalance: number,
    socialHandles?:  {
      __typename: "ModelSocialHandleConnection",
      items:  Array< {
        __typename: "SocialHandle",
        platform: SocialPlatform,
        handle: string,
        id: string,
        createdAt: string,
        updatedAt: string,
        athleteSocialHandlesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
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
      bio?: string | null,
      profilePhotoUri?: string | null,
      heroPhotoUri?: string | null,
      email: string,
      level?: AthleteLevel | null,
      sport?:  {
        __typename: "AthleteSport",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      } | null,
      team?:  {
        __typename: "AthleteTeam",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      } | null,
      address?:  {
        __typename: "Address",
        streetAddress: string,
        apt?: string | null,
        city: string,
        state: string,
        zipCode: string,
      } | null,
      dateOfBirth?: string | null,
      accounts?:  {
        __typename: "ModelAthleteAccountConnection",
        nextToken?: string | null,
      } | null,
      unitLookup?:  {
        __typename: "AthleteUnitLookup",
        appId: string,
        custId?: string | null,
      } | null,
      podSettings?:  {
        __typename: "PodSettings",
        SAVINGS: number,
        INVESTMENTS: number,
        SPENDING: number,
      } | null,
      plaidToken?: string | null,
      plaidProcessorToken?:  {
        __typename: "ProcessorToken",
        plaidAccountId: string,
        processorToken?: string | null,
      } | null,
      wyreId?: string | null,
      isActive: boolean,
      handle?: string | null,
      wealthBalance: number,
      socialHandles?:  {
        __typename: "ModelSocialHandleConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    },
    unitAccountId: string,
    routingCode: string,
    accountNumber: string,
    podName: string,
    id: string,
    createdAt: string,
    updatedAt: string,
    athleteAccountsId?: string | null,
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
      bio?: string | null,
      profilePhotoUri?: string | null,
      heroPhotoUri?: string | null,
      email: string,
      level?: AthleteLevel | null,
      sport?:  {
        __typename: "AthleteSport",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      } | null,
      team?:  {
        __typename: "AthleteTeam",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      } | null,
      address?:  {
        __typename: "Address",
        streetAddress: string,
        apt?: string | null,
        city: string,
        state: string,
        zipCode: string,
      } | null,
      dateOfBirth?: string | null,
      accounts?:  {
        __typename: "ModelAthleteAccountConnection",
        nextToken?: string | null,
      } | null,
      unitLookup?:  {
        __typename: "AthleteUnitLookup",
        appId: string,
        custId?: string | null,
      } | null,
      podSettings?:  {
        __typename: "PodSettings",
        SAVINGS: number,
        INVESTMENTS: number,
        SPENDING: number,
      } | null,
      plaidToken?: string | null,
      plaidProcessorToken?:  {
        __typename: "ProcessorToken",
        plaidAccountId: string,
        processorToken?: string | null,
      } | null,
      wyreId?: string | null,
      isActive: boolean,
      handle?: string | null,
      wealthBalance: number,
      socialHandles?:  {
        __typename: "ModelSocialHandleConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    },
    unitAccountId: string,
    routingCode: string,
    accountNumber: string,
    podName: string,
    id: string,
    createdAt: string,
    updatedAt: string,
    athleteAccountsId?: string | null,
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
      bio?: string | null,
      profilePhotoUri?: string | null,
      heroPhotoUri?: string | null,
      email: string,
      level?: AthleteLevel | null,
      sport?:  {
        __typename: "AthleteSport",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      } | null,
      team?:  {
        __typename: "AthleteTeam",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      } | null,
      address?:  {
        __typename: "Address",
        streetAddress: string,
        apt?: string | null,
        city: string,
        state: string,
        zipCode: string,
      } | null,
      dateOfBirth?: string | null,
      accounts?:  {
        __typename: "ModelAthleteAccountConnection",
        nextToken?: string | null,
      } | null,
      unitLookup?:  {
        __typename: "AthleteUnitLookup",
        appId: string,
        custId?: string | null,
      } | null,
      podSettings?:  {
        __typename: "PodSettings",
        SAVINGS: number,
        INVESTMENTS: number,
        SPENDING: number,
      } | null,
      plaidToken?: string | null,
      plaidProcessorToken?:  {
        __typename: "ProcessorToken",
        plaidAccountId: string,
        processorToken?: string | null,
      } | null,
      wyreId?: string | null,
      isActive: boolean,
      handle?: string | null,
      wealthBalance: number,
      socialHandles?:  {
        __typename: "ModelSocialHandleConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    },
    unitAccountId: string,
    routingCode: string,
    accountNumber: string,
    podName: string,
    id: string,
    createdAt: string,
    updatedAt: string,
    athleteAccountsId?: string | null,
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
    athleteId?: string | null,
    status?: string | null,
    amount?: number | null,
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
    athleteId?: string | null,
    status?: string | null,
    amount?: number | null,
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
    athleteId?: string | null,
    status?: string | null,
    amount?: number | null,
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

export type CreateSocialHandleMutationVariables = {
  input: CreateSocialHandleInput,
  condition?: ModelSocialHandleConditionInput | null,
};

export type CreateSocialHandleMutation = {
  createSocialHandle?:  {
    __typename: "SocialHandle",
    platform: SocialPlatform,
    handle: string,
    id: string,
    createdAt: string,
    updatedAt: string,
    athleteSocialHandlesId?: string | null,
  } | null,
};

export type UpdateSocialHandleMutationVariables = {
  input: UpdateSocialHandleInput,
  condition?: ModelSocialHandleConditionInput | null,
};

export type UpdateSocialHandleMutation = {
  updateSocialHandle?:  {
    __typename: "SocialHandle",
    platform: SocialPlatform,
    handle: string,
    id: string,
    createdAt: string,
    updatedAt: string,
    athleteSocialHandlesId?: string | null,
  } | null,
};

export type DeleteSocialHandleMutationVariables = {
  input: DeleteSocialHandleInput,
  condition?: ModelSocialHandleConditionInput | null,
};

export type DeleteSocialHandleMutation = {
  deleteSocialHandle?:  {
    __typename: "SocialHandle",
    platform: SocialPlatform,
    handle: string,
    id: string,
    createdAt: string,
    updatedAt: string,
    athleteSocialHandlesId?: string | null,
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

export type CreateEventMutationVariables = {
  input: CreateEventInput,
  condition?: ModelEventConditionInput | null,
};

export type CreateEventMutation = {
  createEvent?:  {
    __typename: "Event",
    creatorId: string,
    creator:  {
      __typename: "Athlete",
      firstName: string,
      lastName: string,
      mobilePhone: string,
      athleteTag?: string | null,
      bio?: string | null,
      profilePhotoUri?: string | null,
      heroPhotoUri?: string | null,
      email: string,
      level?: AthleteLevel | null,
      sport?:  {
        __typename: "AthleteSport",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      } | null,
      team?:  {
        __typename: "AthleteTeam",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      } | null,
      address?:  {
        __typename: "Address",
        streetAddress: string,
        apt?: string | null,
        city: string,
        state: string,
        zipCode: string,
      } | null,
      dateOfBirth?: string | null,
      accounts?:  {
        __typename: "ModelAthleteAccountConnection",
        nextToken?: string | null,
      } | null,
      unitLookup?:  {
        __typename: "AthleteUnitLookup",
        appId: string,
        custId?: string | null,
      } | null,
      podSettings?:  {
        __typename: "PodSettings",
        SAVINGS: number,
        INVESTMENTS: number,
        SPENDING: number,
      } | null,
      plaidToken?: string | null,
      plaidProcessorToken?:  {
        __typename: "ProcessorToken",
        plaidAccountId: string,
        processorToken?: string | null,
      } | null,
      wyreId?: string | null,
      isActive: boolean,
      handle?: string | null,
      wealthBalance: number,
      socialHandles?:  {
        __typename: "ModelSocialHandleConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    },
    sponsor: string,
    title: string,
    category: string,
    heroPhotoUri: string,
    logoUri: string,
    tagline: string,
    description: string,
    dateTime: number,
    location: string,
    reward: number,
    registered: boolean,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateEventMutationVariables = {
  input: UpdateEventInput,
  condition?: ModelEventConditionInput | null,
};

export type UpdateEventMutation = {
  updateEvent?:  {
    __typename: "Event",
    creatorId: string,
    creator:  {
      __typename: "Athlete",
      firstName: string,
      lastName: string,
      mobilePhone: string,
      athleteTag?: string | null,
      bio?: string | null,
      profilePhotoUri?: string | null,
      heroPhotoUri?: string | null,
      email: string,
      level?: AthleteLevel | null,
      sport?:  {
        __typename: "AthleteSport",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      } | null,
      team?:  {
        __typename: "AthleteTeam",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      } | null,
      address?:  {
        __typename: "Address",
        streetAddress: string,
        apt?: string | null,
        city: string,
        state: string,
        zipCode: string,
      } | null,
      dateOfBirth?: string | null,
      accounts?:  {
        __typename: "ModelAthleteAccountConnection",
        nextToken?: string | null,
      } | null,
      unitLookup?:  {
        __typename: "AthleteUnitLookup",
        appId: string,
        custId?: string | null,
      } | null,
      podSettings?:  {
        __typename: "PodSettings",
        SAVINGS: number,
        INVESTMENTS: number,
        SPENDING: number,
      } | null,
      plaidToken?: string | null,
      plaidProcessorToken?:  {
        __typename: "ProcessorToken",
        plaidAccountId: string,
        processorToken?: string | null,
      } | null,
      wyreId?: string | null,
      isActive: boolean,
      handle?: string | null,
      wealthBalance: number,
      socialHandles?:  {
        __typename: "ModelSocialHandleConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    },
    sponsor: string,
    title: string,
    category: string,
    heroPhotoUri: string,
    logoUri: string,
    tagline: string,
    description: string,
    dateTime: number,
    location: string,
    reward: number,
    registered: boolean,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteEventMutationVariables = {
  input: DeleteEventInput,
  condition?: ModelEventConditionInput | null,
};

export type DeleteEventMutation = {
  deleteEvent?:  {
    __typename: "Event",
    creatorId: string,
    creator:  {
      __typename: "Athlete",
      firstName: string,
      lastName: string,
      mobilePhone: string,
      athleteTag?: string | null,
      bio?: string | null,
      profilePhotoUri?: string | null,
      heroPhotoUri?: string | null,
      email: string,
      level?: AthleteLevel | null,
      sport?:  {
        __typename: "AthleteSport",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      } | null,
      team?:  {
        __typename: "AthleteTeam",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      } | null,
      address?:  {
        __typename: "Address",
        streetAddress: string,
        apt?: string | null,
        city: string,
        state: string,
        zipCode: string,
      } | null,
      dateOfBirth?: string | null,
      accounts?:  {
        __typename: "ModelAthleteAccountConnection",
        nextToken?: string | null,
      } | null,
      unitLookup?:  {
        __typename: "AthleteUnitLookup",
        appId: string,
        custId?: string | null,
      } | null,
      podSettings?:  {
        __typename: "PodSettings",
        SAVINGS: number,
        INVESTMENTS: number,
        SPENDING: number,
      } | null,
      plaidToken?: string | null,
      plaidProcessorToken?:  {
        __typename: "ProcessorToken",
        plaidAccountId: string,
        processorToken?: string | null,
      } | null,
      wyreId?: string | null,
      isActive: boolean,
      handle?: string | null,
      wealthBalance: number,
      socialHandles?:  {
        __typename: "ModelSocialHandleConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    },
    sponsor: string,
    title: string,
    category: string,
    heroPhotoUri: string,
    logoUri: string,
    tagline: string,
    description: string,
    dateTime: number,
    location: string,
    reward: number,
    registered: boolean,
    id: string,
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

export type CreateLearnMutationVariables = {
  input: CreateLearnInput,
  condition?: ModelLearnConditionInput | null,
};

export type CreateLearnMutation = {
  createLearn?:  {
    __typename: "Learn",
    creatorId: string,
    creator:  {
      __typename: "Athlete",
      firstName: string,
      lastName: string,
      mobilePhone: string,
      athleteTag?: string | null,
      bio?: string | null,
      profilePhotoUri?: string | null,
      heroPhotoUri?: string | null,
      email: string,
      level?: AthleteLevel | null,
      sport?:  {
        __typename: "AthleteSport",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      } | null,
      team?:  {
        __typename: "AthleteTeam",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      } | null,
      address?:  {
        __typename: "Address",
        streetAddress: string,
        apt?: string | null,
        city: string,
        state: string,
        zipCode: string,
      } | null,
      dateOfBirth?: string | null,
      accounts?:  {
        __typename: "ModelAthleteAccountConnection",
        nextToken?: string | null,
      } | null,
      unitLookup?:  {
        __typename: "AthleteUnitLookup",
        appId: string,
        custId?: string | null,
      } | null,
      podSettings?:  {
        __typename: "PodSettings",
        SAVINGS: number,
        INVESTMENTS: number,
        SPENDING: number,
      } | null,
      plaidToken?: string | null,
      plaidProcessorToken?:  {
        __typename: "ProcessorToken",
        plaidAccountId: string,
        processorToken?: string | null,
      } | null,
      wyreId?: string | null,
      isActive: boolean,
      handle?: string | null,
      wealthBalance: number,
      socialHandles?:  {
        __typename: "ModelSocialHandleConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    },
    bgImageUri?: string | null,
    sponsor: string,
    title: string,
    level: LearnLevel,
    reward: number,
    deposits:  Array< {
      __typename: "Deposit",
      videoUri?: string | null,
      title: string,
      questions:  Array< {
        __typename: "Quiz",
        questionText: string,
        answers: Array< string >,
        correctAnswer: string,
      } >,
    } >,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateLearnMutationVariables = {
  input: UpdateLearnInput,
  condition?: ModelLearnConditionInput | null,
};

export type UpdateLearnMutation = {
  updateLearn?:  {
    __typename: "Learn",
    creatorId: string,
    creator:  {
      __typename: "Athlete",
      firstName: string,
      lastName: string,
      mobilePhone: string,
      athleteTag?: string | null,
      bio?: string | null,
      profilePhotoUri?: string | null,
      heroPhotoUri?: string | null,
      email: string,
      level?: AthleteLevel | null,
      sport?:  {
        __typename: "AthleteSport",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      } | null,
      team?:  {
        __typename: "AthleteTeam",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      } | null,
      address?:  {
        __typename: "Address",
        streetAddress: string,
        apt?: string | null,
        city: string,
        state: string,
        zipCode: string,
      } | null,
      dateOfBirth?: string | null,
      accounts?:  {
        __typename: "ModelAthleteAccountConnection",
        nextToken?: string | null,
      } | null,
      unitLookup?:  {
        __typename: "AthleteUnitLookup",
        appId: string,
        custId?: string | null,
      } | null,
      podSettings?:  {
        __typename: "PodSettings",
        SAVINGS: number,
        INVESTMENTS: number,
        SPENDING: number,
      } | null,
      plaidToken?: string | null,
      plaidProcessorToken?:  {
        __typename: "ProcessorToken",
        plaidAccountId: string,
        processorToken?: string | null,
      } | null,
      wyreId?: string | null,
      isActive: boolean,
      handle?: string | null,
      wealthBalance: number,
      socialHandles?:  {
        __typename: "ModelSocialHandleConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    },
    bgImageUri?: string | null,
    sponsor: string,
    title: string,
    level: LearnLevel,
    reward: number,
    deposits:  Array< {
      __typename: "Deposit",
      videoUri?: string | null,
      title: string,
      questions:  Array< {
        __typename: "Quiz",
        questionText: string,
        answers: Array< string >,
        correctAnswer: string,
      } >,
    } >,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteLearnMutationVariables = {
  input: DeleteLearnInput,
  condition?: ModelLearnConditionInput | null,
};

export type DeleteLearnMutation = {
  deleteLearn?:  {
    __typename: "Learn",
    creatorId: string,
    creator:  {
      __typename: "Athlete",
      firstName: string,
      lastName: string,
      mobilePhone: string,
      athleteTag?: string | null,
      bio?: string | null,
      profilePhotoUri?: string | null,
      heroPhotoUri?: string | null,
      email: string,
      level?: AthleteLevel | null,
      sport?:  {
        __typename: "AthleteSport",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      } | null,
      team?:  {
        __typename: "AthleteTeam",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      } | null,
      address?:  {
        __typename: "Address",
        streetAddress: string,
        apt?: string | null,
        city: string,
        state: string,
        zipCode: string,
      } | null,
      dateOfBirth?: string | null,
      accounts?:  {
        __typename: "ModelAthleteAccountConnection",
        nextToken?: string | null,
      } | null,
      unitLookup?:  {
        __typename: "AthleteUnitLookup",
        appId: string,
        custId?: string | null,
      } | null,
      podSettings?:  {
        __typename: "PodSettings",
        SAVINGS: number,
        INVESTMENTS: number,
        SPENDING: number,
      } | null,
      plaidToken?: string | null,
      plaidProcessorToken?:  {
        __typename: "ProcessorToken",
        plaidAccountId: string,
        processorToken?: string | null,
      } | null,
      wyreId?: string | null,
      isActive: boolean,
      handle?: string | null,
      wealthBalance: number,
      socialHandles?:  {
        __typename: "ModelSocialHandleConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    },
    bgImageUri?: string | null,
    sponsor: string,
    title: string,
    level: LearnLevel,
    reward: number,
    deposits:  Array< {
      __typename: "Deposit",
      videoUri?: string | null,
      title: string,
      questions:  Array< {
        __typename: "Quiz",
        questionText: string,
        answers: Array< string >,
        correctAnswer: string,
      } >,
    } >,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateLearnStatusMutationVariables = {
  input: CreateLearnStatusInput,
  condition?: ModelLearnStatusConditionInput | null,
};

export type CreateLearnStatusMutation = {
  createLearnStatus?:  {
    __typename: "LearnStatus",
    athleteId: string,
    learnItemId: string,
    passedDepositIndex: number,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateLearnStatusMutationVariables = {
  input: UpdateLearnStatusInput,
  condition?: ModelLearnStatusConditionInput | null,
};

export type UpdateLearnStatusMutation = {
  updateLearnStatus?:  {
    __typename: "LearnStatus",
    athleteId: string,
    learnItemId: string,
    passedDepositIndex: number,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteLearnStatusMutationVariables = {
  input: DeleteLearnStatusInput,
  condition?: ModelLearnStatusConditionInput | null,
};

export type DeleteLearnStatusMutation = {
  deleteLearnStatus?:  {
    __typename: "LearnStatus",
    athleteId: string,
    learnItemId: string,
    passedDepositIndex: number,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateOpportunityMutationVariables = {
  input: CreateOpportunityInput,
  condition?: ModelOpportunityConditionInput | null,
};

export type CreateOpportunityMutation = {
  createOpportunity?:  {
    __typename: "Opportunity",
    id: string,
    categories: Array< string | null >,
    creatorId: string,
    creator:  {
      __typename: "Athlete",
      firstName: string,
      lastName: string,
      mobilePhone: string,
      athleteTag?: string | null,
      bio?: string | null,
      profilePhotoUri?: string | null,
      heroPhotoUri?: string | null,
      email: string,
      level?: AthleteLevel | null,
      sport?:  {
        __typename: "AthleteSport",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      } | null,
      team?:  {
        __typename: "AthleteTeam",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      } | null,
      address?:  {
        __typename: "Address",
        streetAddress: string,
        apt?: string | null,
        city: string,
        state: string,
        zipCode: string,
      } | null,
      dateOfBirth?: string | null,
      accounts?:  {
        __typename: "ModelAthleteAccountConnection",
        nextToken?: string | null,
      } | null,
      unitLookup?:  {
        __typename: "AthleteUnitLookup",
        appId: string,
        custId?: string | null,
      } | null,
      podSettings?:  {
        __typename: "PodSettings",
        SAVINGS: number,
        INVESTMENTS: number,
        SPENDING: number,
      } | null,
      plaidToken?: string | null,
      plaidProcessorToken?:  {
        __typename: "ProcessorToken",
        plaidAccountId: string,
        processorToken?: string | null,
      } | null,
      wyreId?: string | null,
      isActive: boolean,
      handle?: string | null,
      wealthBalance: number,
      socialHandles?:  {
        __typename: "ModelSocialHandleConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    },
    details: string,
    detailsTldr: string,
    endDateTime: number,
    eventType: string,
    heroPhotoUri: string,
    isPrivate: boolean,
    location?:  {
      __typename: "Location",
      lat: number,
      lon: number,
    } | null,
    locationDetail?:  {
      __typename: "LocationDetail",
      address: string,
      unit?: string | null,
      city: string,
      state: string,
      zipCode: string,
      country: string,
      name?: string | null,
    } | null,
    logoUri: string,
    onlineReserved: number,
    onlineTotal: number,
    organizations?:  {
      __typename: "ModelOrganizationConnection",
      items:  Array< {
        __typename: "Organization",
        id: string,
        displayName: string,
        relationshipType: OrganizationRelationshipType,
        opportunityId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    orgs?:  Array< {
      __typename: "Org",
      displayName: string,
      relationshipType: OrganizationRelationshipType,
    } | null > | null,
    registrationUrl: string,
    reward: number,
    rewardDetails: string,
    seatsReserved: number,
    seatsTotal: number,
    startDateTime: number,
    status: string,
    subtitle: string,
    tags: Array< string | null >,
    title: string,
    timezone: string,
    websitePrompt: string,
    websiteUrl: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateOpportunityMutationVariables = {
  input: UpdateOpportunityInput,
  condition?: ModelOpportunityConditionInput | null,
};

export type UpdateOpportunityMutation = {
  updateOpportunity?:  {
    __typename: "Opportunity",
    id: string,
    categories: Array< string | null >,
    creatorId: string,
    creator:  {
      __typename: "Athlete",
      firstName: string,
      lastName: string,
      mobilePhone: string,
      athleteTag?: string | null,
      bio?: string | null,
      profilePhotoUri?: string | null,
      heroPhotoUri?: string | null,
      email: string,
      level?: AthleteLevel | null,
      sport?:  {
        __typename: "AthleteSport",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      } | null,
      team?:  {
        __typename: "AthleteTeam",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      } | null,
      address?:  {
        __typename: "Address",
        streetAddress: string,
        apt?: string | null,
        city: string,
        state: string,
        zipCode: string,
      } | null,
      dateOfBirth?: string | null,
      accounts?:  {
        __typename: "ModelAthleteAccountConnection",
        nextToken?: string | null,
      } | null,
      unitLookup?:  {
        __typename: "AthleteUnitLookup",
        appId: string,
        custId?: string | null,
      } | null,
      podSettings?:  {
        __typename: "PodSettings",
        SAVINGS: number,
        INVESTMENTS: number,
        SPENDING: number,
      } | null,
      plaidToken?: string | null,
      plaidProcessorToken?:  {
        __typename: "ProcessorToken",
        plaidAccountId: string,
        processorToken?: string | null,
      } | null,
      wyreId?: string | null,
      isActive: boolean,
      handle?: string | null,
      wealthBalance: number,
      socialHandles?:  {
        __typename: "ModelSocialHandleConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    },
    details: string,
    detailsTldr: string,
    endDateTime: number,
    eventType: string,
    heroPhotoUri: string,
    isPrivate: boolean,
    location?:  {
      __typename: "Location",
      lat: number,
      lon: number,
    } | null,
    locationDetail?:  {
      __typename: "LocationDetail",
      address: string,
      unit?: string | null,
      city: string,
      state: string,
      zipCode: string,
      country: string,
      name?: string | null,
    } | null,
    logoUri: string,
    onlineReserved: number,
    onlineTotal: number,
    organizations?:  {
      __typename: "ModelOrganizationConnection",
      items:  Array< {
        __typename: "Organization",
        id: string,
        displayName: string,
        relationshipType: OrganizationRelationshipType,
        opportunityId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    orgs?:  Array< {
      __typename: "Org",
      displayName: string,
      relationshipType: OrganizationRelationshipType,
    } | null > | null,
    registrationUrl: string,
    reward: number,
    rewardDetails: string,
    seatsReserved: number,
    seatsTotal: number,
    startDateTime: number,
    status: string,
    subtitle: string,
    tags: Array< string | null >,
    title: string,
    timezone: string,
    websitePrompt: string,
    websiteUrl: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteOpportunityMutationVariables = {
  input: DeleteOpportunityInput,
  condition?: ModelOpportunityConditionInput | null,
};

export type DeleteOpportunityMutation = {
  deleteOpportunity?:  {
    __typename: "Opportunity",
    id: string,
    categories: Array< string | null >,
    creatorId: string,
    creator:  {
      __typename: "Athlete",
      firstName: string,
      lastName: string,
      mobilePhone: string,
      athleteTag?: string | null,
      bio?: string | null,
      profilePhotoUri?: string | null,
      heroPhotoUri?: string | null,
      email: string,
      level?: AthleteLevel | null,
      sport?:  {
        __typename: "AthleteSport",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      } | null,
      team?:  {
        __typename: "AthleteTeam",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      } | null,
      address?:  {
        __typename: "Address",
        streetAddress: string,
        apt?: string | null,
        city: string,
        state: string,
        zipCode: string,
      } | null,
      dateOfBirth?: string | null,
      accounts?:  {
        __typename: "ModelAthleteAccountConnection",
        nextToken?: string | null,
      } | null,
      unitLookup?:  {
        __typename: "AthleteUnitLookup",
        appId: string,
        custId?: string | null,
      } | null,
      podSettings?:  {
        __typename: "PodSettings",
        SAVINGS: number,
        INVESTMENTS: number,
        SPENDING: number,
      } | null,
      plaidToken?: string | null,
      plaidProcessorToken?:  {
        __typename: "ProcessorToken",
        plaidAccountId: string,
        processorToken?: string | null,
      } | null,
      wyreId?: string | null,
      isActive: boolean,
      handle?: string | null,
      wealthBalance: number,
      socialHandles?:  {
        __typename: "ModelSocialHandleConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    },
    details: string,
    detailsTldr: string,
    endDateTime: number,
    eventType: string,
    heroPhotoUri: string,
    isPrivate: boolean,
    location?:  {
      __typename: "Location",
      lat: number,
      lon: number,
    } | null,
    locationDetail?:  {
      __typename: "LocationDetail",
      address: string,
      unit?: string | null,
      city: string,
      state: string,
      zipCode: string,
      country: string,
      name?: string | null,
    } | null,
    logoUri: string,
    onlineReserved: number,
    onlineTotal: number,
    organizations?:  {
      __typename: "ModelOrganizationConnection",
      items:  Array< {
        __typename: "Organization",
        id: string,
        displayName: string,
        relationshipType: OrganizationRelationshipType,
        opportunityId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    orgs?:  Array< {
      __typename: "Org",
      displayName: string,
      relationshipType: OrganizationRelationshipType,
    } | null > | null,
    registrationUrl: string,
    reward: number,
    rewardDetails: string,
    seatsReserved: number,
    seatsTotal: number,
    startDateTime: number,
    status: string,
    subtitle: string,
    tags: Array< string | null >,
    title: string,
    timezone: string,
    websitePrompt: string,
    websiteUrl: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateOrganizationMutationVariables = {
  input: CreateOrganizationInput,
  condition?: ModelOrganizationConditionInput | null,
};

export type CreateOrganizationMutation = {
  createOrganization?:  {
    __typename: "Organization",
    id: string,
    displayName: string,
    relationshipType: OrganizationRelationshipType,
    opportunityId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateOrganizationMutationVariables = {
  input: UpdateOrganizationInput,
  condition?: ModelOrganizationConditionInput | null,
};

export type UpdateOrganizationMutation = {
  updateOrganization?:  {
    __typename: "Organization",
    id: string,
    displayName: string,
    relationshipType: OrganizationRelationshipType,
    opportunityId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteOrganizationMutationVariables = {
  input: DeleteOrganizationInput,
  condition?: ModelOrganizationConditionInput | null,
};

export type DeleteOrganizationMutation = {
  deleteOrganization?:  {
    __typename: "Organization",
    id: string,
    displayName: string,
    relationshipType: OrganizationRelationshipType,
    opportunityId: string,
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

export type CreateRewardMutationVariables = {
  input: CreateRewardInput,
  condition?: ModelRewardConditionInput | null,
};

export type CreateRewardMutation = {
  createReward?:  {
    __typename: "Reward",
    id: string,
    creatorId: string,
    creator:  {
      __typename: "Athlete",
      firstName: string,
      lastName: string,
      mobilePhone: string,
      athleteTag?: string | null,
      bio?: string | null,
      profilePhotoUri?: string | null,
      heroPhotoUri?: string | null,
      email: string,
      level?: AthleteLevel | null,
      sport?:  {
        __typename: "AthleteSport",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      } | null,
      team?:  {
        __typename: "AthleteTeam",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      } | null,
      address?:  {
        __typename: "Address",
        streetAddress: string,
        apt?: string | null,
        city: string,
        state: string,
        zipCode: string,
      } | null,
      dateOfBirth?: string | null,
      accounts?:  {
        __typename: "ModelAthleteAccountConnection",
        nextToken?: string | null,
      } | null,
      unitLookup?:  {
        __typename: "AthleteUnitLookup",
        appId: string,
        custId?: string | null,
      } | null,
      podSettings?:  {
        __typename: "PodSettings",
        SAVINGS: number,
        INVESTMENTS: number,
        SPENDING: number,
      } | null,
      plaidToken?: string | null,
      plaidProcessorToken?:  {
        __typename: "ProcessorToken",
        plaidAccountId: string,
        processorToken?: string | null,
      } | null,
      wyreId?: string | null,
      isActive: boolean,
      handle?: string | null,
      wealthBalance: number,
      socialHandles?:  {
        __typename: "ModelSocialHandleConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    },
    title: string,
    wealthAmount: number,
    logoUri?: string | null,
    description?: string | null,
    heroPhotoUri?: string | null,
    redeemed: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateRewardMutationVariables = {
  input: UpdateRewardInput,
  condition?: ModelRewardConditionInput | null,
};

export type UpdateRewardMutation = {
  updateReward?:  {
    __typename: "Reward",
    id: string,
    creatorId: string,
    creator:  {
      __typename: "Athlete",
      firstName: string,
      lastName: string,
      mobilePhone: string,
      athleteTag?: string | null,
      bio?: string | null,
      profilePhotoUri?: string | null,
      heroPhotoUri?: string | null,
      email: string,
      level?: AthleteLevel | null,
      sport?:  {
        __typename: "AthleteSport",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      } | null,
      team?:  {
        __typename: "AthleteTeam",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      } | null,
      address?:  {
        __typename: "Address",
        streetAddress: string,
        apt?: string | null,
        city: string,
        state: string,
        zipCode: string,
      } | null,
      dateOfBirth?: string | null,
      accounts?:  {
        __typename: "ModelAthleteAccountConnection",
        nextToken?: string | null,
      } | null,
      unitLookup?:  {
        __typename: "AthleteUnitLookup",
        appId: string,
        custId?: string | null,
      } | null,
      podSettings?:  {
        __typename: "PodSettings",
        SAVINGS: number,
        INVESTMENTS: number,
        SPENDING: number,
      } | null,
      plaidToken?: string | null,
      plaidProcessorToken?:  {
        __typename: "ProcessorToken",
        plaidAccountId: string,
        processorToken?: string | null,
      } | null,
      wyreId?: string | null,
      isActive: boolean,
      handle?: string | null,
      wealthBalance: number,
      socialHandles?:  {
        __typename: "ModelSocialHandleConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    },
    title: string,
    wealthAmount: number,
    logoUri?: string | null,
    description?: string | null,
    heroPhotoUri?: string | null,
    redeemed: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteRewardMutationVariables = {
  input: DeleteRewardInput,
  condition?: ModelRewardConditionInput | null,
};

export type DeleteRewardMutation = {
  deleteReward?:  {
    __typename: "Reward",
    id: string,
    creatorId: string,
    creator:  {
      __typename: "Athlete",
      firstName: string,
      lastName: string,
      mobilePhone: string,
      athleteTag?: string | null,
      bio?: string | null,
      profilePhotoUri?: string | null,
      heroPhotoUri?: string | null,
      email: string,
      level?: AthleteLevel | null,
      sport?:  {
        __typename: "AthleteSport",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      } | null,
      team?:  {
        __typename: "AthleteTeam",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      } | null,
      address?:  {
        __typename: "Address",
        streetAddress: string,
        apt?: string | null,
        city: string,
        state: string,
        zipCode: string,
      } | null,
      dateOfBirth?: string | null,
      accounts?:  {
        __typename: "ModelAthleteAccountConnection",
        nextToken?: string | null,
      } | null,
      unitLookup?:  {
        __typename: "AthleteUnitLookup",
        appId: string,
        custId?: string | null,
      } | null,
      podSettings?:  {
        __typename: "PodSettings",
        SAVINGS: number,
        INVESTMENTS: number,
        SPENDING: number,
      } | null,
      plaidToken?: string | null,
      plaidProcessorToken?:  {
        __typename: "ProcessorToken",
        plaidAccountId: string,
        processorToken?: string | null,
      } | null,
      wyreId?: string | null,
      isActive: boolean,
      handle?: string | null,
      wealthBalance: number,
      socialHandles?:  {
        __typename: "ModelSocialHandleConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    },
    title: string,
    wealthAmount: number,
    logoUri?: string | null,
    description?: string | null,
    heroPhotoUri?: string | null,
    redeemed: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListLearns_customQueryVariables = {
  filter?: ModelLearnFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListLearns_customQuery = {
  listLearns?:  {
    __typename: "ModelLearnConnection",
    items:  Array< {
      __typename: "Learn",
      creatorId: string,
      creator:  {
        __typename: "Athlete",
        firstName: string,
        lastName: string,
        mobilePhone: string,
        athleteTag?: string | null,
        bio?: string | null,
        profilePhotoUri?: string | null,
        heroPhotoUri?: string | null,
        email: string,
        level?: AthleteLevel | null,
        dateOfBirth?: string | null,
        plaidToken?: string | null,
        wyreId?: string | null,
        isActive: boolean,
        handle?: string | null,
        id: string,
        createdAt: string,
        updatedAt: string,
      },
      bgImageUri?: string | null,
      sponsor: string,
      title: string,
      level: LearnLevel,
      reward: number,
      deposits:  Array< {
        __typename: "Deposit",
        videoUri?: string | null,
        title: string,
        questions:  Array< {
          __typename: "Quiz",
          questionText: string,
          correctAnswer: string,
          answers: Array< string >,
        } >,
      } >,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetAthlete_customQueryVariables = {
  id: string,
};

export type GetAthlete_customQuery = {
  getAthlete?:  {
    __typename: "Athlete",
    firstName: string,
    lastName: string,
    mobilePhone: string,
    athleteTag?: string | null,
    bio?: string | null,
    profilePhotoUri?: string | null,
    heroPhotoUri?: string | null,
    email: string,
    level?: AthleteLevel | null,
    sport?:  {
      __typename: "AthleteSport",
      name: string,
      airTableId: string,
      isActive?: boolean | null,
    } | null,
    team?:  {
      __typename: "AthleteTeam",
      name: string,
      airTableId: string,
      isActive?: boolean | null,
    } | null,
    address?:  {
      __typename: "Address",
      streetAddress: string,
      apt?: string | null,
      city: string,
      state: string,
      zipCode: string,
    } | null,
    dateOfBirth?: string | null,
    unitLookup?:  {
      __typename: "AthleteUnitLookup",
      appId: string,
      custId?: string | null,
    } | null,
    podSettings?:  {
      __typename: "PodSettings",
      SAVINGS: number,
      INVESTMENTS: number,
      SPENDING: number,
    } | null,
    plaidToken?: string | null,
    plaidProcessorToken?:  {
      __typename: "ProcessorToken",
      plaidAccountId: string,
      processorToken?: string | null,
    } | null,
    wyreId?: string | null,
    isActive: boolean,
    handle?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
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

export type ListAthletUnitAccountsQueryVariables = {
  athleteId: string,
};

export type ListAthletUnitAccountsQuery = {
  listAthletUnitAccounts?:  Array< {
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
      routingNumber?: string | null,
      accountNumber?: string | null,
      currency?: string | null,
      hold?: number | null,
      available?: number | null,
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
      routingNumber?: string | null,
      accountNumber?: string | null,
      currency?: string | null,
      hold?: number | null,
      available?: number | null,
    } | null,
  } | null,
};

export type GetUnitTransactionByIdQueryVariables = {
  athleteId: string,
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
      routingNumber?: string | null,
      accountNumber?: string | null,
      currency?: string | null,
      hold?: number | null,
      available?: number | null,
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
      routingNumber?: string | null,
      accountNumber?: string | null,
      currency?: string | null,
      hold?: number | null,
      available?: number | null,
    } | null,
  } | null > | null,
};

export type NearbyOpportunitiesQueryVariables = {
  location: LocationInput,
  distInMeters?: number | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type NearbyOpportunitiesQuery = {
  nearbyOpportunities?:  {
    __typename: "ModelOpportunityConnection",
    items?:  Array< {
      __typename: "Opportunity",
      id: string,
      categories: Array< string | null >,
      creatorId: string,
      creator:  {
        __typename: "Athlete",
        firstName: string,
        lastName: string,
        mobilePhone: string,
        athleteTag?: string | null,
        bio?: string | null,
        profilePhotoUri?: string | null,
        heroPhotoUri?: string | null,
        email: string,
        level?: AthleteLevel | null,
        dateOfBirth?: string | null,
        plaidToken?: string | null,
        wyreId?: string | null,
        isActive: boolean,
        handle?: string | null,
        wealthBalance: number,
        id: string,
        createdAt: string,
        updatedAt: string,
      },
      details: string,
      detailsTldr: string,
      endDateTime: number,
      eventType: string,
      heroPhotoUri: string,
      isPrivate: boolean,
      location?:  {
        __typename: "Location",
        lat: number,
        lon: number,
      } | null,
      locationDetail?:  {
        __typename: "LocationDetail",
        address: string,
        unit?: string | null,
        city: string,
        state: string,
        zipCode: string,
        country: string,
        name?: string | null,
      } | null,
      logoUri: string,
      onlineReserved: number,
      onlineTotal: number,
      organizations?:  {
        __typename: "ModelOrganizationConnection",
        nextToken?: string | null,
      } | null,
      orgs?:  Array< {
        __typename: "Org",
        displayName: string,
        relationshipType: OrganizationRelationshipType,
      } | null > | null,
      registrationUrl: string,
      reward: number,
      rewardDetails: string,
      seatsReserved: number,
      seatsTotal: number,
      startDateTime: number,
      status: string,
      subtitle: string,
      tags: Array< string | null >,
      title: string,
      timezone: string,
      websitePrompt: string,
      websiteUrl: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    total?: number | null,
    nextToken?: string | null,
  } | null,
};

export type SearchEventsQueryVariables = {
  filter?: SearchableEventFilterInput | null,
  sort?: Array< SearchableEventSortInput | null > | null,
  limit?: number | null,
  nextToken?: string | null,
  from?: number | null,
  aggregates?: Array< SearchableEventAggregationInput | null > | null,
};

export type SearchEventsQuery = {
  searchEvents?:  {
    __typename: "SearchableEventConnection",
    items:  Array< {
      __typename: "Event",
      creatorId: string,
      creator:  {
        __typename: "Athlete",
        firstName: string,
        lastName: string,
        mobilePhone: string,
        athleteTag?: string | null,
        bio?: string | null,
        profilePhotoUri?: string | null,
        heroPhotoUri?: string | null,
        email: string,
        level?: AthleteLevel | null,
        dateOfBirth?: string | null,
        plaidToken?: string | null,
        wyreId?: string | null,
        isActive: boolean,
        handle?: string | null,
        wealthBalance: number,
        id: string,
        createdAt: string,
        updatedAt: string,
      },
      sponsor: string,
      title: string,
      category: string,
      heroPhotoUri: string,
      logoUri: string,
      tagline: string,
      description: string,
      dateTime: number,
      location: string,
      reward: number,
      registered: boolean,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
    total?: number | null,
    aggregateItems:  Array< {
      __typename: "SearchableAggregateResult",
      name: string,
      result: ( {
          __typename: "SearchableAggregateScalarResult",
          value: number,
        } | {
          __typename: "SearchableAggregateBucketResult",
          buckets?:  Array< {
            __typename: string,
            key: string,
            doc_count: number,
          } | null > | null,
        }
      ) | null,
    } | null >,
  } | null,
};

export type SearchLearnsQueryVariables = {
  filter?: SearchableLearnFilterInput | null,
  sort?: Array< SearchableLearnSortInput | null > | null,
  limit?: number | null,
  nextToken?: string | null,
  from?: number | null,
  aggregates?: Array< SearchableLearnAggregationInput | null > | null,
};

export type SearchLearnsQuery = {
  searchLearns?:  {
    __typename: "SearchableLearnConnection",
    items:  Array< {
      __typename: "Learn",
      creatorId: string,
      creator:  {
        __typename: "Athlete",
        firstName: string,
        lastName: string,
        mobilePhone: string,
        athleteTag?: string | null,
        bio?: string | null,
        profilePhotoUri?: string | null,
        heroPhotoUri?: string | null,
        email: string,
        level?: AthleteLevel | null,
        dateOfBirth?: string | null,
        plaidToken?: string | null,
        wyreId?: string | null,
        isActive: boolean,
        handle?: string | null,
        wealthBalance: number,
        id: string,
        createdAt: string,
        updatedAt: string,
      },
      bgImageUri?: string | null,
      sponsor: string,
      title: string,
      level: LearnLevel,
      reward: number,
      deposits:  Array< {
        __typename: "Deposit",
        videoUri?: string | null,
        title: string,
      } >,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
    total?: number | null,
    aggregateItems:  Array< {
      __typename: "SearchableAggregateResult",
      name: string,
      result: ( {
          __typename: "SearchableAggregateScalarResult",
          value: number,
        } | {
          __typename: "SearchableAggregateBucketResult",
          buckets?:  Array< {
            __typename: string,
            key: string,
            doc_count: number,
          } | null > | null,
        }
      ) | null,
    } | null >,
  } | null,
};

export type SearchLearnStatusesQueryVariables = {
  filter?: SearchableLearnStatusFilterInput | null,
  sort?: Array< SearchableLearnStatusSortInput | null > | null,
  limit?: number | null,
  nextToken?: string | null,
  from?: number | null,
  aggregates?: Array< SearchableLearnStatusAggregationInput | null > | null,
};

export type SearchLearnStatusesQuery = {
  searchLearnStatuses?:  {
    __typename: "SearchableLearnStatusConnection",
    items:  Array< {
      __typename: "LearnStatus",
      athleteId: string,
      learnItemId: string,
      passedDepositIndex: number,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
    total?: number | null,
    aggregateItems:  Array< {
      __typename: "SearchableAggregateResult",
      name: string,
      result: ( {
          __typename: "SearchableAggregateScalarResult",
          value: number,
        } | {
          __typename: "SearchableAggregateBucketResult",
          buckets?:  Array< {
            __typename: string,
            key: string,
            doc_count: number,
          } | null > | null,
        }
      ) | null,
    } | null >,
  } | null,
};

export type SearchOpportunitiesQueryVariables = {
  filter?: SearchableOpportunityFilterInput | null,
  sort?: Array< SearchableOpportunitySortInput | null > | null,
  limit?: number | null,
  nextToken?: string | null,
  from?: number | null,
  aggregates?: Array< SearchableOpportunityAggregationInput | null > | null,
};

export type SearchOpportunitiesQuery = {
  searchOpportunities?:  {
    __typename: "SearchableOpportunityConnection",
    items:  Array< {
      __typename: "Opportunity",
      id: string,
      categories: Array< string | null >,
      creatorId: string,
      creator:  {
        __typename: "Athlete",
        firstName: string,
        lastName: string,
        mobilePhone: string,
        athleteTag?: string | null,
        bio?: string | null,
        profilePhotoUri?: string | null,
        heroPhotoUri?: string | null,
        email: string,
        level?: AthleteLevel | null,
        dateOfBirth?: string | null,
        plaidToken?: string | null,
        wyreId?: string | null,
        isActive: boolean,
        handle?: string | null,
        wealthBalance: number,
        id: string,
        createdAt: string,
        updatedAt: string,
      },
      details: string,
      detailsTldr: string,
      endDateTime: number,
      eventType: string,
      heroPhotoUri: string,
      isPrivate: boolean,
      location?:  {
        __typename: "Location",
        lat: number,
        lon: number,
      } | null,
      locationDetail?:  {
        __typename: "LocationDetail",
        address: string,
        unit?: string | null,
        city: string,
        state: string,
        zipCode: string,
        country: string,
        name?: string | null,
      } | null,
      logoUri: string,
      onlineReserved: number,
      onlineTotal: number,
      organizations?:  {
        __typename: "ModelOrganizationConnection",
        nextToken?: string | null,
      } | null,
      orgs?:  Array< {
        __typename: "Org",
        displayName: string,
        relationshipType: OrganizationRelationshipType,
      } | null > | null,
      registrationUrl: string,
      reward: number,
      rewardDetails: string,
      seatsReserved: number,
      seatsTotal: number,
      startDateTime: number,
      status: string,
      subtitle: string,
      tags: Array< string | null >,
      title: string,
      timezone: string,
      websitePrompt: string,
      websiteUrl: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
    total?: number | null,
    aggregateItems:  Array< {
      __typename: "SearchableAggregateResult",
      name: string,
      result: ( {
          __typename: "SearchableAggregateScalarResult",
          value: number,
        } | {
          __typename: "SearchableAggregateBucketResult",
          buckets?:  Array< {
            __typename: string,
            key: string,
            doc_count: number,
          } | null > | null,
        }
      ) | null,
    } | null >,
  } | null,
};

export type SearchRewardsQueryVariables = {
  filter?: SearchableRewardFilterInput | null,
  sort?: Array< SearchableRewardSortInput | null > | null,
  limit?: number | null,
  nextToken?: string | null,
  from?: number | null,
  aggregates?: Array< SearchableRewardAggregationInput | null > | null,
};

export type SearchRewardsQuery = {
  searchRewards?:  {
    __typename: "SearchableRewardConnection",
    items:  Array< {
      __typename: "Reward",
      id: string,
      creatorId: string,
      creator:  {
        __typename: "Athlete",
        firstName: string,
        lastName: string,
        mobilePhone: string,
        athleteTag?: string | null,
        bio?: string | null,
        profilePhotoUri?: string | null,
        heroPhotoUri?: string | null,
        email: string,
        level?: AthleteLevel | null,
        dateOfBirth?: string | null,
        plaidToken?: string | null,
        wyreId?: string | null,
        isActive: boolean,
        handle?: string | null,
        wealthBalance: number,
        id: string,
        createdAt: string,
        updatedAt: string,
      },
      title: string,
      wealthAmount: number,
      logoUri?: string | null,
      description?: string | null,
      heroPhotoUri?: string | null,
      redeemed: boolean,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
    total?: number | null,
    aggregateItems:  Array< {
      __typename: "SearchableAggregateResult",
      name: string,
      result: ( {
          __typename: "SearchableAggregateScalarResult",
          value: number,
        } | {
          __typename: "SearchableAggregateBucketResult",
          buckets?:  Array< {
            __typename: string,
            key: string,
            doc_count: number,
          } | null > | null,
        }
      ) | null,
    } | null >,
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
    bio?: string | null,
    profilePhotoUri?: string | null,
    heroPhotoUri?: string | null,
    email: string,
    level?: AthleteLevel | null,
    sport?:  {
      __typename: "AthleteSport",
      name: string,
      airTableId: string,
      isActive?: boolean | null,
    } | null,
    team?:  {
      __typename: "AthleteTeam",
      name: string,
      airTableId: string,
      isActive?: boolean | null,
    } | null,
    address?:  {
      __typename: "Address",
      streetAddress: string,
      apt?: string | null,
      city: string,
      state: string,
      zipCode: string,
    } | null,
    dateOfBirth?: string | null,
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
      } | null >,
      nextToken?: string | null,
    } | null,
    unitLookup?:  {
      __typename: "AthleteUnitLookup",
      appId: string,
      custId?: string | null,
    } | null,
    podSettings?:  {
      __typename: "PodSettings",
      SAVINGS: number,
      INVESTMENTS: number,
      SPENDING: number,
    } | null,
    plaidToken?: string | null,
    plaidProcessorToken?:  {
      __typename: "ProcessorToken",
      plaidAccountId: string,
      processorToken?: string | null,
    } | null,
    wyreId?: string | null,
    isActive: boolean,
    handle?: string | null,
    wealthBalance: number,
    socialHandles?:  {
      __typename: "ModelSocialHandleConnection",
      items:  Array< {
        __typename: "SocialHandle",
        platform: SocialPlatform,
        handle: string,
        id: string,
        createdAt: string,
        updatedAt: string,
        athleteSocialHandlesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
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
      bio?: string | null,
      profilePhotoUri?: string | null,
      heroPhotoUri?: string | null,
      email: string,
      level?: AthleteLevel | null,
      sport?:  {
        __typename: "AthleteSport",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      } | null,
      team?:  {
        __typename: "AthleteTeam",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      } | null,
      address?:  {
        __typename: "Address",
        streetAddress: string,
        apt?: string | null,
        city: string,
        state: string,
        zipCode: string,
      } | null,
      dateOfBirth?: string | null,
      accounts?:  {
        __typename: "ModelAthleteAccountConnection",
        nextToken?: string | null,
      } | null,
      unitLookup?:  {
        __typename: "AthleteUnitLookup",
        appId: string,
        custId?: string | null,
      } | null,
      podSettings?:  {
        __typename: "PodSettings",
        SAVINGS: number,
        INVESTMENTS: number,
        SPENDING: number,
      } | null,
      plaidToken?: string | null,
      plaidProcessorToken?:  {
        __typename: "ProcessorToken",
        plaidAccountId: string,
        processorToken?: string | null,
      } | null,
      wyreId?: string | null,
      isActive: boolean,
      handle?: string | null,
      wealthBalance: number,
      socialHandles?:  {
        __typename: "ModelSocialHandleConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      createdAt: string,
      updatedAt: string,
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
      bio?: string | null,
      profilePhotoUri?: string | null,
      heroPhotoUri?: string | null,
      email: string,
      level?: AthleteLevel | null,
      sport?:  {
        __typename: "AthleteSport",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      } | null,
      team?:  {
        __typename: "AthleteTeam",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      } | null,
      address?:  {
        __typename: "Address",
        streetAddress: string,
        apt?: string | null,
        city: string,
        state: string,
        zipCode: string,
      } | null,
      dateOfBirth?: string | null,
      accounts?:  {
        __typename: "ModelAthleteAccountConnection",
        nextToken?: string | null,
      } | null,
      unitLookup?:  {
        __typename: "AthleteUnitLookup",
        appId: string,
        custId?: string | null,
      } | null,
      podSettings?:  {
        __typename: "PodSettings",
        SAVINGS: number,
        INVESTMENTS: number,
        SPENDING: number,
      } | null,
      plaidToken?: string | null,
      plaidProcessorToken?:  {
        __typename: "ProcessorToken",
        plaidAccountId: string,
        processorToken?: string | null,
      } | null,
      wyreId?: string | null,
      isActive: boolean,
      handle?: string | null,
      wealthBalance: number,
      socialHandles?:  {
        __typename: "ModelSocialHandleConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    },
    unitAccountId: string,
    routingCode: string,
    accountNumber: string,
    podName: string,
    id: string,
    createdAt: string,
    updatedAt: string,
    athleteAccountsId?: string | null,
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
        bio?: string | null,
        profilePhotoUri?: string | null,
        heroPhotoUri?: string | null,
        email: string,
        level?: AthleteLevel | null,
        dateOfBirth?: string | null,
        plaidToken?: string | null,
        wyreId?: string | null,
        isActive: boolean,
        handle?: string | null,
        wealthBalance: number,
        id: string,
        createdAt: string,
        updatedAt: string,
      },
      unitAccountId: string,
      routingCode: string,
      accountNumber: string,
      podName: string,
      id: string,
      createdAt: string,
      updatedAt: string,
      athleteAccountsId?: string | null,
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
    athleteId?: string | null,
    status?: string | null,
    amount?: number | null,
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
      athleteId?: string | null,
      status?: string | null,
      amount?: number | null,
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

export type GetSocialHandleQueryVariables = {
  id: string,
};

export type GetSocialHandleQuery = {
  getSocialHandle?:  {
    __typename: "SocialHandle",
    platform: SocialPlatform,
    handle: string,
    id: string,
    createdAt: string,
    updatedAt: string,
    athleteSocialHandlesId?: string | null,
  } | null,
};

export type ListSocialHandlesQueryVariables = {
  filter?: ModelSocialHandleFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSocialHandlesQuery = {
  listSocialHandles?:  {
    __typename: "ModelSocialHandleConnection",
    items:  Array< {
      __typename: "SocialHandle",
      platform: SocialPlatform,
      handle: string,
      id: string,
      createdAt: string,
      updatedAt: string,
      athleteSocialHandlesId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
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

export type GetEventQueryVariables = {
  id: string,
};

export type GetEventQuery = {
  getEvent?:  {
    __typename: "Event",
    creatorId: string,
    creator:  {
      __typename: "Athlete",
      firstName: string,
      lastName: string,
      mobilePhone: string,
      athleteTag?: string | null,
      bio?: string | null,
      profilePhotoUri?: string | null,
      heroPhotoUri?: string | null,
      email: string,
      level?: AthleteLevel | null,
      sport?:  {
        __typename: "AthleteSport",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      } | null,
      team?:  {
        __typename: "AthleteTeam",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      } | null,
      address?:  {
        __typename: "Address",
        streetAddress: string,
        apt?: string | null,
        city: string,
        state: string,
        zipCode: string,
      } | null,
      dateOfBirth?: string | null,
      accounts?:  {
        __typename: "ModelAthleteAccountConnection",
        nextToken?: string | null,
      } | null,
      unitLookup?:  {
        __typename: "AthleteUnitLookup",
        appId: string,
        custId?: string | null,
      } | null,
      podSettings?:  {
        __typename: "PodSettings",
        SAVINGS: number,
        INVESTMENTS: number,
        SPENDING: number,
      } | null,
      plaidToken?: string | null,
      plaidProcessorToken?:  {
        __typename: "ProcessorToken",
        plaidAccountId: string,
        processorToken?: string | null,
      } | null,
      wyreId?: string | null,
      isActive: boolean,
      handle?: string | null,
      wealthBalance: number,
      socialHandles?:  {
        __typename: "ModelSocialHandleConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    },
    sponsor: string,
    title: string,
    category: string,
    heroPhotoUri: string,
    logoUri: string,
    tagline: string,
    description: string,
    dateTime: number,
    location: string,
    reward: number,
    registered: boolean,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListEventsQueryVariables = {
  filter?: ModelEventFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListEventsQuery = {
  listEvents?:  {
    __typename: "ModelEventConnection",
    items:  Array< {
      __typename: "Event",
      creatorId: string,
      creator:  {
        __typename: "Athlete",
        firstName: string,
        lastName: string,
        mobilePhone: string,
        athleteTag?: string | null,
        bio?: string | null,
        profilePhotoUri?: string | null,
        heroPhotoUri?: string | null,
        email: string,
        level?: AthleteLevel | null,
        dateOfBirth?: string | null,
        plaidToken?: string | null,
        wyreId?: string | null,
        isActive: boolean,
        handle?: string | null,
        wealthBalance: number,
        id: string,
        createdAt: string,
        updatedAt: string,
      },
      sponsor: string,
      title: string,
      category: string,
      heroPhotoUri: string,
      logoUri: string,
      tagline: string,
      description: string,
      dateTime: number,
      location: string,
      reward: number,
      registered: boolean,
      id: string,
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

export type GetLearnQueryVariables = {
  id: string,
};

export type GetLearnQuery = {
  getLearn?:  {
    __typename: "Learn",
    creatorId: string,
    creator:  {
      __typename: "Athlete",
      firstName: string,
      lastName: string,
      mobilePhone: string,
      athleteTag?: string | null,
      bio?: string | null,
      profilePhotoUri?: string | null,
      heroPhotoUri?: string | null,
      email: string,
      level?: AthleteLevel | null,
      sport?:  {
        __typename: "AthleteSport",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      } | null,
      team?:  {
        __typename: "AthleteTeam",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      } | null,
      address?:  {
        __typename: "Address",
        streetAddress: string,
        apt?: string | null,
        city: string,
        state: string,
        zipCode: string,
      } | null,
      dateOfBirth?: string | null,
      accounts?:  {
        __typename: "ModelAthleteAccountConnection",
        nextToken?: string | null,
      } | null,
      unitLookup?:  {
        __typename: "AthleteUnitLookup",
        appId: string,
        custId?: string | null,
      } | null,
      podSettings?:  {
        __typename: "PodSettings",
        SAVINGS: number,
        INVESTMENTS: number,
        SPENDING: number,
      } | null,
      plaidToken?: string | null,
      plaidProcessorToken?:  {
        __typename: "ProcessorToken",
        plaidAccountId: string,
        processorToken?: string | null,
      } | null,
      wyreId?: string | null,
      isActive: boolean,
      handle?: string | null,
      wealthBalance: number,
      socialHandles?:  {
        __typename: "ModelSocialHandleConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    },
    bgImageUri?: string | null,
    sponsor: string,
    title: string,
    level: LearnLevel,
    reward: number,
    deposits:  Array< {
      __typename: "Deposit",
      videoUri?: string | null,
      title: string,
      questions:  Array< {
        __typename: "Quiz",
        questionText: string,
        answers: Array< string >,
        correctAnswer: string,
      } >,
    } >,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListLearnsQueryVariables = {
  filter?: ModelLearnFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListLearnsQuery = {
  listLearns?:  {
    __typename: "ModelLearnConnection",
    items:  Array< {
      __typename: "Learn",
      creatorId: string,
      creator:  {
        __typename: "Athlete",
        firstName: string,
        lastName: string,
        mobilePhone: string,
        athleteTag?: string | null,
        bio?: string | null,
        profilePhotoUri?: string | null,
        heroPhotoUri?: string | null,
        email: string,
        level?: AthleteLevel | null,
        dateOfBirth?: string | null,
        plaidToken?: string | null,
        wyreId?: string | null,
        isActive: boolean,
        handle?: string | null,
        wealthBalance: number,
        id: string,
        createdAt: string,
        updatedAt: string,
      },
      bgImageUri?: string | null,
      sponsor: string,
      title: string,
      level: LearnLevel,
      reward: number,
      deposits:  Array< {
        __typename: "Deposit",
        videoUri?: string | null,
        title: string,
      } >,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetLearnStatusQueryVariables = {
  id: string,
};

export type GetLearnStatusQuery = {
  getLearnStatus?:  {
    __typename: "LearnStatus",
    athleteId: string,
    learnItemId: string,
    passedDepositIndex: number,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListLearnStatusesQueryVariables = {
  filter?: ModelLearnStatusFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListLearnStatusesQuery = {
  listLearnStatuses?:  {
    __typename: "ModelLearnStatusConnection",
    items:  Array< {
      __typename: "LearnStatus",
      athleteId: string,
      learnItemId: string,
      passedDepositIndex: number,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetOpportunityQueryVariables = {
  id: string,
};

export type GetOpportunityQuery = {
  getOpportunity?:  {
    __typename: "Opportunity",
    id: string,
    categories: Array< string | null >,
    creatorId: string,
    creator:  {
      __typename: "Athlete",
      firstName: string,
      lastName: string,
      mobilePhone: string,
      athleteTag?: string | null,
      bio?: string | null,
      profilePhotoUri?: string | null,
      heroPhotoUri?: string | null,
      email: string,
      level?: AthleteLevel | null,
      sport?:  {
        __typename: "AthleteSport",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      } | null,
      team?:  {
        __typename: "AthleteTeam",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      } | null,
      address?:  {
        __typename: "Address",
        streetAddress: string,
        apt?: string | null,
        city: string,
        state: string,
        zipCode: string,
      } | null,
      dateOfBirth?: string | null,
      accounts?:  {
        __typename: "ModelAthleteAccountConnection",
        nextToken?: string | null,
      } | null,
      unitLookup?:  {
        __typename: "AthleteUnitLookup",
        appId: string,
        custId?: string | null,
      } | null,
      podSettings?:  {
        __typename: "PodSettings",
        SAVINGS: number,
        INVESTMENTS: number,
        SPENDING: number,
      } | null,
      plaidToken?: string | null,
      plaidProcessorToken?:  {
        __typename: "ProcessorToken",
        plaidAccountId: string,
        processorToken?: string | null,
      } | null,
      wyreId?: string | null,
      isActive: boolean,
      handle?: string | null,
      wealthBalance: number,
      socialHandles?:  {
        __typename: "ModelSocialHandleConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    },
    details: string,
    detailsTldr: string,
    endDateTime: number,
    eventType: string,
    heroPhotoUri: string,
    isPrivate: boolean,
    location?:  {
      __typename: "Location",
      lat: number,
      lon: number,
    } | null,
    locationDetail?:  {
      __typename: "LocationDetail",
      address: string,
      unit?: string | null,
      city: string,
      state: string,
      zipCode: string,
      country: string,
      name?: string | null,
    } | null,
    logoUri: string,
    onlineReserved: number,
    onlineTotal: number,
    organizations?:  {
      __typename: "ModelOrganizationConnection",
      items:  Array< {
        __typename: "Organization",
        id: string,
        displayName: string,
        relationshipType: OrganizationRelationshipType,
        opportunityId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    orgs?:  Array< {
      __typename: "Org",
      displayName: string,
      relationshipType: OrganizationRelationshipType,
    } | null > | null,
    registrationUrl: string,
    reward: number,
    rewardDetails: string,
    seatsReserved: number,
    seatsTotal: number,
    startDateTime: number,
    status: string,
    subtitle: string,
    tags: Array< string | null >,
    title: string,
    timezone: string,
    websitePrompt: string,
    websiteUrl: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListOpportunitiesQueryVariables = {
  filter?: ModelOpportunityFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListOpportunitiesQuery = {
  listOpportunities?:  {
    __typename: "ModelOpportunityConnection",
    items?:  Array< {
      __typename: "Opportunity",
      id: string,
      categories: Array< string | null >,
      creatorId: string,
      creator:  {
        __typename: "Athlete",
        firstName: string,
        lastName: string,
        mobilePhone: string,
        athleteTag?: string | null,
        bio?: string | null,
        profilePhotoUri?: string | null,
        heroPhotoUri?: string | null,
        email: string,
        level?: AthleteLevel | null,
        dateOfBirth?: string | null,
        plaidToken?: string | null,
        wyreId?: string | null,
        isActive: boolean,
        handle?: string | null,
        wealthBalance: number,
        id: string,
        createdAt: string,
        updatedAt: string,
      },
      details: string,
      detailsTldr: string,
      endDateTime: number,
      eventType: string,
      heroPhotoUri: string,
      isPrivate: boolean,
      location?:  {
        __typename: "Location",
        lat: number,
        lon: number,
      } | null,
      locationDetail?:  {
        __typename: "LocationDetail",
        address: string,
        unit?: string | null,
        city: string,
        state: string,
        zipCode: string,
        country: string,
        name?: string | null,
      } | null,
      logoUri: string,
      onlineReserved: number,
      onlineTotal: number,
      organizations?:  {
        __typename: "ModelOrganizationConnection",
        nextToken?: string | null,
      } | null,
      orgs?:  Array< {
        __typename: "Org",
        displayName: string,
        relationshipType: OrganizationRelationshipType,
      } | null > | null,
      registrationUrl: string,
      reward: number,
      rewardDetails: string,
      seatsReserved: number,
      seatsTotal: number,
      startDateTime: number,
      status: string,
      subtitle: string,
      tags: Array< string | null >,
      title: string,
      timezone: string,
      websitePrompt: string,
      websiteUrl: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    total?: number | null,
    nextToken?: string | null,
  } | null,
};

export type GetOrganizationQueryVariables = {
  id: string,
};

export type GetOrganizationQuery = {
  getOrganization?:  {
    __typename: "Organization",
    id: string,
    displayName: string,
    relationshipType: OrganizationRelationshipType,
    opportunityId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListOrganizationsQueryVariables = {
  filter?: ModelOrganizationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListOrganizationsQuery = {
  listOrganizations?:  {
    __typename: "ModelOrganizationConnection",
    items:  Array< {
      __typename: "Organization",
      id: string,
      displayName: string,
      relationshipType: OrganizationRelationshipType,
      opportunityId: string,
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

export type GetRewardQueryVariables = {
  id: string,
};

export type GetRewardQuery = {
  getReward?:  {
    __typename: "Reward",
    id: string,
    creatorId: string,
    creator:  {
      __typename: "Athlete",
      firstName: string,
      lastName: string,
      mobilePhone: string,
      athleteTag?: string | null,
      bio?: string | null,
      profilePhotoUri?: string | null,
      heroPhotoUri?: string | null,
      email: string,
      level?: AthleteLevel | null,
      sport?:  {
        __typename: "AthleteSport",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      } | null,
      team?:  {
        __typename: "AthleteTeam",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      } | null,
      address?:  {
        __typename: "Address",
        streetAddress: string,
        apt?: string | null,
        city: string,
        state: string,
        zipCode: string,
      } | null,
      dateOfBirth?: string | null,
      accounts?:  {
        __typename: "ModelAthleteAccountConnection",
        nextToken?: string | null,
      } | null,
      unitLookup?:  {
        __typename: "AthleteUnitLookup",
        appId: string,
        custId?: string | null,
      } | null,
      podSettings?:  {
        __typename: "PodSettings",
        SAVINGS: number,
        INVESTMENTS: number,
        SPENDING: number,
      } | null,
      plaidToken?: string | null,
      plaidProcessorToken?:  {
        __typename: "ProcessorToken",
        plaidAccountId: string,
        processorToken?: string | null,
      } | null,
      wyreId?: string | null,
      isActive: boolean,
      handle?: string | null,
      wealthBalance: number,
      socialHandles?:  {
        __typename: "ModelSocialHandleConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    },
    title: string,
    wealthAmount: number,
    logoUri?: string | null,
    description?: string | null,
    heroPhotoUri?: string | null,
    redeemed: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListRewardsQueryVariables = {
  filter?: ModelRewardFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListRewardsQuery = {
  listRewards?:  {
    __typename: "ModelRewardConnection",
    items:  Array< {
      __typename: "Reward",
      id: string,
      creatorId: string,
      creator:  {
        __typename: "Athlete",
        firstName: string,
        lastName: string,
        mobilePhone: string,
        athleteTag?: string | null,
        bio?: string | null,
        profilePhotoUri?: string | null,
        heroPhotoUri?: string | null,
        email: string,
        level?: AthleteLevel | null,
        dateOfBirth?: string | null,
        plaidToken?: string | null,
        wyreId?: string | null,
        isActive: boolean,
        handle?: string | null,
        wealthBalance: number,
        id: string,
        createdAt: string,
        updatedAt: string,
      },
      title: string,
      wealthAmount: number,
      logoUri?: string | null,
      description?: string | null,
      heroPhotoUri?: string | null,
      redeemed: boolean,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateAthleteSubscription = {
  onCreateAthlete?:  {
    __typename: "Athlete",
    firstName: string,
    lastName: string,
    mobilePhone: string,
    athleteTag?: string | null,
    bio?: string | null,
    profilePhotoUri?: string | null,
    heroPhotoUri?: string | null,
    email: string,
    level?: AthleteLevel | null,
    sport?:  {
      __typename: "AthleteSport",
      name: string,
      airTableId: string,
      isActive?: boolean | null,
    } | null,
    team?:  {
      __typename: "AthleteTeam",
      name: string,
      airTableId: string,
      isActive?: boolean | null,
    } | null,
    address?:  {
      __typename: "Address",
      streetAddress: string,
      apt?: string | null,
      city: string,
      state: string,
      zipCode: string,
    } | null,
    dateOfBirth?: string | null,
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
      } | null >,
      nextToken?: string | null,
    } | null,
    unitLookup?:  {
      __typename: "AthleteUnitLookup",
      appId: string,
      custId?: string | null,
    } | null,
    podSettings?:  {
      __typename: "PodSettings",
      SAVINGS: number,
      INVESTMENTS: number,
      SPENDING: number,
    } | null,
    plaidToken?: string | null,
    plaidProcessorToken?:  {
      __typename: "ProcessorToken",
      plaidAccountId: string,
      processorToken?: string | null,
    } | null,
    wyreId?: string | null,
    isActive: boolean,
    handle?: string | null,
    wealthBalance: number,
    socialHandles?:  {
      __typename: "ModelSocialHandleConnection",
      items:  Array< {
        __typename: "SocialHandle",
        platform: SocialPlatform,
        handle: string,
        id: string,
        createdAt: string,
        updatedAt: string,
        athleteSocialHandlesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateAthleteSubscription = {
  onUpdateAthlete?:  {
    __typename: "Athlete",
    firstName: string,
    lastName: string,
    mobilePhone: string,
    athleteTag?: string | null,
    bio?: string | null,
    profilePhotoUri?: string | null,
    heroPhotoUri?: string | null,
    email: string,
    level?: AthleteLevel | null,
    sport?:  {
      __typename: "AthleteSport",
      name: string,
      airTableId: string,
      isActive?: boolean | null,
    } | null,
    team?:  {
      __typename: "AthleteTeam",
      name: string,
      airTableId: string,
      isActive?: boolean | null,
    } | null,
    address?:  {
      __typename: "Address",
      streetAddress: string,
      apt?: string | null,
      city: string,
      state: string,
      zipCode: string,
    } | null,
    dateOfBirth?: string | null,
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
      } | null >,
      nextToken?: string | null,
    } | null,
    unitLookup?:  {
      __typename: "AthleteUnitLookup",
      appId: string,
      custId?: string | null,
    } | null,
    podSettings?:  {
      __typename: "PodSettings",
      SAVINGS: number,
      INVESTMENTS: number,
      SPENDING: number,
    } | null,
    plaidToken?: string | null,
    plaidProcessorToken?:  {
      __typename: "ProcessorToken",
      plaidAccountId: string,
      processorToken?: string | null,
    } | null,
    wyreId?: string | null,
    isActive: boolean,
    handle?: string | null,
    wealthBalance: number,
    socialHandles?:  {
      __typename: "ModelSocialHandleConnection",
      items:  Array< {
        __typename: "SocialHandle",
        platform: SocialPlatform,
        handle: string,
        id: string,
        createdAt: string,
        updatedAt: string,
        athleteSocialHandlesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteAthleteSubscription = {
  onDeleteAthlete?:  {
    __typename: "Athlete",
    firstName: string,
    lastName: string,
    mobilePhone: string,
    athleteTag?: string | null,
    bio?: string | null,
    profilePhotoUri?: string | null,
    heroPhotoUri?: string | null,
    email: string,
    level?: AthleteLevel | null,
    sport?:  {
      __typename: "AthleteSport",
      name: string,
      airTableId: string,
      isActive?: boolean | null,
    } | null,
    team?:  {
      __typename: "AthleteTeam",
      name: string,
      airTableId: string,
      isActive?: boolean | null,
    } | null,
    address?:  {
      __typename: "Address",
      streetAddress: string,
      apt?: string | null,
      city: string,
      state: string,
      zipCode: string,
    } | null,
    dateOfBirth?: string | null,
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
      } | null >,
      nextToken?: string | null,
    } | null,
    unitLookup?:  {
      __typename: "AthleteUnitLookup",
      appId: string,
      custId?: string | null,
    } | null,
    podSettings?:  {
      __typename: "PodSettings",
      SAVINGS: number,
      INVESTMENTS: number,
      SPENDING: number,
    } | null,
    plaidToken?: string | null,
    plaidProcessorToken?:  {
      __typename: "ProcessorToken",
      plaidAccountId: string,
      processorToken?: string | null,
    } | null,
    wyreId?: string | null,
    isActive: boolean,
    handle?: string | null,
    wealthBalance: number,
    socialHandles?:  {
      __typename: "ModelSocialHandleConnection",
      items:  Array< {
        __typename: "SocialHandle",
        platform: SocialPlatform,
        handle: string,
        id: string,
        createdAt: string,
        updatedAt: string,
        athleteSocialHandlesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
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
      bio?: string | null,
      profilePhotoUri?: string | null,
      heroPhotoUri?: string | null,
      email: string,
      level?: AthleteLevel | null,
      sport?:  {
        __typename: "AthleteSport",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      } | null,
      team?:  {
        __typename: "AthleteTeam",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      } | null,
      address?:  {
        __typename: "Address",
        streetAddress: string,
        apt?: string | null,
        city: string,
        state: string,
        zipCode: string,
      } | null,
      dateOfBirth?: string | null,
      accounts?:  {
        __typename: "ModelAthleteAccountConnection",
        nextToken?: string | null,
      } | null,
      unitLookup?:  {
        __typename: "AthleteUnitLookup",
        appId: string,
        custId?: string | null,
      } | null,
      podSettings?:  {
        __typename: "PodSettings",
        SAVINGS: number,
        INVESTMENTS: number,
        SPENDING: number,
      } | null,
      plaidToken?: string | null,
      plaidProcessorToken?:  {
        __typename: "ProcessorToken",
        plaidAccountId: string,
        processorToken?: string | null,
      } | null,
      wyreId?: string | null,
      isActive: boolean,
      handle?: string | null,
      wealthBalance: number,
      socialHandles?:  {
        __typename: "ModelSocialHandleConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    },
    unitAccountId: string,
    routingCode: string,
    accountNumber: string,
    podName: string,
    id: string,
    createdAt: string,
    updatedAt: string,
    athleteAccountsId?: string | null,
  } | null,
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
      bio?: string | null,
      profilePhotoUri?: string | null,
      heroPhotoUri?: string | null,
      email: string,
      level?: AthleteLevel | null,
      sport?:  {
        __typename: "AthleteSport",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      } | null,
      team?:  {
        __typename: "AthleteTeam",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      } | null,
      address?:  {
        __typename: "Address",
        streetAddress: string,
        apt?: string | null,
        city: string,
        state: string,
        zipCode: string,
      } | null,
      dateOfBirth?: string | null,
      accounts?:  {
        __typename: "ModelAthleteAccountConnection",
        nextToken?: string | null,
      } | null,
      unitLookup?:  {
        __typename: "AthleteUnitLookup",
        appId: string,
        custId?: string | null,
      } | null,
      podSettings?:  {
        __typename: "PodSettings",
        SAVINGS: number,
        INVESTMENTS: number,
        SPENDING: number,
      } | null,
      plaidToken?: string | null,
      plaidProcessorToken?:  {
        __typename: "ProcessorToken",
        plaidAccountId: string,
        processorToken?: string | null,
      } | null,
      wyreId?: string | null,
      isActive: boolean,
      handle?: string | null,
      wealthBalance: number,
      socialHandles?:  {
        __typename: "ModelSocialHandleConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    },
    unitAccountId: string,
    routingCode: string,
    accountNumber: string,
    podName: string,
    id: string,
    createdAt: string,
    updatedAt: string,
    athleteAccountsId?: string | null,
  } | null,
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
      bio?: string | null,
      profilePhotoUri?: string | null,
      heroPhotoUri?: string | null,
      email: string,
      level?: AthleteLevel | null,
      sport?:  {
        __typename: "AthleteSport",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      } | null,
      team?:  {
        __typename: "AthleteTeam",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      } | null,
      address?:  {
        __typename: "Address",
        streetAddress: string,
        apt?: string | null,
        city: string,
        state: string,
        zipCode: string,
      } | null,
      dateOfBirth?: string | null,
      accounts?:  {
        __typename: "ModelAthleteAccountConnection",
        nextToken?: string | null,
      } | null,
      unitLookup?:  {
        __typename: "AthleteUnitLookup",
        appId: string,
        custId?: string | null,
      } | null,
      podSettings?:  {
        __typename: "PodSettings",
        SAVINGS: number,
        INVESTMENTS: number,
        SPENDING: number,
      } | null,
      plaidToken?: string | null,
      plaidProcessorToken?:  {
        __typename: "ProcessorToken",
        plaidAccountId: string,
        processorToken?: string | null,
      } | null,
      wyreId?: string | null,
      isActive: boolean,
      handle?: string | null,
      wealthBalance: number,
      socialHandles?:  {
        __typename: "ModelSocialHandleConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    },
    unitAccountId: string,
    routingCode: string,
    accountNumber: string,
    podName: string,
    id: string,
    createdAt: string,
    updatedAt: string,
    athleteAccountsId?: string | null,
  } | null,
};

export type OnCreateRecentTransactionSubscription = {
  onCreateRecentTransaction?:  {
    __typename: "RecentTransaction",
    transactionId: string,
    athleteId?: string | null,
    status?: string | null,
    amount?: number | null,
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
    athleteId?: string | null,
    status?: string | null,
    amount?: number | null,
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
    athleteId?: string | null,
    status?: string | null,
    amount?: number | null,
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

export type OnCreateSocialHandleSubscription = {
  onCreateSocialHandle?:  {
    __typename: "SocialHandle",
    platform: SocialPlatform,
    handle: string,
    id: string,
    createdAt: string,
    updatedAt: string,
    athleteSocialHandlesId?: string | null,
  } | null,
};

export type OnUpdateSocialHandleSubscription = {
  onUpdateSocialHandle?:  {
    __typename: "SocialHandle",
    platform: SocialPlatform,
    handle: string,
    id: string,
    createdAt: string,
    updatedAt: string,
    athleteSocialHandlesId?: string | null,
  } | null,
};

export type OnDeleteSocialHandleSubscription = {
  onDeleteSocialHandle?:  {
    __typename: "SocialHandle",
    platform: SocialPlatform,
    handle: string,
    id: string,
    createdAt: string,
    updatedAt: string,
    athleteSocialHandlesId?: string | null,
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

export type OnCreateEventSubscription = {
  onCreateEvent?:  {
    __typename: "Event",
    creatorId: string,
    creator:  {
      __typename: "Athlete",
      firstName: string,
      lastName: string,
      mobilePhone: string,
      athleteTag?: string | null,
      bio?: string | null,
      profilePhotoUri?: string | null,
      heroPhotoUri?: string | null,
      email: string,
      level?: AthleteLevel | null,
      sport?:  {
        __typename: "AthleteSport",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      } | null,
      team?:  {
        __typename: "AthleteTeam",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      } | null,
      address?:  {
        __typename: "Address",
        streetAddress: string,
        apt?: string | null,
        city: string,
        state: string,
        zipCode: string,
      } | null,
      dateOfBirth?: string | null,
      accounts?:  {
        __typename: "ModelAthleteAccountConnection",
        nextToken?: string | null,
      } | null,
      unitLookup?:  {
        __typename: "AthleteUnitLookup",
        appId: string,
        custId?: string | null,
      } | null,
      podSettings?:  {
        __typename: "PodSettings",
        SAVINGS: number,
        INVESTMENTS: number,
        SPENDING: number,
      } | null,
      plaidToken?: string | null,
      plaidProcessorToken?:  {
        __typename: "ProcessorToken",
        plaidAccountId: string,
        processorToken?: string | null,
      } | null,
      wyreId?: string | null,
      isActive: boolean,
      handle?: string | null,
      wealthBalance: number,
      socialHandles?:  {
        __typename: "ModelSocialHandleConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    },
    sponsor: string,
    title: string,
    category: string,
    heroPhotoUri: string,
    logoUri: string,
    tagline: string,
    description: string,
    dateTime: number,
    location: string,
    reward: number,
    registered: boolean,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateEventSubscription = {
  onUpdateEvent?:  {
    __typename: "Event",
    creatorId: string,
    creator:  {
      __typename: "Athlete",
      firstName: string,
      lastName: string,
      mobilePhone: string,
      athleteTag?: string | null,
      bio?: string | null,
      profilePhotoUri?: string | null,
      heroPhotoUri?: string | null,
      email: string,
      level?: AthleteLevel | null,
      sport?:  {
        __typename: "AthleteSport",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      } | null,
      team?:  {
        __typename: "AthleteTeam",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      } | null,
      address?:  {
        __typename: "Address",
        streetAddress: string,
        apt?: string | null,
        city: string,
        state: string,
        zipCode: string,
      } | null,
      dateOfBirth?: string | null,
      accounts?:  {
        __typename: "ModelAthleteAccountConnection",
        nextToken?: string | null,
      } | null,
      unitLookup?:  {
        __typename: "AthleteUnitLookup",
        appId: string,
        custId?: string | null,
      } | null,
      podSettings?:  {
        __typename: "PodSettings",
        SAVINGS: number,
        INVESTMENTS: number,
        SPENDING: number,
      } | null,
      plaidToken?: string | null,
      plaidProcessorToken?:  {
        __typename: "ProcessorToken",
        plaidAccountId: string,
        processorToken?: string | null,
      } | null,
      wyreId?: string | null,
      isActive: boolean,
      handle?: string | null,
      wealthBalance: number,
      socialHandles?:  {
        __typename: "ModelSocialHandleConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    },
    sponsor: string,
    title: string,
    category: string,
    heroPhotoUri: string,
    logoUri: string,
    tagline: string,
    description: string,
    dateTime: number,
    location: string,
    reward: number,
    registered: boolean,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteEventSubscription = {
  onDeleteEvent?:  {
    __typename: "Event",
    creatorId: string,
    creator:  {
      __typename: "Athlete",
      firstName: string,
      lastName: string,
      mobilePhone: string,
      athleteTag?: string | null,
      bio?: string | null,
      profilePhotoUri?: string | null,
      heroPhotoUri?: string | null,
      email: string,
      level?: AthleteLevel | null,
      sport?:  {
        __typename: "AthleteSport",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      } | null,
      team?:  {
        __typename: "AthleteTeam",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      } | null,
      address?:  {
        __typename: "Address",
        streetAddress: string,
        apt?: string | null,
        city: string,
        state: string,
        zipCode: string,
      } | null,
      dateOfBirth?: string | null,
      accounts?:  {
        __typename: "ModelAthleteAccountConnection",
        nextToken?: string | null,
      } | null,
      unitLookup?:  {
        __typename: "AthleteUnitLookup",
        appId: string,
        custId?: string | null,
      } | null,
      podSettings?:  {
        __typename: "PodSettings",
        SAVINGS: number,
        INVESTMENTS: number,
        SPENDING: number,
      } | null,
      plaidToken?: string | null,
      plaidProcessorToken?:  {
        __typename: "ProcessorToken",
        plaidAccountId: string,
        processorToken?: string | null,
      } | null,
      wyreId?: string | null,
      isActive: boolean,
      handle?: string | null,
      wealthBalance: number,
      socialHandles?:  {
        __typename: "ModelSocialHandleConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    },
    sponsor: string,
    title: string,
    category: string,
    heroPhotoUri: string,
    logoUri: string,
    tagline: string,
    description: string,
    dateTime: number,
    location: string,
    reward: number,
    registered: boolean,
    id: string,
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

export type OnCreateLearnSubscription = {
  onCreateLearn?:  {
    __typename: "Learn",
    creatorId: string,
    creator:  {
      __typename: "Athlete",
      firstName: string,
      lastName: string,
      mobilePhone: string,
      athleteTag?: string | null,
      bio?: string | null,
      profilePhotoUri?: string | null,
      heroPhotoUri?: string | null,
      email: string,
      level?: AthleteLevel | null,
      sport?:  {
        __typename: "AthleteSport",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      } | null,
      team?:  {
        __typename: "AthleteTeam",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      } | null,
      address?:  {
        __typename: "Address",
        streetAddress: string,
        apt?: string | null,
        city: string,
        state: string,
        zipCode: string,
      } | null,
      dateOfBirth?: string | null,
      accounts?:  {
        __typename: "ModelAthleteAccountConnection",
        nextToken?: string | null,
      } | null,
      unitLookup?:  {
        __typename: "AthleteUnitLookup",
        appId: string,
        custId?: string | null,
      } | null,
      podSettings?:  {
        __typename: "PodSettings",
        SAVINGS: number,
        INVESTMENTS: number,
        SPENDING: number,
      } | null,
      plaidToken?: string | null,
      plaidProcessorToken?:  {
        __typename: "ProcessorToken",
        plaidAccountId: string,
        processorToken?: string | null,
      } | null,
      wyreId?: string | null,
      isActive: boolean,
      handle?: string | null,
      wealthBalance: number,
      socialHandles?:  {
        __typename: "ModelSocialHandleConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    },
    bgImageUri?: string | null,
    sponsor: string,
    title: string,
    level: LearnLevel,
    reward: number,
    deposits:  Array< {
      __typename: "Deposit",
      videoUri?: string | null,
      title: string,
      questions:  Array< {
        __typename: "Quiz",
        questionText: string,
        answers: Array< string >,
        correctAnswer: string,
      } >,
    } >,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateLearnSubscription = {
  onUpdateLearn?:  {
    __typename: "Learn",
    creatorId: string,
    creator:  {
      __typename: "Athlete",
      firstName: string,
      lastName: string,
      mobilePhone: string,
      athleteTag?: string | null,
      bio?: string | null,
      profilePhotoUri?: string | null,
      heroPhotoUri?: string | null,
      email: string,
      level?: AthleteLevel | null,
      sport?:  {
        __typename: "AthleteSport",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      } | null,
      team?:  {
        __typename: "AthleteTeam",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      } | null,
      address?:  {
        __typename: "Address",
        streetAddress: string,
        apt?: string | null,
        city: string,
        state: string,
        zipCode: string,
      } | null,
      dateOfBirth?: string | null,
      accounts?:  {
        __typename: "ModelAthleteAccountConnection",
        nextToken?: string | null,
      } | null,
      unitLookup?:  {
        __typename: "AthleteUnitLookup",
        appId: string,
        custId?: string | null,
      } | null,
      podSettings?:  {
        __typename: "PodSettings",
        SAVINGS: number,
        INVESTMENTS: number,
        SPENDING: number,
      } | null,
      plaidToken?: string | null,
      plaidProcessorToken?:  {
        __typename: "ProcessorToken",
        plaidAccountId: string,
        processorToken?: string | null,
      } | null,
      wyreId?: string | null,
      isActive: boolean,
      handle?: string | null,
      wealthBalance: number,
      socialHandles?:  {
        __typename: "ModelSocialHandleConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    },
    bgImageUri?: string | null,
    sponsor: string,
    title: string,
    level: LearnLevel,
    reward: number,
    deposits:  Array< {
      __typename: "Deposit",
      videoUri?: string | null,
      title: string,
      questions:  Array< {
        __typename: "Quiz",
        questionText: string,
        answers: Array< string >,
        correctAnswer: string,
      } >,
    } >,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteLearnSubscription = {
  onDeleteLearn?:  {
    __typename: "Learn",
    creatorId: string,
    creator:  {
      __typename: "Athlete",
      firstName: string,
      lastName: string,
      mobilePhone: string,
      athleteTag?: string | null,
      bio?: string | null,
      profilePhotoUri?: string | null,
      heroPhotoUri?: string | null,
      email: string,
      level?: AthleteLevel | null,
      sport?:  {
        __typename: "AthleteSport",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      } | null,
      team?:  {
        __typename: "AthleteTeam",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      } | null,
      address?:  {
        __typename: "Address",
        streetAddress: string,
        apt?: string | null,
        city: string,
        state: string,
        zipCode: string,
      } | null,
      dateOfBirth?: string | null,
      accounts?:  {
        __typename: "ModelAthleteAccountConnection",
        nextToken?: string | null,
      } | null,
      unitLookup?:  {
        __typename: "AthleteUnitLookup",
        appId: string,
        custId?: string | null,
      } | null,
      podSettings?:  {
        __typename: "PodSettings",
        SAVINGS: number,
        INVESTMENTS: number,
        SPENDING: number,
      } | null,
      plaidToken?: string | null,
      plaidProcessorToken?:  {
        __typename: "ProcessorToken",
        plaidAccountId: string,
        processorToken?: string | null,
      } | null,
      wyreId?: string | null,
      isActive: boolean,
      handle?: string | null,
      wealthBalance: number,
      socialHandles?:  {
        __typename: "ModelSocialHandleConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    },
    bgImageUri?: string | null,
    sponsor: string,
    title: string,
    level: LearnLevel,
    reward: number,
    deposits:  Array< {
      __typename: "Deposit",
      videoUri?: string | null,
      title: string,
      questions:  Array< {
        __typename: "Quiz",
        questionText: string,
        answers: Array< string >,
        correctAnswer: string,
      } >,
    } >,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateLearnStatusSubscription = {
  onCreateLearnStatus?:  {
    __typename: "LearnStatus",
    athleteId: string,
    learnItemId: string,
    passedDepositIndex: number,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateLearnStatusSubscription = {
  onUpdateLearnStatus?:  {
    __typename: "LearnStatus",
    athleteId: string,
    learnItemId: string,
    passedDepositIndex: number,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteLearnStatusSubscription = {
  onDeleteLearnStatus?:  {
    __typename: "LearnStatus",
    athleteId: string,
    learnItemId: string,
    passedDepositIndex: number,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateOpportunitySubscription = {
  onCreateOpportunity?:  {
    __typename: "Opportunity",
    id: string,
    categories: Array< string | null >,
    creatorId: string,
    creator:  {
      __typename: "Athlete",
      firstName: string,
      lastName: string,
      mobilePhone: string,
      athleteTag?: string | null,
      bio?: string | null,
      profilePhotoUri?: string | null,
      heroPhotoUri?: string | null,
      email: string,
      level?: AthleteLevel | null,
      sport?:  {
        __typename: "AthleteSport",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      } | null,
      team?:  {
        __typename: "AthleteTeam",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      } | null,
      address?:  {
        __typename: "Address",
        streetAddress: string,
        apt?: string | null,
        city: string,
        state: string,
        zipCode: string,
      } | null,
      dateOfBirth?: string | null,
      accounts?:  {
        __typename: "ModelAthleteAccountConnection",
        nextToken?: string | null,
      } | null,
      unitLookup?:  {
        __typename: "AthleteUnitLookup",
        appId: string,
        custId?: string | null,
      } | null,
      podSettings?:  {
        __typename: "PodSettings",
        SAVINGS: number,
        INVESTMENTS: number,
        SPENDING: number,
      } | null,
      plaidToken?: string | null,
      plaidProcessorToken?:  {
        __typename: "ProcessorToken",
        plaidAccountId: string,
        processorToken?: string | null,
      } | null,
      wyreId?: string | null,
      isActive: boolean,
      handle?: string | null,
      wealthBalance: number,
      socialHandles?:  {
        __typename: "ModelSocialHandleConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    },
    details: string,
    detailsTldr: string,
    endDateTime: number,
    eventType: string,
    heroPhotoUri: string,
    isPrivate: boolean,
    location?:  {
      __typename: "Location",
      lat: number,
      lon: number,
    } | null,
    locationDetail?:  {
      __typename: "LocationDetail",
      address: string,
      unit?: string | null,
      city: string,
      state: string,
      zipCode: string,
      country: string,
      name?: string | null,
    } | null,
    logoUri: string,
    onlineReserved: number,
    onlineTotal: number,
    organizations?:  {
      __typename: "ModelOrganizationConnection",
      items:  Array< {
        __typename: "Organization",
        id: string,
        displayName: string,
        relationshipType: OrganizationRelationshipType,
        opportunityId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    orgs?:  Array< {
      __typename: "Org",
      displayName: string,
      relationshipType: OrganizationRelationshipType,
    } | null > | null,
    registrationUrl: string,
    reward: number,
    rewardDetails: string,
    seatsReserved: number,
    seatsTotal: number,
    startDateTime: number,
    status: string,
    subtitle: string,
    tags: Array< string | null >,
    title: string,
    timezone: string,
    websitePrompt: string,
    websiteUrl: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateOpportunitySubscription = {
  onUpdateOpportunity?:  {
    __typename: "Opportunity",
    id: string,
    categories: Array< string | null >,
    creatorId: string,
    creator:  {
      __typename: "Athlete",
      firstName: string,
      lastName: string,
      mobilePhone: string,
      athleteTag?: string | null,
      bio?: string | null,
      profilePhotoUri?: string | null,
      heroPhotoUri?: string | null,
      email: string,
      level?: AthleteLevel | null,
      sport?:  {
        __typename: "AthleteSport",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      } | null,
      team?:  {
        __typename: "AthleteTeam",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      } | null,
      address?:  {
        __typename: "Address",
        streetAddress: string,
        apt?: string | null,
        city: string,
        state: string,
        zipCode: string,
      } | null,
      dateOfBirth?: string | null,
      accounts?:  {
        __typename: "ModelAthleteAccountConnection",
        nextToken?: string | null,
      } | null,
      unitLookup?:  {
        __typename: "AthleteUnitLookup",
        appId: string,
        custId?: string | null,
      } | null,
      podSettings?:  {
        __typename: "PodSettings",
        SAVINGS: number,
        INVESTMENTS: number,
        SPENDING: number,
      } | null,
      plaidToken?: string | null,
      plaidProcessorToken?:  {
        __typename: "ProcessorToken",
        plaidAccountId: string,
        processorToken?: string | null,
      } | null,
      wyreId?: string | null,
      isActive: boolean,
      handle?: string | null,
      wealthBalance: number,
      socialHandles?:  {
        __typename: "ModelSocialHandleConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    },
    details: string,
    detailsTldr: string,
    endDateTime: number,
    eventType: string,
    heroPhotoUri: string,
    isPrivate: boolean,
    location?:  {
      __typename: "Location",
      lat: number,
      lon: number,
    } | null,
    locationDetail?:  {
      __typename: "LocationDetail",
      address: string,
      unit?: string | null,
      city: string,
      state: string,
      zipCode: string,
      country: string,
      name?: string | null,
    } | null,
    logoUri: string,
    onlineReserved: number,
    onlineTotal: number,
    organizations?:  {
      __typename: "ModelOrganizationConnection",
      items:  Array< {
        __typename: "Organization",
        id: string,
        displayName: string,
        relationshipType: OrganizationRelationshipType,
        opportunityId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    orgs?:  Array< {
      __typename: "Org",
      displayName: string,
      relationshipType: OrganizationRelationshipType,
    } | null > | null,
    registrationUrl: string,
    reward: number,
    rewardDetails: string,
    seatsReserved: number,
    seatsTotal: number,
    startDateTime: number,
    status: string,
    subtitle: string,
    tags: Array< string | null >,
    title: string,
    timezone: string,
    websitePrompt: string,
    websiteUrl: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteOpportunitySubscription = {
  onDeleteOpportunity?:  {
    __typename: "Opportunity",
    id: string,
    categories: Array< string | null >,
    creatorId: string,
    creator:  {
      __typename: "Athlete",
      firstName: string,
      lastName: string,
      mobilePhone: string,
      athleteTag?: string | null,
      bio?: string | null,
      profilePhotoUri?: string | null,
      heroPhotoUri?: string | null,
      email: string,
      level?: AthleteLevel | null,
      sport?:  {
        __typename: "AthleteSport",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      } | null,
      team?:  {
        __typename: "AthleteTeam",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      } | null,
      address?:  {
        __typename: "Address",
        streetAddress: string,
        apt?: string | null,
        city: string,
        state: string,
        zipCode: string,
      } | null,
      dateOfBirth?: string | null,
      accounts?:  {
        __typename: "ModelAthleteAccountConnection",
        nextToken?: string | null,
      } | null,
      unitLookup?:  {
        __typename: "AthleteUnitLookup",
        appId: string,
        custId?: string | null,
      } | null,
      podSettings?:  {
        __typename: "PodSettings",
        SAVINGS: number,
        INVESTMENTS: number,
        SPENDING: number,
      } | null,
      plaidToken?: string | null,
      plaidProcessorToken?:  {
        __typename: "ProcessorToken",
        plaidAccountId: string,
        processorToken?: string | null,
      } | null,
      wyreId?: string | null,
      isActive: boolean,
      handle?: string | null,
      wealthBalance: number,
      socialHandles?:  {
        __typename: "ModelSocialHandleConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    },
    details: string,
    detailsTldr: string,
    endDateTime: number,
    eventType: string,
    heroPhotoUri: string,
    isPrivate: boolean,
    location?:  {
      __typename: "Location",
      lat: number,
      lon: number,
    } | null,
    locationDetail?:  {
      __typename: "LocationDetail",
      address: string,
      unit?: string | null,
      city: string,
      state: string,
      zipCode: string,
      country: string,
      name?: string | null,
    } | null,
    logoUri: string,
    onlineReserved: number,
    onlineTotal: number,
    organizations?:  {
      __typename: "ModelOrganizationConnection",
      items:  Array< {
        __typename: "Organization",
        id: string,
        displayName: string,
        relationshipType: OrganizationRelationshipType,
        opportunityId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    orgs?:  Array< {
      __typename: "Org",
      displayName: string,
      relationshipType: OrganizationRelationshipType,
    } | null > | null,
    registrationUrl: string,
    reward: number,
    rewardDetails: string,
    seatsReserved: number,
    seatsTotal: number,
    startDateTime: number,
    status: string,
    subtitle: string,
    tags: Array< string | null >,
    title: string,
    timezone: string,
    websitePrompt: string,
    websiteUrl: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateOrganizationSubscription = {
  onCreateOrganization?:  {
    __typename: "Organization",
    id: string,
    displayName: string,
    relationshipType: OrganizationRelationshipType,
    opportunityId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateOrganizationSubscription = {
  onUpdateOrganization?:  {
    __typename: "Organization",
    id: string,
    displayName: string,
    relationshipType: OrganizationRelationshipType,
    opportunityId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteOrganizationSubscription = {
  onDeleteOrganization?:  {
    __typename: "Organization",
    id: string,
    displayName: string,
    relationshipType: OrganizationRelationshipType,
    opportunityId: string,
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

export type OnCreateRewardSubscription = {
  onCreateReward?:  {
    __typename: "Reward",
    id: string,
    creatorId: string,
    creator:  {
      __typename: "Athlete",
      firstName: string,
      lastName: string,
      mobilePhone: string,
      athleteTag?: string | null,
      bio?: string | null,
      profilePhotoUri?: string | null,
      heroPhotoUri?: string | null,
      email: string,
      level?: AthleteLevel | null,
      sport?:  {
        __typename: "AthleteSport",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      } | null,
      team?:  {
        __typename: "AthleteTeam",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      } | null,
      address?:  {
        __typename: "Address",
        streetAddress: string,
        apt?: string | null,
        city: string,
        state: string,
        zipCode: string,
      } | null,
      dateOfBirth?: string | null,
      accounts?:  {
        __typename: "ModelAthleteAccountConnection",
        nextToken?: string | null,
      } | null,
      unitLookup?:  {
        __typename: "AthleteUnitLookup",
        appId: string,
        custId?: string | null,
      } | null,
      podSettings?:  {
        __typename: "PodSettings",
        SAVINGS: number,
        INVESTMENTS: number,
        SPENDING: number,
      } | null,
      plaidToken?: string | null,
      plaidProcessorToken?:  {
        __typename: "ProcessorToken",
        plaidAccountId: string,
        processorToken?: string | null,
      } | null,
      wyreId?: string | null,
      isActive: boolean,
      handle?: string | null,
      wealthBalance: number,
      socialHandles?:  {
        __typename: "ModelSocialHandleConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    },
    title: string,
    wealthAmount: number,
    logoUri?: string | null,
    description?: string | null,
    heroPhotoUri?: string | null,
    redeemed: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateRewardSubscription = {
  onUpdateReward?:  {
    __typename: "Reward",
    id: string,
    creatorId: string,
    creator:  {
      __typename: "Athlete",
      firstName: string,
      lastName: string,
      mobilePhone: string,
      athleteTag?: string | null,
      bio?: string | null,
      profilePhotoUri?: string | null,
      heroPhotoUri?: string | null,
      email: string,
      level?: AthleteLevel | null,
      sport?:  {
        __typename: "AthleteSport",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      } | null,
      team?:  {
        __typename: "AthleteTeam",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      } | null,
      address?:  {
        __typename: "Address",
        streetAddress: string,
        apt?: string | null,
        city: string,
        state: string,
        zipCode: string,
      } | null,
      dateOfBirth?: string | null,
      accounts?:  {
        __typename: "ModelAthleteAccountConnection",
        nextToken?: string | null,
      } | null,
      unitLookup?:  {
        __typename: "AthleteUnitLookup",
        appId: string,
        custId?: string | null,
      } | null,
      podSettings?:  {
        __typename: "PodSettings",
        SAVINGS: number,
        INVESTMENTS: number,
        SPENDING: number,
      } | null,
      plaidToken?: string | null,
      plaidProcessorToken?:  {
        __typename: "ProcessorToken",
        plaidAccountId: string,
        processorToken?: string | null,
      } | null,
      wyreId?: string | null,
      isActive: boolean,
      handle?: string | null,
      wealthBalance: number,
      socialHandles?:  {
        __typename: "ModelSocialHandleConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    },
    title: string,
    wealthAmount: number,
    logoUri?: string | null,
    description?: string | null,
    heroPhotoUri?: string | null,
    redeemed: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteRewardSubscription = {
  onDeleteReward?:  {
    __typename: "Reward",
    id: string,
    creatorId: string,
    creator:  {
      __typename: "Athlete",
      firstName: string,
      lastName: string,
      mobilePhone: string,
      athleteTag?: string | null,
      bio?: string | null,
      profilePhotoUri?: string | null,
      heroPhotoUri?: string | null,
      email: string,
      level?: AthleteLevel | null,
      sport?:  {
        __typename: "AthleteSport",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      } | null,
      team?:  {
        __typename: "AthleteTeam",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      } | null,
      address?:  {
        __typename: "Address",
        streetAddress: string,
        apt?: string | null,
        city: string,
        state: string,
        zipCode: string,
      } | null,
      dateOfBirth?: string | null,
      accounts?:  {
        __typename: "ModelAthleteAccountConnection",
        nextToken?: string | null,
      } | null,
      unitLookup?:  {
        __typename: "AthleteUnitLookup",
        appId: string,
        custId?: string | null,
      } | null,
      podSettings?:  {
        __typename: "PodSettings",
        SAVINGS: number,
        INVESTMENTS: number,
        SPENDING: number,
      } | null,
      plaidToken?: string | null,
      plaidProcessorToken?:  {
        __typename: "ProcessorToken",
        plaidAccountId: string,
        processorToken?: string | null,
      } | null,
      wyreId?: string | null,
      isActive: boolean,
      handle?: string | null,
      wealthBalance: number,
      socialHandles?:  {
        __typename: "ModelSocialHandleConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    },
    title: string,
    wealthAmount: number,
    logoUri?: string | null,
    description?: string | null,
    heroPhotoUri?: string | null,
    redeemed: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};
