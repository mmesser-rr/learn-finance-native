export const createWyreAccountCustom = /* GraphQL */ `
  mutation CreateWyreAccountCustom($athleteId: ID!) {
    createWyreAccount(athleteId: $athleteId) {
      wyreAccountId
    }
  }
`;
