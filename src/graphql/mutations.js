/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
