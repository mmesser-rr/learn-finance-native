const { print } = require('graphql');
const gql = require('graphql-tag');
const { Reader } = require("monet");

const persistAccountStatement = gql`
  mutation createAthleteAccount($athleteId: String!, $routingCode: String!, $accountNumber: String!) {
    createAthleteAccount(
      input: {routingCode: $athleteId, accountNumber: $accountNumber, athleteAccountsId: $athleteId}
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

const persistAccount = (
  {
    athleteId,
    routingCode,
    accountNumber
  }
) => Reader(axios => axios.post({
  data: {
    query: persistAccountStatement,
    variables: {
      athleteId,
      routingCode,
      accountNumber
    }
  }
}));

module.exports = {
  persistAccount
}
