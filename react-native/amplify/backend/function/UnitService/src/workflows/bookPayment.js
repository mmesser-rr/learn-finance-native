const unit = require("../wrappers/unit");
const tpc = require("../wrappers/tpc");
const {axios} = require("../env");

const createBookRequest = (athlete, unitAccountId, amount, description, receiverAccountType, receiverUnitAccountId, idempotencyKey) => unit.getAthleteUnitAccountById(unitAccountId).then(res => (res.attributes.available >= amount) ? 
  unit.bookPayment(unitAccountId, amount, description, receiverAccountType, receiverUnitAccountId, idempotencyKey, athlete.unitToken) 
  .then(res => tpc.persistTransaction(axios, res.transactionId, athlete.id, res.amount, res.status, res.createdAt, false, res.direction, res.transactionType, athlete.podSettings, idempotencyKey)):  
  Promise.reject(`Athlet doesn't have enough balance for this transaction ${athlete.id}`)
  );

// const bookPayment = (athleteId, unitAccountId, amount, description, receiverAccountType, receiverUnitAccountId, idempotencyKey) => tpc.getAthlete(athleteId).then(athlete => 
//   (athlete != null) ? 
//      createBookRequest(athlete, unitAccountId, amount, description, receiverAccountType, receiverUnitAccountId, idempotencyKey) : 
//     Promise.reject(`No athlete found with id ${athleteId}`)
// );

module.exports.bookPayment = async (event) => {
  axios.defaults.headers["Authorization"] = event.request.headers.authorization; 
   const {athleteId, unitAccountId, amount, description, receiverAccountType, receiverUnitAccountId, idempotencyKey} = event.arguments;
   return tpc.getAthlete(axios, athleteId).then(res => createBookRequest(res, unitAccountId, amount, description, receiverAccountType, receiverUnitAccountId, idempotencyKey));
}