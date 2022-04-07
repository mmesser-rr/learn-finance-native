const unit = require("../wrappers/unit");
const tpc = require("../wrappers/tpc");
const {axios} = require("../env");

const createBookRequest = (athlete, unitAccountId, amount, description, receiverAccountType, receiverUnitAccountId, idempotencyKey, unitToken) => unit.getAthleteUnitAccountById(unitAccountId).then(res => (res.attributes.available >= amount) ? 
  unit.bookPayment(unitAccountId, amount, description, receiverAccountType, receiverUnitAccountId, idempotencyKey, unitToken) 
  .then(res => tpc.persistTransaction(axios, res.transactionId, athlete.id, res.amount, res.status, res.createdAt, false, res.direction, res.transactionType, athlete.podSettings, idempotencyKey)):  
  Promise.reject(`Athlet doesn't have enough balance for this transaction ${athlete.id}`)
  );

module.exports.bookPayment = async (event) => {
  axios.defaults.headers["Authorization"] = event.request.headers.authorization; 
   const {athleteId, unitAccountId, amount, description, receiverAccountType, receiverUnitAccountId, idempotencyKey, unitToken} = event.arguments;
   return tpc.getAthlete(axios, athleteId).then(res => createBookRequest(res, unitAccountId, amount, description, receiverAccountType, receiverUnitAccountId, idempotencyKey, unitToken));
}