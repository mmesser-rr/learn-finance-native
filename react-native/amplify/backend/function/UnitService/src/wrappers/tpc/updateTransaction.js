const { print } = require('graphql');
const gql = require('graphql-tag');

const updateTransacttatement = gql`
  mutation updateRecentTransaction($transactionId: ID!, $status: String!, $read: Boolean, $podAllocation: PodSettingsInput) {
    updateRecentTransaction(input: {id: $transactionId, status: $status, read: $read, podAllocation: $podAllocation }) {
      createdAt
      amount
      status
      direction
      podAllocation{
        SAVINGS
        INVESTMENTS
        SPENDING
      }
      id
    }
  } 
`

const updateTransaction = (axios) => (
 transactionId, 
 status, 
 read
) => axios.post("/", {
  query: print(updateTransacttatement),
  variables: {
    transactionId, 
    status, 
    read
  }
}).then(resultLens);

const resultLens = (res) => res?.data?.errors ? Promise.reject(JSON.stringify(res.data)) : Promise.resolve(res.data.data.updateRecentTransaction);

module.exports = {
    updateTransaction
}
