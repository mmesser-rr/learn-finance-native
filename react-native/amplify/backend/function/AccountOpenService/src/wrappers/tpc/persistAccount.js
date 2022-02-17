const { print } = require('graphql');
const gql = require('graphql-tag');

const persistAccountStatement = gql`
  mutation createAthleteAccount($athleteId: ID!, $routingCode: String!, $accountNumber: String!) {
    createAthleteAccount(
      input: {routingCode: $routingCode, accountNumber: $accountNumber, athleteAccountsId: $athleteId}
    ) {
      accountNumber,
      athleteAccountsId,
      id,
      createdAt,
      updatedAt,
      routingCode
    }
  } 
`

const persistAccount = (axios) => (
  {
    athleteId,
    routingCode,
    accountNumber
  }
) => axios.post("/", {
  query: print(persistAccountStatement),
  variables: {
    athleteId: athleteId,
    routingCode: routingCode,
    accountNumber: accountNumber
  }
}).then(resultLens);

const resultLens = (res) => res?.data?.errors ? Promise.reject(res.data.errors) : Promise.resolve(res.data.data.createAthleteAccount);

module.exports = {
  persistAccount
}
