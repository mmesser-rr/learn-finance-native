export const listLearns_custom = /* GraphQL */ `
  query ListLearns_custom(
    $filter: ModelLearnFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLearns(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        creatorId
        creator {
          firstName
          lastName
          mobilePhone
          athleteTag
          bio
          profilePhotoUri
          heroPhotoUri
          email
          level
          dateOfBirth
          plaidToken
          wyreId
          isActive
          handle
          id
          createdAt
          updatedAt
        }
        bgImageUri
        sponsor
        title
        level
        reward
        deposits {
          videoUri
          title
          questions {
            questionText
            correctAnswer
            answers
          }
        }
        id
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;

export const getAthlete_custom = /* GraphQL */ `
  query GetAthlete_custom($id: ID!) {
    getAthlete(id: $id) {
      firstName
      lastName
      mobilePhone
      athleteTag
      bio
      profilePhotoUri
      heroPhotoUri
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
        plaidAccountId
        processorToken
      }
      wyreId
      isActive
      handle
      id
      createdAt
      updatedAt
    }
  }
`;