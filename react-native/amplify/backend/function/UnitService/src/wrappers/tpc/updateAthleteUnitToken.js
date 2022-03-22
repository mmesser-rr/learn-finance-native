const { print } = require('graphql');
const gql = require('graphql-tag');

const updateAthleteAccount = gql`
  mutation updateAthleteAccount($athleteId: ID!, $plaidProcessorToken: AthleteAccountInput!) {
    updateAthleteAccount(input: {plaidProcessorToken: $plaidProcessorToken, id: $athleteId}) {
      id
      isActive
      lastName
      level
      mobilePhone
    }
  } 
`

const updateAthleteUnitAccount = (axios) => (
  athleteId,
  plaidProcessorToken
) => axios.post("/", {
  query: print(updateAthleteAccount),
  variables: {
    athleteId,
    plaidProcessorToken
  }
}).then(resultLens);

const resultLens = (res) => res?.data?.errors ? Promise.reject(res.data.errors) : Promise.resolve(res.data.data.updateAthleteAccount);

module.exports = {
    updateAthleteUnitAccount
}
