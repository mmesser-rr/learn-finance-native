export const createPlaidPaymentCustom = /* GraphQL */ `
  mutation CreatePlaidPaymentCustom(
    $athleteId: ID!
    $plaidAccountId: String!
    $amount: Float!
    $description: String!
    $idempotencyKey: String!
    $unitToken: String!
  ) {
    createPlaidPayment(
      athleteId: $athleteId
      plaidAccountId: $plaidAccountId
      amount: $amount
      description: $description
      idempotencyKey: $idempotencyKey
      unitToken: $unitToken
    ) {
      status
    }
  }
`;

export const createWyreAccountCustom = /* GraphQL */ `
  mutation CreateWyreAccountCustom($athleteId: ID!) {
    createWyreAccount(athleteId: $athleteId) {
      wyreAccountId
    }
  }
`;
