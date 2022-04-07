const { print } = require('graphql');
const gql = require('graphql-tag');

const getAthleteStatement = gql`
  query listAthletes($athleteId: ID!) {
    listAthletes(id: $athleteId) {
      id
      lastName
      firstName
      email
      accounts {
        items{
          unitAccountId
          routingCode
          accountNumber
          podName
        }
      }
      unitLookup {
        appId
        custId
      }
    }
  }
`

const responseLens = (res) => res?.data?.errors ? Promise.reject(res.data.errors) : Promise.resolve(res.data.data.listAthletes);

const listAthletes = () => (
  axios
) => axios.post("/", {
  query: print(getAthleteStatement),
  variables: {}
}).then(responseLens);

module.exports = {
  listAthletes
}