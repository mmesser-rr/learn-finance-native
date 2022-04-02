const { print } = require('graphql');
const gql = require('graphql-tag');

const updateAthleteWyreStatement = gql`
  mutation updateAthleteWyreAccount($athleteId: ID!, $wyreAccountId: String!) {
    updateAthlete(input: {wyreAccountId: $wyreAccountId, id: $athleteId}) {
      createdAt
      id
      isActive
      wyreAccountId
    }
  } 
`

const updateWyreAccoundId = () => (
  axios,
  athleteId,
  wyreAccountId
) => axios.post("/", {
  query: print(updateAthleteWyreStatement),
  variables: {
    athleteId,
    wyreAccountId
  },
  authMode: 'AMAZON_COGNITO_USER_POOLS'
}).then(resultLens);

const resultLens = (res) => res?.data?.errors ? Promise.reject(res.data.errors) : Promise.resolve(res.data.data);

module.exports = {
  updateWyreAccoundId
}
