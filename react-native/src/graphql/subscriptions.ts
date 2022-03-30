/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateAthleteAccount = /* GraphQL */ `
  subscription OnCreateAthleteAccount {
    onCreateAthleteAccount {
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
        owner
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
        owner
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
        owner
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
export const onCreateRecentTransaction = /* GraphQL */ `
  subscription OnCreateRecentTransaction {
    onCreateRecentTransaction {
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
export const onUpdateRecentTransaction = /* GraphQL */ `
  subscription OnUpdateRecentTransaction {
    onUpdateRecentTransaction {
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
export const onDeleteRecentTransaction = /* GraphQL */ `
  subscription OnDeleteRecentTransaction {
    onDeleteRecentTransaction {
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
export const onCreateAthlete = /* GraphQL */ `
  subscription OnCreateAthlete($owner: String) {
    onCreateAthlete(owner: $owner) {
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
      owner
    }
  }
`;
export const onUpdateAthlete = /* GraphQL */ `
  subscription OnUpdateAthlete($owner: String) {
    onUpdateAthlete(owner: $owner) {
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
      owner
    }
  }
`;
export const onDeleteAthlete = /* GraphQL */ `
  subscription OnDeleteAthlete($owner: String) {
    onDeleteAthlete(owner: $owner) {
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
      owner
    }
  }
`;
