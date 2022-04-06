//Internal transactions between unit accounts
const { Unit } = require("@unit-finance/unit-node-sdk");

const IP = "127.0.0.1";
const COUNTRY_CODE = "US";
const APPLICATION_TYPE = "achPayment";
const TYPE = "depositAccount";
const DIRECTION = "Credit";


const parseApplicationParams = (unitAccountId, plaidProcessorToken, description, amount, idempotencyKey) => ({
  type: APPLICATION_TYPE,
  attributes: {
    amount: amount,
    direction: DIRECTION,
    description: description,
    idempotencyKey: idempotencyKey,
    plaidProcessorToken: plaidProcessorToken
  },
  relationships:{
      account:{
          data:{
            type: TYPE,
            id: unitAccountId
          }
        }
   }
});


const plaidPayment = (unit) => (unitAccountId, plaidProcessorToken, description, amount, idempotencyKey, token) => {
  unit.payments.headers.Authorization = `Bearer ${token}`
  const unitParams = parseApplicationParams(unitAccountId, plaidProcessorToken, description, amount, idempotencyKey);
  return unit.payments.create(unitParams).then(res => res.data)
    .catch(err => Promise.reject(`Failed to submit payment to Unit API. Error: ${err}`));
}

const resultLens = (res) => ({
  transactionId: res.data.relationships.transaction.data.id,
  transactionType: res.data.type,
  amount: res.data.attributes.amount,
  direction: res.data.attributes.direction,
  status: res.data.attributes.status,
  createdAt: res.data.attributes.createdAt,
  reason: res.data.attributes.reason,
  account: res.data.relationships.account.data.id,
  counterparty: res.data.attributes.counterparty
});

module.exports = {
  resultLens,
  plaidPayment
}