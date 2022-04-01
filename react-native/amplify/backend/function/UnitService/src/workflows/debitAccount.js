const unit = require("../wrappers/unit");
const tpc = require("../wrappers/tpc");
const {R,propEq, find} = require("ramda");
const {axios} = require("../env");


const createDebitRequest = (athlete, unitAccountId, amount, addenda, description, receiverName, receiverRoutingNumber, receiverAccountNumber, receiverAccountType, idempotencyKey) => unit.getAthleteUnitAccountById(unitAccountId).then(res => (res.attributes.available > amount) ? 
  unit.debitAccount(unitAccountId, amount, addenda, description, receiverName, receiverRoutingNumber, receiverAccountNumber, receiverAccountType,idempotencyKey, athlete.unitToken)
  .then(res => tpc.persistTransaction(axios,res.transactionId, athlete.id, res.amount, res.status, res.createdAt, false, res.direction, athlete.podSettings, idempotencyKey)):
  Promise.reject(`Athlet doesn't have enough balance for this transaction ${athlete.id}`)
  );

// const debitAccount = (athleteId, amount, addenda, description, receiverName, receiverRoutingNumber, receiverAccountNumber, receiverAccountType,idempotencyKey) => tpc.getAthlete(athleteId).then(athlete => 
//   (athlete != null && athlete?.unitLookup?.custId && athlete?.accounts) ? 
//     createDebitRequest(athlete, find(propEq('podName', 'SPENDING'))(athlete?.accounts.items).unitAccountId, amount, addenda, description, receiverName, receiverRoutingNumber, receiverAccountNumber, receiverAccountType,idempotencyKey) : 
//     Promise.reject(`No athlete found with id ${athleteId}`)
// );

module.exports.debitAccount = async (event) => {
  axios.defaults.headers["Authorization"] = event.request.headers.authorization; 
const {athleteId, amount, addenda, description, receiverName, receiverRoutingNumber, receiverAccountNumber, receiverAccountType, idempotencyKey } = event.arguments;
return tpc.getAthlete(axios, athleteId).then(res => createDebitRequest(res, find(propEq('podName', 'SPENDING'))(res?.accounts?.items).unitAccountId, amount, addenda, description, receiverName, receiverRoutingNumber, receiverAccountNumber, receiverAccountType, idempotencyKey));
}