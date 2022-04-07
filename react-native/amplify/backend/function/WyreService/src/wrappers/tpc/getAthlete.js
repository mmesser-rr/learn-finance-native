const { print } = require('graphql');
const gql = require('graphql-tag');

const getAthleteStatement = gql`
  query getAthlete($athleteId: ID!) {
    getAthlete(id: $athleteId) {
      id
      lastName
      firstName
      email
      mobilePhone
      dateOfBirth
      wyreAccountId
      plaidToken
      podSettings{
        SAVINGS
        INVESTMENTS
        SPENDING
      }
      wyrePlaidProcessorToken{
        processorToken
        plaidAccountId
      }
      address {
        apt
        city
        state
        streetAddress
        zipCode
      }
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

const responseLens = (res) => res?.data?.errors ? Promise.reject(res.data.errors) : Promise.resolve(res.data.data.getAthlete);

const getAthlete = () => (
  axios,
  athleteId
) => axios.post("/", {
  query: print(getAthleteStatement),
  variables: {
    athleteId
  },
  authMode: 'AMAZON_COGNITO_USER_POOLS'
}).then(responseLens);

module.exports = {
  getAthlete
}
