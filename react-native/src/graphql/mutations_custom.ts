export const createWyreAccount = /* GraphQL */ `
  mutation CreateWyreAccount($athleteId: ID!) {
    createWyreAccount(athleteId: $athleteId) {
      wyreAccountId
    }
  }
`;
