const unit = require("../wrappers/unit");
const tpc = require("../wrappers/tpc");
const { validateUser } = require("./validateUser");

const createBookRequest = (athlete, unitAccountId, amount, description, receiverAccountType, receiverUnitAccountId, idempotencyKey) => unit.getAthleteUnitAccountById(unitAccountId).then(res => (res.attributes.available >= amount) ? 
  unit.bookPayment(unitAccountId, amount, description, receiverAccountType, receiverUnitAccountId, idempotencyKey, athlete.unitToken) : 
  Promise.reject(`Athlet doesn't have enough balance for this transaction ${athlete.id}`)
  );

const bookPayment = (event, athleteId, unitAccountId, amount, description, receiverAccountType, receiverUnitAccountId, idempotencyKey) => tpc.getAthlete(validateUser(event),athleteId).then(athlete => 
  (athlete != null) ? 
     createBookRequest(athlete, unitAccountId, amount, description, receiverAccountType, receiverUnitAccountId, idempotencyKey) : 
    Promise.reject(`No athlete found with id ${athleteId}`)
);

module.exports.bookPayment = async (event) => {
  const {athleteId, unitAccountId, amount, description, receiverAccountType, receiverUnitAccountId, idempotencyKey} = event.arguments;
   return bookPayment(event, athleteId, unitAccountId, amount, description, receiverAccountType, receiverUnitAccountId, idempotencyKey)
}
