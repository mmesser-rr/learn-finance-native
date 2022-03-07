const { print } = require('graphql');
const gql = require('graphql-tag');

const updateAthletePlaidLookupStatement = gql`
  mutation updateAthletePlaidLookup($athleteId: ID!, $plaidToken: AthletePlaidLookupInput!) {
    updateAthlete(input: {plaidToken: $plaidToken, id: $athleteId}) {
      createdAt
      id
      isActive
      lastName
      level
      mobilePhone 
    }
  } 
`

const addPlaidToken = (axios) => (
  athleteId,
  plaidToken
) => axios.post("/", {
  query: print(updateAthletePlaidLookupStatement),
  variables: {
    athleteId,
    plaidToken
  }
}).then(resultLens);

const resultLens = (res) => res?.data?.errors ? Promise.reject(res.data.errors) : Promise.resolve(res.data.data.updateAthletePlaidLookup);

module.exports = {
  addPlaidToken
}
