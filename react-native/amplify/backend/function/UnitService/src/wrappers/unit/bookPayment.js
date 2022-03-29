//Internal transactions between unit accounts
const { Unit } = require("@unit-finance/unit-node-sdk");

const IP = "127.0.0.1";
const COUNTRY_CODE = "US";
const APPLICATION_TYPE = "bookPayment";
const DIRECTION = "Credit";
const TYPE = "depositAccount";

const parseApplicationParams = (unitAccountId, amount, description, receiverAccountType, receiverUnitAccountId, idempotencyKey) => ({
  type: APPLICATION_TYPE,
  attributes: {
    amount: amount,
    direction: DIRECTION,
    description: description,
    idempotencyKey: idempotencyKey
  },
  relationships:{
      account:{
          data:{
            type: TYPE,
            id: unitAccountId
          }
        },
      counterpartyAccount:{
          data:{
            type: receiverAccountType,
            id: receiverUnitAccountId
          }
      }
   }
});


const bookPayment = (unit) => (unitAccountId, amount, description, receiverAccountType, receiverUnitAccountId, idempotencyKey, token) => {
  unit.payments.headers.Authorization = `Bearer ${token}`
  const unitParams = parseApplicationParams(unitAccountId, amount, description, receiverAccountType, receiverUnitAccountId, idempotencyKey);
  return unit.payments.create(unitParams)//.then(res => console.log(">>>>>>>>>>>", JSON.stringify(res)))
    .then(resultLens)
    .catch(err => Promise.reject(`Failed to submit payment to Unit API. Error: ${err.message}`));
}

const resultLens = (res) => ({
  transactionId: res.data.relationships.transaction.data.id,
  amount: res.data.attributes.amount,
  status: res.data.attributes.status,
  createdAt: res.data.attributes.createdAt,
  reason: res.data.attributes.reason,
  idempotencyKey: res.data.idempotencyKey,
  account: res.data.relationships.account.data.id,
  counterparty: res.data.relationships.counterpartyAccount
});


module.exports = {
  resultLens,
  bookPayment
}