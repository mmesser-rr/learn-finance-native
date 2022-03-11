/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateProcessorToken = /* GraphQL */ `
  subscription OnCreateProcessorToken {
    onCreateProcessorToken {
      plaidAccountId
      processorToken
      id
      createdAt
      updatedAt
      athletePlaidProcessorTokenId
    }
  }
`;
export const onUpdateProcessorToken = /* GraphQL */ `
  subscription OnUpdateProcessorToken {
    onUpdateProcessorToken {
      plaidAccountId
      processorToken
      id
      createdAt
      updatedAt
      athletePlaidProcessorTokenId
    }
  }
`;
export const onDeleteProcessorToken = /* GraphQL */ `
  subscription OnDeleteProcessorToken {
    onDeleteProcessorToken {
      plaidAccountId
      processorToken
      id
      createdAt
      updatedAt
      athletePlaidProcessorTokenId
    }
  }
`;
export const onCreateAthlete = /* GraphQL */ `
  subscription OnCreateAthlete {
    onCreateAthlete {
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
export const onUpdateAthlete = /* GraphQL */ `
  subscription OnUpdateAthlete {
    onUpdateAthlete {
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
export const onDeleteAthlete = /* GraphQL */ `
  subscription OnDeleteAthlete {
    onDeleteAthlete {
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
export const onCreateAthleteAccount = /* GraphQL */ `
  subscription OnCreateAthleteAccount {
    onCreateAthleteAccount {
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
export const onUpdateAthleteAccount = /* GraphQL */ `
  subscription OnUpdateAthleteAccount {
    onUpdateAthleteAccount {
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
export const onDeleteAthleteAccount = /* GraphQL */ `
  subscription OnDeleteAthleteAccount {
    onDeleteAthleteAccount {
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
export const onCreateTransanctions = /* GraphQL */ `
  subscription OnCreateTransanctions {
    onCreateTransanctions {
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
export const onUpdateTransanctions = /* GraphQL */ `
  subscription OnUpdateTransanctions {
    onUpdateTransanctions {
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
export const onDeleteTransanctions = /* GraphQL */ `
  subscription OnDeleteTransanctions {
    onDeleteTransanctions {
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
export const onCreateEmailChallenge = /* GraphQL */ `
  subscription OnCreateEmailChallenge {
    onCreateEmailChallenge {
      code
      email
      verified
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateEmailChallenge = /* GraphQL */ `
  subscription OnUpdateEmailChallenge {
    onUpdateEmailChallenge {
      code
      email
      verified
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteEmailChallenge = /* GraphQL */ `
  subscription OnDeleteEmailChallenge {
    onDeleteEmailChallenge {
      code
      email
      verified
      createdAt
      updatedAt
    }
  }
`;
export const onCreateInvite = /* GraphQL */ `
  subscription OnCreateInvite {
    onCreateInvite {
      code
      status
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateInvite = /* GraphQL */ `
  subscription OnUpdateInvite {
    onUpdateInvite {
      code
      status
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteInvite = /* GraphQL */ `
  subscription OnDeleteInvite {
    onDeleteInvite {
      code
      status
      createdAt
      updatedAt
    }
  }
`;
export const onCreatePhoneChallenge = /* GraphQL */ `
  subscription OnCreatePhoneChallenge {
    onCreatePhoneChallenge {
      code
      phoneNumber
      verified
      createdAt
      updatedAt
    }
  }
`;
export const onUpdatePhoneChallenge = /* GraphQL */ `
  subscription OnUpdatePhoneChallenge {
    onUpdatePhoneChallenge {
      code
      phoneNumber
      verified
      createdAt
      updatedAt
    }
  }
`;
export const onDeletePhoneChallenge = /* GraphQL */ `
  subscription OnDeletePhoneChallenge {
    onDeletePhoneChallenge {
      code
      phoneNumber
      verified
      createdAt
      updatedAt
    }
  }
`;
export const onCreatePlaidAccount = /* GraphQL */ `
  subscription OnCreatePlaidAccount {
    onCreatePlaidAccount {
      accounts {
        nextToken
      }
      id
      createdAt
      updatedAt
    }
  }
`;
export const onUpdatePlaidAccount = /* GraphQL */ `
  subscription OnUpdatePlaidAccount {
    onUpdatePlaidAccount {
      accounts {
        nextToken
      }
      id
      createdAt
      updatedAt
    }
  }
`;
export const onDeletePlaidAccount = /* GraphQL */ `
  subscription OnDeletePlaidAccount {
    onDeletePlaidAccount {
      accounts {
        nextToken
      }
      id
      createdAt
      updatedAt
    }
  }
`;
export const onCreateAccounts = /* GraphQL */ `
  subscription OnCreateAccounts {
    onCreateAccounts {
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
      id
      createdAt
      updatedAt
      plaidAccountAccountsId
    }
  }
`;
export const onUpdateAccounts = /* GraphQL */ `
  subscription OnUpdateAccounts {
    onUpdateAccounts {
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
      id
      createdAt
      updatedAt
      plaidAccountAccountsId
    }
  }
`;
export const onDeleteAccounts = /* GraphQL */ `
  subscription OnDeleteAccounts {
    onDeleteAccounts {
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
      id
      createdAt
      updatedAt
      plaidAccountAccountsId
    }
  }
`;
export const onCreateUnitAccount = /* GraphQL */ `
  subscription OnCreateUnitAccount {
    onCreateUnitAccount {
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
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUnitAccount = /* GraphQL */ `
  subscription OnUpdateUnitAccount {
    onUpdateUnitAccount {
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
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUnitAccount = /* GraphQL */ `
  subscription OnDeleteUnitAccount {
    onDeleteUnitAccount {
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
      createdAt
      updatedAt
    }
  }
`;
