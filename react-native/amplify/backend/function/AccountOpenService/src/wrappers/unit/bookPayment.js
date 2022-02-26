//Internal transactions between unit accounts
const { Unit } = require("@unit-finance/unit-node-sdk");

const IP = "127.0.0.1";
const COUNTRY_CODE = "US";
const APPLICATION_TYPE = "bookPayment";
const DIRECTION = "Credit";
const TYPE = "depositAccount";

//TODO ADD ACCOUNT-ID
const parseApplicationParams = () => (
  amount,
  description,
  counterpartyAccountId
) => ({
  type: APPLICATION_TYPE,
  attributes: {
    amount: amount,
    direction: DIRECTION,
    description: description,
    relationships:{
        account:{
            data:{
              type: TYPE,
              id: 13224
            }
        }
    },
    counterpartyAccount:{
        data:{
          type: TYPE,
          id:counterpartyAccountId 
        }
    }
  }
});

const bookPayment = (unit) => (athlete) => {
  const unitParams = parseApplicationParams(unit)(athlete);
  return unit.payments.create(unitParams)
    .then(resultLens)
    .catch(err => Promise.reject(`Failed to submit payment to Unit API. Error: ${err.message}`));
}

const resultLens = (res) => ({
  transactionId: res.id,
  status: res.attributes.status,
  createdAt: res.attributes.createdAt,
  counterparty: res.attributes.counterparty
});

module.exports = {
  resultLens,
  bookPayment
}