/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getAthlete = /* GraphQL */ `
  query GetAthlete($id: ID!) {
    getAthlete(id: $id) {
      firstName
      lastName
      mobilePhone
      email
      level
      sport {
        name
        airTableId
        isActive
      }
      team {
        name
        airTableId
        isActive
      }
      address {
        streetAddress
        apt
        city
        state
        zipCode
      }
      dateOfBirth
      accounts {
        nextToken
      }
      unitLookup {
        appId
        custId
      }
      podSettings {
        SAVINGS
        INVESTMENTS
        SPENDING
      }
      plaid {
        access_token
        processor_token
      }
      wyreId
      isActive
      id
      createdAt
      updatedAt
    }
  }
`;
export const listAthletes = /* GraphQL */ `
  query ListAthletes(
    $filter: ModelAthleteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAthletes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        firstName
        lastName
        mobilePhone
        email
        level
        dateOfBirth
        wyreId
        isActive
        id
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getAthleteAccount = /* GraphQL */ `
  query GetAthleteAccount($id: ID!) {
    getAthleteAccount(id: $id) {
      athlete {
        firstName
        lastName
        mobilePhone
        email
        level
        dateOfBirth
        wyreId
        isActive
        id
        createdAt
        updatedAt
      }
      unitAccountId
      routingCode
      accountNumber
      podName
      id
      createdAt
      updatedAt
      athleteAccountsId
    }
  }
`;
export const listAthleteAccounts = /* GraphQL */ `
  query ListAthleteAccounts(
    $filter: ModelAthleteAccountFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAthleteAccounts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        unitAccountId
        routingCode
        accountNumber
        podName
        id
        createdAt
        updatedAt
        athleteAccountsId
      }
      nextToken
    }
  }
`;
export const getEmailChallenge = /* GraphQL */ `
  query GetEmailChallenge($code: String!, $email: String!) {
    getEmailChallenge(code: $code, email: $email) {
      code
      email
      verified
      createdAt
      updatedAt
    }
  }
`;
export const listEmailChallenges = /* GraphQL */ `
  query ListEmailChallenges(
    $code: String
    $email: ModelStringKeyConditionInput
    $filter: ModelEmailChallengeFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listEmailChallenges(
      code: $code
      email: $email
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        code
        email
        verified
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getInvite = /* GraphQL */ `
  query GetInvite($code: String!, $status: Status!) {
    getInvite(code: $code, status: $status) {
      code
      status
      createdAt
      updatedAt
    }
  }
`;
export const listInvites = /* GraphQL */ `
  query ListInvites(
    $code: String
    $status: ModelStringKeyConditionInput
    $filter: ModelInviteFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listInvites(
      code: $code
      status: $status
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        code
        status
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPhoneChallenge = /* GraphQL */ `
  query GetPhoneChallenge($code: String!, $phoneNumber: String!) {
    getPhoneChallenge(code: $code, phoneNumber: $phoneNumber) {
      code
      phoneNumber
      verified
      createdAt
      updatedAt
    }
  }
`;
export const listPhoneChallenges = /* GraphQL */ `
  query ListPhoneChallenges(
    $code: String
    $phoneNumber: ModelStringKeyConditionInput
    $filter: ModelPhoneChallengeFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listPhoneChallenges(
      code: $code
      phoneNumber: $phoneNumber
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        code
        phoneNumber
        verified
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
