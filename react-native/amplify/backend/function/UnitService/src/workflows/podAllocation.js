const unit = require("../wrappers/unit");
const tpc = require("../wrappers/tpc");
const {axios, getEnv} = require("../env");



//AmountRecieved, getBalance, 
const createBookingRequest = (athlete, amount, transactionId) => unit.getAthleteUnitAccountById(unitAccountId).then(res => (res.attributes.available >= amount) ? 
  unit.creditAccount(unitAccountId, amount, addenda, description, receiverName, receiverRoutingNumber, receiverAccountNumber, receiverAccountType, idempotencyKey, athlete.unitToken)
  .then(res => tpc.persistTransaction(axios, res.transactionId, athlete.id, res.amount, res.status, res.createdAt, false, res.direction, athlete.podSettings, idempotencyKey)): 
  Promise.reject(`Athlet doesn't have enough balance for this transaction ${athlete.id}`)
  );

module.exports.podAllocation = async (event) => {
  axios.defaults.headers["x-api-key"] =  getEnv("API_THEPLAYERSCOMPANY_GRAPHQLAPIKEYOUTPUT")
  const {athleteId, amount, addenda, description, receiverName, receiverRoutingNumber, receiverAccountNumber, receiverAccountType, idempotencyKey } = event.arguments;
  return tpc.getAthlete(axios, athleteId).then(res => createBookingRequest(res, find(propEq('podName', 'SPENDING'))(res?.accounts?.items).unitAccountId, amount, addenda, description, receiverName, receiverRoutingNumber, receiverAccountNumber, receiverAccountType, idempotencyKey));
}

//unit.bookPayment(unitAccountId, amount, description, receiverAccountType, receiverUnitAccountId, idempotencyKey, athlete.unitToken) 