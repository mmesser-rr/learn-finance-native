const unit = require("../wrappers/unit");
const tpc = require("../wrappers/tpc");

const createBookRequest = (athleteId, unitAccountId, amount, description, receiverAccountType, receiverUnitAccountId, idempotencyKey) => unit.getAthleteUnitAccountById(unitAccountId).then(res => (res.attributes.available < amount) ? 
  unit.bookPayment(unitAccountId, amount, description, receiverAccountType, receiverUnitAccountId, idempotencyKey) : 
  Promise.reject(`Athlet doesn't have enough balance for this transaction ${athleteId}`)
  );

const bookPayment = (athleteId, unitAccountId, amount, description, receiverAccountType, receiverUnitAccountId, idempotencyKey) => tpc.getAthlete(athleteId).then(athlete => 
  (athlete != null) ? 
     createBookRequest(athlete, unitAccountId, amount, description, receiverAccountType, receiverUnitAccountId, idempotencyKey) : 
    Promise.reject(`No athlete found with id ${athleteId}`)
);

module.exports.bookPayment = async (event) => {
  const {athleteId, unitAccountId, amount, description, receiverAccountType, receiverUnitAccountId, idempotencyKey} = event.arguments;
   return bookPayment(athleteId, unitAccountId, amount, description, receiverAccountType, receiverUnitAccountId, idempotencyKey)
}
