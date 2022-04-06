const unit = require("../wrappers/unit");
const tpc = require("../wrappers/tpc");
const {R,propEq, find} = require("ramda");
const {axios} = require("../env");


const createCreditRequest = (athlete, unitAccountId, amount, addenda, description, receiverName, receiverRoutingNumber, receiverAccountNumber, receiverAccountType,idempotencyKey, unitToken) => unit.getAthleteUnitAccountById(unitAccountId).then(res => (res.attributes.available >= amount) ? 
  unit.creditAccount(unitAccountId, amount, addenda, description, receiverName, receiverRoutingNumber, receiverAccountNumber, receiverAccountType, idempotencyKey, unitToken)
  .then(res => tpc.persistTransaction(axios, res.relationships.transaction.data.id, athlete.id, res.attributes.amount, res.attributes.status, res.attributes.createdAt, false, res.attributes.direction, res.type, athlete.podSettings, idempotencyKey)): 
  Promise.reject(`Athlet doesn't have enough balance for this transaction ${athlete.id}`)
  );

module.exports.creditAccount = async (event) => {
  axios.defaults.headers["Authorization"] = event.request.headers.authorization; 
  const {athleteId, amount, addenda, description, receiverName, receiverRoutingNumber, receiverAccountNumber, receiverAccountType, idempotencyKey, unitToken } = event.arguments;
  return tpc.getAthlete(axios, athleteId).then(res => createCreditRequest(res, find(propEq('podName', 'SPENDING'))(res?.accounts?.items).unitAccountId, amount, addenda, description, receiverName, receiverRoutingNumber, receiverAccountNumber, receiverAccountType, idempotencyKey,unitToken ));
}
