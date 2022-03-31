/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const listPlaidAccounts = /* GraphQL */ `
  query ListPlaidAccounts($athleteId: ID!) {
    listPlaidAccounts(athleteId: $athleteId) {
      account_id
      balances {
        available
        current
        iso_currency_code
        limit
        unofficial_currency_code
      }
      mask
      name
      official_name
      subtype
      type
    }
  }
`;
export const listAthleteUnitAccounts = /* GraphQL */ `
  query ListAthleteUnitAccounts($athleteId: ID!) {
    listAthleteUnitAccounts(athleteId: $athleteId) {
      type
      id
      attributes {
        createdAt
        direction
        amount
        balance
        summary
        description
        counterparty {
          name
          routingNumber
          accountNumber
          accountType
        }
        name
        status
        date
        routingNumber
        accountNumber
        currency
        verificationToken
        expiresIn
        hold
        available
        tags {
          podName
          athleteId
        }
      }
    }
  }
`;
export const getAthleteUnitAccountById = /* GraphQL */ `
  query GetAthleteUnitAccountById($athleteId: ID!, $unitAccountId: String!) {
    getAthleteUnitAccountById(
      athleteId: $athleteId
      unitAccountId: $unitAccountId
    ) {
      type
      id
      attributes {
        createdAt
        direction
        amount
        balance
        summary
        description
        counterparty {
          name
          routingNumber
          accountNumber
          accountType
        }
        name
        status
        date
        routingNumber
        accountNumber
        currency
        verificationToken
        expiresIn
        hold
        available
        tags {
          podName
          athleteId
        }
      }
    }
  }
`;
<<<<<<< HEAD
=======
export const getUnitTransactionById = /* GraphQL */ `
  query GetUnitTransactionById(
    $unitAccountId: String!
    $unitTransactionId: String!
  ) {
    getUnitTransactionById(
      unitAccountId: $unitAccountId
      unitTransactionId: $unitTransactionId
    ) {
      type
      id
      attributes {
        createdAt
        direction
        amount
        balance
        summary
        description
        counterparty {
          name
          routingNumber
          accountNumber
          accountType
        }
        name
        status
        date
        routingNumber
        accountNumber
        currency
        verificationToken
        expiresIn
        hold
        available
        tags {
          podName
          athleteId
        }
      }
    }
  }
`;
>>>>>>> unit-fix
export const listAllUnitTransactions = /* GraphQL */ `
  query ListAllUnitTransactions($athleteId: ID!) {
    listAllUnitTransactions(athleteId: $athleteId) {
      type
      id
      attributes {
        createdAt
        direction
        amount
        balance
        summary
        description
        counterparty {
          name
          routingNumber
          accountNumber
          accountType
        }
        name
        status
        date
        routingNumber
        accountNumber
        currency
        verificationToken
        expiresIn
        hold
        available
        tags {
          podName
          athleteId
        }
      }
    }
  }
`;
export const listUnitBalanceHistory = /* GraphQL */ `
  query ListUnitBalanceHistory($athleteId: ID!) {
    listUnitBalanceHistory(athleteId: $athleteId) {
      type
      id
      attributes {
        createdAt
        direction
        amount
        balance
        summary
        description
        counterparty {
          name
          routingNumber
          accountNumber
          accountType
        }
        name
        status
        date
        routingNumber
        accountNumber
        currency
        verificationToken
        expiresIn
        hold
        available
        tags {
          podName
          athleteId
        }
      }
    }
  }
`;
export const unitAccountStatement = /* GraphQL */ `
  query UnitAccountStatement($athleteId: ID!) {
    unitAccountStatement(athleteId: $athleteId) {
      type
      id
      attributes {
        createdAt
        direction
        amount
        balance
        summary
        description
        counterparty {
          name
          routingNumber
          accountNumber
          accountType
        }
        name
        status
        date
        routingNumber
        accountNumber
        currency
        verificationToken
        expiresIn
        hold
        available
        tags {
          podName
          athleteId
        }
      }
    }
  }
`;
<<<<<<< HEAD
export const getRecentTransaction = /* GraphQL */ `
  query GetRecentTransaction($id: ID!) {
    getRecentTransaction(id: $id) {
      transactionId
      athleteId
      status
      amount
      idempotencyKey
      direction
      createdAt
      read
      settled
      podAllocation {
        SAVINGS
        INVESTMENTS
        SPENDING
      }
      id
      updatedAt
    }
  }
`;
export const listRecentTransactions = /* GraphQL */ `
  query ListRecentTransactions(
    $filter: ModelRecentTransactionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRecentTransactions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        transactionId
        athleteId
        status
        amount
        idempotencyKey
        direction
        createdAt
        read
        settled
        podAllocation {
          SAVINGS
          INVESTMENTS
          SPENDING
        }
        id
        updatedAt
      }
      nextToken
    }
  }
`;
=======
>>>>>>> unit-fix
export const getAthlete = /* GraphQL */ `
  query GetAthlete($id: ID!) {
    getAthlete(id: $id) {
      firstName
      lastName
      mobilePhone
      athleteTag
      email
      tag
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
      unitLookup {
        appId
        custId
      }
      podSettings {
        SAVINGS
        INVESTMENTS
        SPENDING
      }
      plaidToken
      unitToken
      plaidProcessorToken {
        plaidAccountId
        processorToken
      }
      wyreAccountId
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
        athleteTag
        email
        tag
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
        plaidToken
        unitToken
        plaidProcessorToken {
          plaidAccountId
          processorToken
        }
        wyreAccountId
        isActive
        id
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const athleteByPhone = /* GraphQL */ `
  query AthleteByPhone(
    $mobilePhone: String!
    $sortDirection: ModelSortDirection
    $filter: ModelAthleteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    athleteByPhone(
      mobilePhone: $mobilePhone
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        firstName
        lastName
        mobilePhone
        athleteTag
        email
        tag
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
        plaidToken
        unitToken
        plaidProcessorToken {
          plaidAccountId
          processorToken
        }
        wyreAccountId
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
        athleteTag
        email
        tag
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
        plaidToken
        unitToken
        plaidProcessorToken {
          plaidAccountId
          processorToken
        }
        wyreAccountId
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
        athlete {
          firstName
          lastName
          mobilePhone
          athleteTag
          email
          tag
          level
          dateOfBirth
          plaidToken
          unitToken
          wyreAccountId
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
<<<<<<< HEAD
export const getUnitTransactionById = /* GraphQL */ `
  query GetUnitTransactionById(
    $unitAccountId: String!
    $unitTransactionId: String!
  ) {
    getUnitTransactionById(
      unitAccountId: $unitAccountId
      unitTransactionId: $unitTransactionId
    ) {
      type
      id
      attributes {
        createdAt
        direction
        amount
        balance
        summary
        description
        counterparty {
          name
          routingNumber
          accountNumber
          accountType
        }
        name
        status
        date
        routingNumber
        accountNumber
        currency
        verificationToken
        expiresIn
        hold
        available
        tags {
          podName
          athleteId
        }
      }
=======
export const getRecentTransaction = /* GraphQL */ `
  query GetRecentTransaction($id: ID!) {
    getRecentTransaction(id: $id) {
      transactionId
      athleteId
      status
      amount
      idempotencyKey
      direction
      createdAt
      read
      settled
      podAllocation {
        SAVINGS
        INVESTMENTS
        SPENDING
      }
      id
      updatedAt
    }
  }
`;
export const listRecentTransactions = /* GraphQL */ `
  query ListRecentTransactions(
    $filter: ModelRecentTransactionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRecentTransactions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        transactionId
        athleteId
        status
        amount
        idempotencyKey
        direction
        createdAt
        read
        settled
        podAllocation {
          SAVINGS
          INVESTMENTS
          SPENDING
        }
        id
        updatedAt
      }
      nextToken
>>>>>>> unit-fix
    }
  }
`;
export const getAthleteSchool = /* GraphQL */ `
  query GetAthleteSchool {
    getAthleteSchool {
      name
      airTableId
      isActive
    }
  }
`;
