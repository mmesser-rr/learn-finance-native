//Internal transactions between wyre account const IP = "127.0.0.1";
const COUNTRY_CODE = "US";
const APPLICATION_TYPE = "achPayment";
const TYPE = "depositAccount";
const DIRECTION = "Debit";


const parseApplicationParams = (wyreAccountId, plaidProcessorToken, description, amount, idempotencyKey) => ({
  type: APPLICATION_TYPE,
  source: "paymentmethod:PA-W7YN28ABCHT:ach",
  dest: {
    country: "US",
    plaidProcessorToken: plaidProcessorToken
  },
  sourceCurrency:"USD",
  destCurrency:"USD",
  sourceAmount: amount,
  autoConfirm:true,
  message: description,
  customId: idempotencyKey
});

const debitAccount = (wyre) => (wyreAccountId, plaidProcessorToken, description, amount, idempotencyKey, token) => {
  wyre.payments.headers.Authorization = `Bearer ${token}`
  const wyreParams = parseApplicationParams(wyreAccountId, plaidProcessorToken, description, amount, idempotencyKey);
  return wyre.payments.create(wyreParams).then(resultLens)
    .catch(err => Promise.reject(`Failed to submit payment to wyre API. Error: ${err}`));
}

const resultLens = (res) => ({
  transactionId: res.data.id,
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
  debitAccount
}