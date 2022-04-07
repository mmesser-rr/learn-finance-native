const { print } = require('graphql');
const gql = require('graphql-tag');

const updateAthletePlaidStatement = gql`
  mutation updateAthletePlaidLookup($athleteId: ID!, $plaidToken: String!) {
    updateAthlete(input: {plaidToken: $plaidToken, id: $athleteId}) {
      createdAt
      id
      isActive
      lastName
    }
  } 
`

const addPlaidToken = () => (
  axios,
  athleteId,
  plaidToken
) => axios.post("/", {
  query: print(updateAthletePlaidStatement),
  variables: {
    athleteId,
    plaidToken
  },
  authMode: 'AMAZON_COGNITO_USER_POOLS'
}).then(resultLens);

const resultLens = (res) => res?.data?.errors ? Promise.reject(res.data.errors) : Promise.resolve(res.data.data);

module.exports = {
  addPlaidToken
}