const { print } = require('graphql');
const gql = require('graphql-tag');

const persistAccountStatement = gql`
  mutation createAthleteAccount($athleteId: ID!, $routingCode: String!, $accountNumber: String!, $unitAccountId: String!) {
    createAthleteAccount(
      input: {routingCode: $routingCode, accountNumber: $accountNumber, athleteAccountsId: $athleteId, unitAccountId: $unitAccountId}
    ) {
      accountNumber,
      athleteAccountsId,
      id,
      createdAt,
      updatedAt,
      routingCode,
      unitAccountId
    }
  } 
`

const persistAccount = (axios) => (
  {
    athleteId,
    routingCode,
    accountNumber,
    unitAccountId
  }
) => axios.post("/", {
  query: print(persistAccountStatement),
  variables: {
    athleteId,
    routingCode,
    accountNumber,
    unitAccountId
  }
}).then(resultLens);

const resultLens = (res) => res?.data?.errors ? Promise.reject(res.data.errors) : Promise.resolve(res.data.data.createAthleteAccount);

module.exports = {
  persistAccount
}
