const { print } = require('graphql');
const gql = require('graphql-tag');

const updateAthleteUnitStatement = gql`
  mutation updateAthleteUnitToken($athleteId: ID!, $unitToken: String!) {
    updateAthlete(input: {unitToken: $unitToken, id: $athleteId}) {
      createdAt
      id
      isActive
      unitToken
    }
  } 
`

const updateAthleteUnitToken = (axios) => (
  athleteId,
  unitToken
) => axios.post("/", {
  query: print(updateAthleteUnitStatement),
  variables: {
    athleteId,
    unitToken
  }
}).then(resultLens);

const resultLens = (res) => res?.data?.errors ? Promise.reject(res.data.errors) : Promise.resolve(res.data.data);

module.exports = {
    updateAthleteUnitToken
}
