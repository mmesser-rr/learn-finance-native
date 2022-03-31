const wyre = require("../wrappers/wyre");
const tpc = require("../wrappers/tpc");
const {R,propEq, find} = require("ramda");

const createCreditRequest = (athlete, wyreAccountId, amount, addenda, description, receiverName, receiverRoutingNumber, receiverAccountNumber, receiverAccountType,idempotencyKey) => wyre.getAthletewyreAccountById(wyreAccountId).then(res => (res.attributes.available >= amount) ? 
wyre.creditAccount(wyreAccountId, amount, addenda, description, receiverName, receiverRoutingNumber, receiverAccountNumber, receiverAccountType, idempotencyKey, athlete.wyreToken)
  .then(res => tpc.persistTransaction(res.transactionId, athlete.id, res.amount, res.status, res.createdAt, false, res.direction, athlete.podSettings, idempotencyKey)): 
  Promise.reject(`Athlet doesn't have enough balance for this transaction ${athlete.id}`)
  );

const creditAccount = (athleteId, amount, addenda, description, receiverName, receiverRoutingNumber, receiverAccountNumber, receiverAccountType, idempotencyKey) => tpc.getAthlete(athleteId).then(athlete => 
  (athlete != null && athlete?.wyreLookup?.custId && athlete?.accounts) ? 
    createCreditRequest(athlete, find(propEq('podName', 'SPENDING'))(athlete?.accounts.items).wyreAccountId, amount, addenda, description, receiverName, receiverRoutingNumber, receiverAccountNumber, receiverAccountType, idempotencyKey) : 
    Promise.reject(`No athlete found with id ${athleteId} or athlete doesn't have wyre account`)
);

module.exports.creditAccount = async (event) => {
  const {athleteId, amount, addenda, description, receiverName, receiverRoutingNumber, receiverAccountNumber, receiverAccountType, idempotencyKey } = event.arguments;
   return creditAccount(athleteId, amount, addenda, description, receiverName, receiverRoutingNumber, receiverAccountNumber, receiverAccountType, idempotencyKey)
}