const unit = require("../wrappers/unit");
const tpc = require("../wrappers/tpc");
const {R,propEq, find} = require("ramda");
const { validateUser } = require("./validateUser");

const createCreditRequest = (event, athlete, unitAccountId, amount, addenda, description, receiverName, receiverRoutingNumber, receiverAccountNumber, receiverAccountType,idempotencyKey) => unit.getAthleteUnitAccountById(unitAccountId).then(res => (res.attributes.available >= amount) ? 
  unit.creditAccount(unitAccountId, amount, addenda, description, receiverName, receiverRoutingNumber, receiverAccountNumber, receiverAccountType, idempotencyKey, athlete.unitToken)
  .then(res => tpc.persistTransaction(event, res.transactionId, athlete.id, res.amount, res.status, res.createdAt, false, res.direction, athlete.podSettings, idempotencyKey)): 
  Promise.reject(`Athlet doesn't have enough balance for this transaction ${athlete.id}`)
  );

const creditAccount = (event, athleteId, amount, addenda, description, receiverName, receiverRoutingNumber, receiverAccountNumber, receiverAccountType, idempotencyKey) => tpc.getAthlete(validateUser(event),athleteId).then(athlete => 
  (athlete != null && athlete?.unitLookup?.custId && athlete?.accounts) ? 
    createCreditRequest(event, athlete, find(propEq('podName', 'SPENDING'))(athlete?.accounts.items).unitAccountId, amount, addenda, description, receiverName, receiverRoutingNumber, receiverAccountNumber, receiverAccountType, idempotencyKey) : 
    Promise.reject(`No athlete found with id ${athleteId} or athlete doesn't have unit account`)
);

module.exports.creditAccount = async (event) => {
  const {athleteId, amount, addenda, description, receiverName, receiverRoutingNumber, receiverAccountNumber, receiverAccountType, idempotencyKey } = event.arguments;
   return creditAccount(event, athleteId, amount, addenda, description, receiverName, receiverRoutingNumber, receiverAccountNumber, receiverAccountType, idempotencyKey)
}
//, 'SPENDING'