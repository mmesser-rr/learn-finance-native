const { print } = require('graphql');
const gql = require('graphql-tag');

const updateAthleteStatement = gql`
  mutation updateAthleteAccount($athleteId: ID!, $unitPlaidProcessorToken: ProcessorTokenInput!) {
    updateAthlete(input: {unitPlaidProcessorToken: $unitPlaidProcessorToken, id: $athleteId}) {
      email
      firstName
      createdAt
      id
      isActive
      lastName
      level
      mobilePhone
      unitPlaidProcessorToken{
        processorToken
      }
    }
  } 
`

const updateAthlete = () => (
  axios,
  athleteId,
  unitPlaidProcessorToken
) => axios.post("/", {
  query: print(updateAthleteStatement),
  variables: {
    athleteId,
    unitPlaidProcessorToken
  },
  authMode: 'AMAZON_COGNITO_USER_POOLS'
}).then(resultLens);

const resultLens = (res) => res?.data?.errors ? Promise.reject(res.data.errors) : Promise.resolve(res.data.data.updateAthlete.unitPlaidProcessorToken.processorToken);

module.exports = {
  updateAthlete
}
