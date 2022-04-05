const { print } = require('graphql');
const gql = require('graphql-tag');

const updateAthleteStatement = gql`
  mutation updateAthleteAccount($athleteId: ID!, $wyrePlaidProcessorToken: ProcessorTokenInput!) {
    updateAthlete(input: {wyrePlaidProcessorToken: $wyrePlaidProcessorToken, id: $athleteId}) {
      email
      firstName
      createdAt
      id
      isActive
      lastName
      level
      mobilePhone
      wyrePlaidProcessorToken{
        processorToken
      }
    }
  } 
`

const updateAthlete = (axios) => (
  athleteId,
  wyrePlaidProcessorToken
) => axios.post("/", {
  query: print(updateAthleteStatement),
  variables: {
    athleteId,
    wyrePlaidProcessorToken
  }
}).then(resultLens);

const resultLens = (res) => res?.data?.errors ? Promise.reject(res.data.errors) : Promise.resolve(res.data.data.updateAthlete.wyrePlaidProcessorToken.processorToken);

module.exports = {
  updateAthlete
}
