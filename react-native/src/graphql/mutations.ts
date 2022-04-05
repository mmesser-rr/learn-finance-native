/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const openAppAndAccount = /* GraphQL */ `
  mutation OpenAppAndAccount($ssn: String!, $athleteId: ID!) {
    openAppAndAccount(ssn: $ssn, athleteId: $athleteId) {
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
      athleteId
    }
  }
`;
export const openAccount = /* GraphQL */ `
  mutation OpenAccount($athleteId: ID!, $podName: String!) {
    openAccount(athleteId: $athleteId, podName: $podName) {
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
      athleteId
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
      unitPlaidProcessorToken {
        plaidAccountId
        processorToken
      }
      wyrePlaidProcessorToken {
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
export const createAthleteUnitToken = /* GraphQL */ `
  mutation CreateAthleteUnitToken(
    $athleteId: ID!
    $verificationToken: String!
    $verificationCode: String!
  ) {
    createAthleteUnitToken(
      athleteId: $athleteId
      verificationToken: $verificationToken
      verificationCode: $verificationCode
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
        date
        routingNumber
        accountNumber
        currency
        verificationToken
        expiresIn
        hold
        available
      }
    }
  }
`;
export const athleteUnitTokenVerification = /* GraphQL */ `
  mutation AthleteUnitTokenVerification($athleteId: ID!) {
    athleteUnitTokenVerification(athleteId: $athleteId) {
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
        date
        routingNumber
        accountNumber
        currency
        verificationToken
        expiresIn
        hold
        available
      }
    }
  }
`;
export const createWyreAccount = /* GraphQL */ `
  mutation CreateWyreAccount($athleteId: ID!) {
    createWyreAccount(athleteId: $athleteId) {
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
      unitPlaidProcessorToken {
        plaidAccountId
        processorToken
      }
      wyrePlaidProcessorToken {
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
export const debitWyreAccount = /* GraphQL */ `
  mutation DebitWyreAccount(
    $athleteId: ID!
    $plaidAccountId: String!
    $amount: Float!
    $description: String
    $idempotencyKey: String!
  ) {
    debitWyreAccount(
      athleteId: $athleteId
      plaidAccountId: $plaidAccountId
      amount: $amount
      description: $description
      idempotencyKey: $idempotencyKey
    ) {
      owner
      status
      balances {
        DAI
        AUD
        USD
        MXN
        USDC
        BTC
        ETH
        MUSDC
      }
      createdAt
      pusherChannel
      srn
      notes
      depositAddresses {
        ETH
        BTC
        AVAX
        XLM
      }
      availableBalances {
        DAI
        AUD
        USD
        MXN
        USDC
        BTC
        ETH
        MUSDC
      }
      name
      id
      type
      pendingInterestBalances {
        DAI
        AUD
        USD
        MXN
        USDC
        BTC
        ETH
        MUSDC
      }
    }
  }
`;
export const creditWyreAccount = /* GraphQL */ `
  mutation CreditWyreAccount(
    $athleteId: ID!
    $plaidAccountId: String!
    $amount: Float!
    $description: String
    $idempotencyKey: String!
  ) {
    creditWyreAccount(
      athleteId: $athleteId
      plaidAccountId: $plaidAccountId
      amount: $amount
      description: $description
      idempotencyKey: $idempotencyKey
    ) {
      owner
      status
      balances {
        DAI
        AUD
        USD
        MXN
        USDC
        BTC
        ETH
        MUSDC
      }
      createdAt
      pusherChannel
      srn
      notes
      depositAddresses {
        ETH
        BTC
        AVAX
        XLM
      }
      availableBalances {
        DAI
        AUD
        USD
        MXN
        USDC
        BTC
        ETH
        MUSDC
      }
      name
      id
      type
      pendingInterestBalances {
        DAI
        AUD
        USD
        MXN
        USDC
        BTC
        ETH
        MUSDC
      }
    }
  }
`;
export const createPlaidPayment = /* GraphQL */ `
  mutation CreatePlaidPayment(
    $athleteId: ID!
    $plaidAccountId: String!
    $amount: Float!
    $description: String
    $idempotencyKey: String!
  ) {
    createPlaidPayment(
      athleteId: $athleteId
      plaidAccountId: $plaidAccountId
      amount: $amount
      description: $description
      idempotencyKey: $idempotencyKey
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
        date
        routingNumber
        accountNumber
        currency
        verificationToken
        expiresIn
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
    $idempotencyKey: String!
  ) {
    bookPayment(
      athleteId: $athleteId
      unitAccountId: $unitAccountId
      amount: $amount
      description: $description
      receiverUnitAccountId: $receiverUnitAccountId
      receiverAccountType: $receiverAccountType
      idempotencyKey: $idempotencyKey
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
        date
        routingNumber
        accountNumber
        currency
        verificationToken
        expiresIn
        hold
        available
      }
    }
  }
`;
export const debitAccount = /* GraphQL */ `
  mutation DebitAccount(
    $athleteId: ID!
    $amount: Float!
    $description: String
    $receiverName: String!
    $receiverRoutingNumber: String!
    $receiverAccountNumber: String!
    $receiverAccountType: String
    $addenda: String
    $idempotencyKey: String!
  ) {
    debitAccount(
      athleteId: $athleteId
      amount: $amount
      description: $description
      receiverName: $receiverName
      receiverRoutingNumber: $receiverRoutingNumber
      receiverAccountNumber: $receiverAccountNumber
      receiverAccountType: $receiverAccountType
      addenda: $addenda
      idempotencyKey: $idempotencyKey
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
        date
        routingNumber
        accountNumber
        currency
        verificationToken
        expiresIn
        hold
        available
      }
    }
  }
`;
export const creditAccount = /* GraphQL */ `
  mutation CreditAccount(
    $athleteId: ID!
    $amount: Float!
    $description: String
    $receiverName: String!
    $receiverRoutingNumber: String!
    $receiverAccountNumber: String!
    $receiverAccountType: String
    $addenda: String
    $idempotencyKey: String!
  ) {
    creditAccount(
      athleteId: $athleteId
      amount: $amount
      description: $description
      receiverName: $receiverName
      receiverRoutingNumber: $receiverRoutingNumber
      receiverAccountNumber: $receiverAccountNumber
      receiverAccountType: $receiverAccountType
      addenda: $addenda
      idempotencyKey: $idempotencyKey
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
        date
        routingNumber
        accountNumber
        currency
        verificationToken
        expiresIn
        hold
        available
      }
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
      unitPlaidProcessorToken {
        plaidAccountId
        processorToken
      }
      wyrePlaidProcessorToken {
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
export const updateAthlete = /* GraphQL */ `
  mutation UpdateAthlete(
    $input: UpdateAthleteInput!
    $condition: ModelAthleteConditionInput
  ) {
    updateAthlete(input: $input, condition: $condition) {
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
      unitPlaidProcessorToken {
        plaidAccountId
        processorToken
      }
      wyrePlaidProcessorToken {
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
export const deleteAthlete = /* GraphQL */ `
  mutation DeleteAthlete(
    $input: DeleteAthleteInput!
    $condition: ModelAthleteConditionInput
  ) {
    deleteAthlete(input: $input, condition: $condition) {
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
      unitPlaidProcessorToken {
        plaidAccountId
        processorToken
      }
      wyrePlaidProcessorToken {
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
      athleteId
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
      athleteId
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
      athleteId
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
export const deleteRecentTransaction = /* GraphQL */ `
  mutation DeleteRecentTransaction(
    $input: DeleteRecentTransactionInput!
    $condition: ModelRecentTransactionConditionInput
  ) {
    deleteRecentTransaction(input: $input, condition: $condition) {
      transactionId
      athleteId
      transactionType
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
export const createRecentTransaction = /* GraphQL */ `
  mutation CreateRecentTransaction(
    $input: CreateRecentTransactionInput!
    $condition: ModelRecentTransactionConditionInput
  ) {
    createRecentTransaction(input: $input, condition: $condition) {
      transactionId
      athleteId
      transactionType
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
export const updateRecentTransaction = /* GraphQL */ `
  mutation UpdateRecentTransaction(
    $input: UpdateRecentTransactionInput!
    $condition: ModelRecentTransactionConditionInput
  ) {
    updateRecentTransaction(input: $input, condition: $condition) {
      transactionId
      athleteId
      transactionType
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
