const unit = require("../wrappers/unit");
const tpc = require("../wrappers/tpc");
const {R,propEq, find} = require("ramda");

const createDebitRequest = (athlete, unitAccountId, amount, addenda, description, receiverName, receiverRoutingNumber, receiverAccountNumber, receiverAccountType, idempotencyKey) => unit.getAthleteUnitAccountById(unitAccountId).then(res => (res.attributes.available > amount) ? 
  unit.debitAccount(unitAccountId, amount, addenda, description, receiverName, receiverRoutingNumber, receiverAccountNumber, receiverAccountType,idempotencyKey, athlete.unitToken)
  .then(res => tpc.persistTransaction(res.transactionId, athlete.id, res.amount, res.status, res.createdAt, false, res.direction, athlete.podSettings, idempotencyKey)):
  Promise.reject(`Athlet doesn't have enough balance for this transaction ${athlete.id}`)
  );

const debitAccount = (athleteId, amount, addenda, description, receiverName, receiverRoutingNumber, receiverAccountNumber, receiverAccountType,idempotencyKey) => tpc.getAthlete(athleteId).then(athlete => 
  (athlete != null && athlete?.unitLookup?.custId && athlete?.accounts) ? 
    createDebitRequest(athlete, find(propEq('podName', 'SPENDING'))(athlete?.accounts.items).unitAccountId, amount, addenda, description, receiverName, receiverRoutingNumber, receiverAccountNumber, receiverAccountType,idempotencyKey) : 
    Promise.reject(`No athlete found with id ${athleteId}`)
);

module.exports.debitAccount = async (event) => {
  const {athleteId, amount, addenda, description, receiverName, receiverRoutingNumber, receiverAccountNumber, receiverAccountType, idempotencyKey} = event.arguments;
   return debitAccount(athleteId, amount, addenda, description, receiverName, receiverRoutingNumber, receiverAccountNumber, receiverAccountType, idempotencyKey)
}

