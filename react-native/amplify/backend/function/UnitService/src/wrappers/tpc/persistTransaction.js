const { print } = require('graphql');
const gql = require('graphql-tag');

const updateTransactionStatement = gql`
  mutation persistRecentTransaction($transactionId: ID!, $athleteId: String!, $amount: Float, $status: String!, $createdAt: String, $read: Boolean, $direction: String, $transactionType: String!, $podAllocation: PodSettingsInput, $idempotencyKey: String) {
    createRecentTransaction(input: {amount: $amount, transactionId: $transactionId, athleteId: $athleteId, status: $status, createdAt: $createdAt, read: $read, direction: $direction, transactionType: $transactionType, podAllocation: $podAllocation, idempotencyKey: $idempotencyKey }) {
      transactionId
      createdAt
      athleteId
      amount
      status
      direction
      transactionType
      idempotencyKey
      podAllocation{
        SAVINGS
        INVESTMENTS
        SPENDING
      }
    }
  } 
`

const persistTransaction = () => (
  axios,
 transactionId,
 athleteId, 
 amount, 
 status, 
 createdAt,
 read, 
 direction,
 transactionType,
 podAllocation,
 idempotencyKey
) => axios.post("/", {
  query: print(updateTransactionStatement),
  variables: {
    transactionId, 
    athleteId,
    amount, 
    status, 
    createdAt,
    read, 
    direction,
    transactionType,
    podAllocation,
    idempotencyKey
  },
  authMode: 'AMAZON_COGNITO_USER_POOLS'
}).then(resultLens);

const resultLens = (res) => res?.data?.errors ? Promise.reject(JSON.stringify(res.data)) : Promise.resolve(res.data.data.createRecentTransaction);

module.exports = {
    persistTransaction
}
//{ amount: res.data.data.createRecentTransaction.amount,
// transactionId: res.data.data.createRecentTransaction.transactionId, status:res.data.data.createRecentTransaction.status, direction: res.data.data.createRecentTransaction.direction, podAllocation:res.data.data.createRecentTransaction.podAllocation, athleteId: res.data.data.createRecentTransaction.athleteId, transactionType: res.data.data.createRecentTransaction.transactionType,
// idempotencyKey: res.data.data.createRecentTransaction.idempotencyKey
// }