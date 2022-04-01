const unit = require("../wrappers/unit");
const tpc = require("../wrappers/tpc");
const { validateUser } = require("./validateUser");
const {axios} = require("../env");

const createBookRequest = (athlete, unitAccountId, amount, description, receiverAccountType, receiverUnitAccountId, idempotencyKey) => unit.getAthleteUnitAccountById(unitAccountId).then(res => (res.attributes.available >= amount) ? 
  unit.bookPayment(unitAccountId, amount, description, receiverAccountType, receiverUnitAccountId, idempotencyKey, athlete.unitToken) : 
  Promise.reject(`Athlet doesn't have enough balance for this transaction ${athlete.id}`)
  );

// const bookPayment = (athleteId, unitAccountId, amount, description, receiverAccountType, receiverUnitAccountId, idempotencyKey) => tpc.getAthlete(athleteId).then(athlete => 
//   (athlete != null) ? 
//      createBookRequest(athlete, unitAccountId, amount, description, receiverAccountType, receiverUnitAccountId, idempotencyKey) : 
//     Promise.reject(`No athlete found with id ${athleteId}`)
// );

module.exports.bookPayment = async (event) => {
   const authCheck = validateUser(event);
   axios.defaults.headers["Authorization"] = authCheck; 
   const {athleteId, unitAccountId, amount, description, receiverAccountType, receiverUnitAccountId, idempotencyKey} = event.arguments;
   return tpc.getAthlete(validateUser(event), athleteId).then(res => createBookRequest(res, unitAccountId, amount, description, receiverAccountType, receiverUnitAccountId, idempotencyKey));
}