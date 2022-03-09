/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const initiatePhoneChallenge = /* GraphQL */ `
  mutation InitiatePhoneChallenge($phoneNumber: String!) {
    initiatePhoneChallenge(phoneNumber: $phoneNumber) {
      code
      phoneNumber
      verified
      createdAt
      updatedAt
    }
  }
`;
export const returnUserChallenge = /* GraphQL */ `
  mutation ReturnUserChallenge($phoneNumber: String!) {
    returnUserChallenge(phoneNumber: $phoneNumber) {
      code
      phoneNumber
      verified
      createdAt
      updatedAt
    }
  }
`;
export const validateReturnUser = /* GraphQL */ `
  mutation ValidateReturnUser($phoneNumber: String!, $code: String!) {
    validateReturnUser(phoneNumber: $phoneNumber, code: $code)
  }
`;
export const tryPhoneChallenge = /* GraphQL */ `
  mutation TryPhoneChallenge($phoneNumber: String!, $code: String!) {
    tryPhoneChallenge(phoneNumber: $phoneNumber, code: $code)
  }
`;
export const generateInvite = /* GraphQL */ `
  mutation GenerateInvite {
    generateInvite {
      code
      status
      createdAt
      updatedAt
    }
  }
`;
export const initiateEmailChallenge = /* GraphQL */ `
  mutation InitiateEmailChallenge($email: String!) {
    initiateEmailChallenge(email: $email) {
      code
      email
      verified
      createdAt
      updatedAt
    }
  }
`;
export const tryEmailChallenge = /* GraphQL */ `
  mutation TryEmailChallenge($email: String!, $code: String!) {
    tryEmailChallenge(email: $email, code: $code)
  }
`;
export const openAppAndAccount = /* GraphQL */ `
  mutation OpenAppAndAccount($ssn: String!, $athleteId: ID!) {
    openAppAndAccount(ssn: $ssn, athleteId: $athleteId) {
      athlete {
        firstName
        lastName
        mobilePhone
        email
        level
        dateOfBirth
        plaidToken
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
export const openAccount = /* GraphQL */ `
  mutation OpenAccount($athleteId: ID!) {
    openAccount(athleteId: $athleteId) {
      athlete {
        firstName
        lastName
        mobilePhone
        email
        level
        dateOfBirth
        plaidToken
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
export const getAthleteUnitAccounts = /* GraphQL */ `
  mutation GetAthleteUnitAccounts($athleteId: ID!) {
    getAthleteUnitAccounts(athleteId: $athleteId) {
      type
      id
      attributes {
        createdAt
        direction
        amount
        balance
        summary
        description
        name
        status
        routingNumber
        accountNumber
        currency
        hold
        available
      }
    }
  }
`;
export const getUnitTransactionById = /* GraphQL */ `
  mutation GetUnitTransactionById(
    $athleteId: ID!
    $unitTransactionId: String!
  ) {
    getUnitTransactionById(
      athleteId: $athleteId
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
        name
        status
        routingNumber
        accountNumber
        currency
        hold
        available
      }
    }
  }
`;
export const getAllUnitTransaction = /* GraphQL */ `
  mutation GetAllUnitTransaction($athleteId: ID!) {
    getAllUnitTransaction(athleteId: $athleteId) {
      type
      id
      attributes {
        createdAt
        direction
        amount
        balance
        summary
        description
        name
        status
        routingNumber
        accountNumber
        currency
        hold
        available
      }
    }
  }
`;
export const getAthleteUnitAccountById = /* GraphQL */ `
  mutation GetAthleteUnitAccountById($athleteId: ID!, $unitAccountId: String!) {
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
        name
        status
        routingNumber
        accountNumber
        currency
        hold
        available
      }
    }
  }
`;
export const podSettings = /* GraphQL */ `
  mutation PodSettings(
    $athleteId: ID!
    $savings: Int!
    $investments: Int!
    $spending: Int!
  ) {
    podSettings(
      athleteId: $athleteId
      savings: $savings
      investments: $investments
      spending: $spending
    ) {
      athlete {
        firstName
        lastName
        mobilePhone
        email
        level
        dateOfBirth
        plaidToken
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
export const createPlaidLink = /* GraphQL */ `
  mutation CreatePlaidLink($athleteId: ID!) {
    createPlaidLink(athleteId: $athleteId) {
      access_token
      item_id
      link_token
      request_id
      new_access_token
    }
  }
`;
export const updatePlaidLink = /* GraphQL */ `
  mutation UpdatePlaidLink($athleteId: ID!, $accessToken: String!) {
    updatePlaidLink(athleteId: $athleteId, accessToken: $accessToken) {
      access_token
      item_id
      link_token
      request_id
      new_access_token
    }
  }
`;
export const getPlaidAccounts = /* GraphQL */ `
  mutation GetPlaidAccounts($athleteId: ID!) {
    getPlaidAccounts(athleteId: $athleteId) {
      access_token
      item_id
      link_token
      request_id
      new_access_token
    }
  }
`;
export const createPlaidPayment = /* GraphQL */ `
  mutation CreatePlaidPayment(
    $athleteId: ID!
    $plaidAccountId: String!
    $amount: Float!
    $description: String
    $receiverUnitAccountId: String!
    $receiverAccountType: String
  ) {
    createPlaidPayment(
      athleteId: $athleteId
      plaidAccountId: $plaidAccountId
      amount: $amount
      description: $description
      receiverUnitAccountId: $receiverUnitAccountId
      receiverAccountType: $receiverAccountType
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
        name
        status
        routingNumber
        accountNumber
        currency
        hold
        available
      }
    }
  }
`;
export const bookPayment = /* GraphQL */ `
  mutation BookPayment(
    $athleteId: ID!
    $unitAccountId: String!
    $amount: Float!
    $description: String
    $receiverUnitAccountId: String!
    $receiverAccountType: String
  ) {
    bookPayment(
      athleteId: $athleteId
      unitAccountId: $unitAccountId
      amount: $amount
      description: $description
      receiverUnitAccountId: $receiverUnitAccountId
      receiverAccountType: $receiverAccountType
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
        name
        status
        routingNumber
        accountNumber
        currency
        hold
        available
      }
    }
  }
`;
export const debitAccount = /* GraphQL */ `
  mutation DebitAccount(
    $athleteId: ID!
    $unitAccountId: String!
    $amount: Float!
    $description: String
    $receiverName: String!
    $receiverRoutingNumber: String!
    $receiverAccountNumber: String!
    $receiverAccountType: String
    $addenda: String
  ) {
    debitAccount(
      athleteId: $athleteId
      unitAccountId: $unitAccountId
      amount: $amount
      description: $description
      receiverName: $receiverName
      receiverRoutingNumber: $receiverRoutingNumber
      receiverAccountNumber: $receiverAccountNumber
      receiverAccountType: $receiverAccountType
      addenda: $addenda
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
        name
        status
        routingNumber
        accountNumber
        currency
        hold
        available
      }
    }
  }
`;
export const creditAccount = /* GraphQL */ `
  mutation CreditAccount(
    $athleteId: ID!
    $unitAccountId: String!
    $amount: Float!
    $description: String
    $receiverName: String!
    $receiverRoutingNumber: String!
    $receiverAccountNumber: String!
    $receiverAccountType: String
    $addenda: String
  ) {
    creditAccount(
      athleteId: $athleteId
      unitAccountId: $unitAccountId
      amount: $amount
      description: $description
      receiverName: $receiverName
      receiverRoutingNumber: $receiverRoutingNumber
      receiverAccountNumber: $receiverAccountNumber
      receiverAccountType: $receiverAccountType
      addenda: $addenda
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
        name
        status
        routingNumber
        accountNumber
        currency
        hold
        available
      }
    }
  }
`;
export const createProcessorToken = /* GraphQL */ `
  mutation CreateProcessorToken(
    $input: CreateProcessorTokenInput!
    $condition: ModelProcessorTokenConditionInput
  ) {
    createProcessorToken(input: $input, condition: $condition) {
      plaidAccountId
      processorToken
      id
      createdAt
      updatedAt
      athletePlaidProcessorTokenId
    }
  }
`;
export const updateProcessorToken = /* GraphQL */ `
  mutation UpdateProcessorToken(
    $input: UpdateProcessorTokenInput!
    $condition: ModelProcessorTokenConditionInput
  ) {
    updateProcessorToken(input: $input, condition: $condition) {
      plaidAccountId
      processorToken
      id
      createdAt
      updatedAt
      athletePlaidProcessorTokenId
    }
  }
`;
export const deleteProcessorToken = /* GraphQL */ `
  mutation DeleteProcessorToken(
    $input: DeleteProcessorTokenInput!
    $condition: ModelProcessorTokenConditionInput
  ) {
    deleteProcessorToken(input: $input, condition: $condition) {
      plaidAccountId
      processorToken
      id
      createdAt
      updatedAt
      athletePlaidProcessorTokenId
    }
  }
`;
export const createAthlete = /* GraphQL */ `
  mutation CreateAthlete(
    $input: CreateAthleteInput!
    $condition: ModelAthleteConditionInput
  ) {
    createAthlete(input: $input, condition: $condition) {
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
      plaidToken
      plaidProcessorToken {
        nextToken
      }
      transactions {
        nextToken
      }
      wyreId
      isActive
      id
      createdAt
      updatedAt
    }
  }
`;
export const updateAthlete = /* GraphQL */ `
  mutation UpdateAthlete(
    $input: UpdateAthleteInput!
    $condition: ModelAthleteConditionInput
  ) {
    updateAthlete(input: $input, condition: $condition) {
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
      plaidToken
      plaidProcessorToken {
        nextToken
      }
      transactions {
        nextToken
      }
      wyreId
      isActive
      id
      createdAt
      updatedAt
    }
  }
`;
export const deleteAthlete = /* GraphQL */ `
  mutation DeleteAthlete(
    $input: DeleteAthleteInput!
    $condition: ModelAthleteConditionInput
  ) {
    deleteAthlete(input: $input, condition: $condition) {
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
      plaidToken
      plaidProcessorToken {
        nextToken
      }
      transactions {
        nextToken
      }
      wyreId
      isActive
      id
      createdAt
      updatedAt
    }
  }
`;
export const createAthleteAccount = /* GraphQL */ `
  mutation CreateAthleteAccount(
    $input: CreateAthleteAccountInput!
    $condition: ModelAthleteAccountConditionInput
  ) {
    createAthleteAccount(input: $input, condition: $condition) {
      athlete {
        firstName
        lastName
        mobilePhone
        email
        level
        dateOfBirth
        plaidToken
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
export const updateAthleteAccount = /* GraphQL */ `
  mutation UpdateAthleteAccount(
    $input: UpdateAthleteAccountInput!
    $condition: ModelAthleteAccountConditionInput
  ) {
    updateAthleteAccount(input: $input, condition: $condition) {
      athlete {
        firstName
        lastName
        mobilePhone
        email
        level
        dateOfBirth
        plaidToken
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
export const deleteAthleteAccount = /* GraphQL */ `
  mutation DeleteAthleteAccount(
    $input: DeleteAthleteAccountInput!
    $condition: ModelAthleteAccountConditionInput
  ) {
    deleteAthleteAccount(input: $input, condition: $condition) {
      athlete {
        firstName
        lastName
        mobilePhone
        email
        level
        dateOfBirth
        plaidToken
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
export const createTransanctions = /* GraphQL */ `
  mutation CreateTransanctions(
    $input: CreateTransanctionsInput!
    $condition: ModelTransanctionsConditionInput
  ) {
    createTransanctions(input: $input, condition: $condition) {
      transactionId
      status
      amount
      id
      createdAt
      updatedAt
      athleteTransactionsId
    }
  }
`;
export const updateTransanctions = /* GraphQL */ `
  mutation UpdateTransanctions(
    $input: UpdateTransanctionsInput!
    $condition: ModelTransanctionsConditionInput
  ) {
    updateTransanctions(input: $input, condition: $condition) {
      transactionId
      status
      amount
      id
      createdAt
      updatedAt
      athleteTransactionsId
    }
  }
`;
export const deleteTransanctions = /* GraphQL */ `
  mutation DeleteTransanctions(
    $input: DeleteTransanctionsInput!
    $condition: ModelTransanctionsConditionInput
  ) {
    deleteTransanctions(input: $input, condition: $condition) {
      transactionId
      status
      amount
      id
      createdAt
      updatedAt
      athleteTransactionsId
    }
  }
`;
export const createEmailChallenge = /* GraphQL */ `
  mutation CreateEmailChallenge(
    $input: CreateEmailChallengeInput!
    $condition: ModelEmailChallengeConditionInput
  ) {
    createEmailChallenge(input: $input, condition: $condition) {
      code
      email
      verified
      createdAt
      updatedAt
    }
  }
`;
export const updateEmailChallenge = /* GraphQL */ `
  mutation UpdateEmailChallenge(
    $input: UpdateEmailChallengeInput!
    $condition: ModelEmailChallengeConditionInput
  ) {
    updateEmailChallenge(input: $input, condition: $condition) {
      code
      email
      verified
      createdAt
      updatedAt
    }
  }
`;
export const deleteEmailChallenge = /* GraphQL */ `
  mutation DeleteEmailChallenge(
    $input: DeleteEmailChallengeInput!
    $condition: ModelEmailChallengeConditionInput
  ) {
    deleteEmailChallenge(input: $input, condition: $condition) {
      code
      email
      verified
      createdAt
      updatedAt
    }
  }
`;
export const createInvite = /* GraphQL */ `
  mutation CreateInvite(
    $input: CreateInviteInput!
    $condition: ModelInviteConditionInput
  ) {
    createInvite(input: $input, condition: $condition) {
      code
      status
      createdAt
      updatedAt
    }
  }
`;
export const updateInvite = /* GraphQL */ `
  mutation UpdateInvite(
    $input: UpdateInviteInput!
    $condition: ModelInviteConditionInput
  ) {
    updateInvite(input: $input, condition: $condition) {
      code
      status
      createdAt
      updatedAt
    }
  }
`;
export const deleteInvite = /* GraphQL */ `
  mutation DeleteInvite(
    $input: DeleteInviteInput!
    $condition: ModelInviteConditionInput
  ) {
    deleteInvite(input: $input, condition: $condition) {
      code
      status
      createdAt
      updatedAt
    }
  }
`;
export const createPhoneChallenge = /* GraphQL */ `
  mutation CreatePhoneChallenge(
    $input: CreatePhoneChallengeInput!
    $condition: ModelPhoneChallengeConditionInput
  ) {
    createPhoneChallenge(input: $input, condition: $condition) {
      code
      phoneNumber
      verified
      createdAt
      updatedAt
    }
  }
`;
export const updatePhoneChallenge = /* GraphQL */ `
  mutation UpdatePhoneChallenge(
    $input: UpdatePhoneChallengeInput!
    $condition: ModelPhoneChallengeConditionInput
  ) {
    updatePhoneChallenge(input: $input, condition: $condition) {
      code
      phoneNumber
      verified
      createdAt
      updatedAt
    }
  }
`;
export const deletePhoneChallenge = /* GraphQL */ `
  mutation DeletePhoneChallenge(
    $input: DeletePhoneChallengeInput!
    $condition: ModelPhoneChallengeConditionInput
  ) {
    deletePhoneChallenge(input: $input, condition: $condition) {
      code
      phoneNumber
      verified
      createdAt
      updatedAt
    }
  }
`;
