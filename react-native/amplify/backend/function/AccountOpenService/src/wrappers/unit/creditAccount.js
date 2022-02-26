const { Unit } = require("@unit-finance/unit-node-sdk");

const IP = "127.0.0.1";
const COUNTRY_CODE = "US";
const APPLICATION_TYPE = "achPayment";
const DIRECTION = "Credit";
const TYPE = "depositAccount";

//TODO ADD ACCOUNT-ID
const parseApplicationParams = () => (
  amount,
  description,
  addenda,
  name,
  routingNumber,
  accountNumber,
  accountType
) => ({
  type: APPLICATION_TYPE,
  attributes: {
    amount: amount,
    direction: DIRECTION,
    description: description,
    addenda: addenda,
    counterparty:{
      name: name,
      routingNumber: routingNumber,
      accountNumber: accountNumber,
      accountType: accountType
    }
  },
  relationships:{
    account:{
      data:{
        type: TYPE,
        id
      }
    }
  }
});

const creditAccount = (unit) => (athlete) => {
  const unitParams = parseApplicationParams(unit)(athlete);
  return unit.payments.create(unitParams)
    .then(resultLens)
    .catch(err => Promise.reject(`Failed to submit application to Unit API. Error: ${err.message}`));
}

const resultLens = (res) => ({
  transactionId: res.id,
  status: res.attributes.status,
  createdAt: res.attributes.createdAt,
  counterparty: res.attributes.counterparty
});

module.exports = {
  resultLens,
  creditAccount
}
