const unit = require("../wrappers/unit");
const tpc = require("../wrappers/tpc");

const createCreditRequest = (athlete, unitAccountId, amount, addenda, description, receiverName, receiverRoutingNumber, receiverAccountNumber, receiverAccountType) => unit.getAthleteUnitAccountById(unitAccountId).then(res => (res.attributes.available < amount) ? 
  unit.creditAccount(unitAccountId, amount, addenda, description, receiverName, receiverRoutingNumber, receiverAccountNumber, receiverAccountType)
  .then(res => tpc.persistTransaction(res.transactionId, athlete.id, res.amount, res.status, res.createdAt, false, res.direction, athlete.podSettings)): 
  Promise.reject(`Athlet doesn't have enough balance for this transaction ${athlete.id}`)
  );

const creditAccount = (athleteId, unitAccountId, amount, addenda, description, receiverName, receiverRoutingNumber, receiverAccountNumber, receiverAccountType) => tpc.getAthlete(athleteId).then(athlete => 
  (athlete != null) ? 
    createCreditRequest(athlete, unitAccountId, amount, addenda, description, receiverName, receiverRoutingNumber, receiverAccountNumber, receiverAccountType) : 
    Promise.reject(`No athlete found with id ${athleteId}`)
);

module.exports.creditAccount = async (event) => {
  const {athleteId, unitAccountId, amount, addenda, description, receiverName, receiverRoutingNumber, receiverAccountNumber, receiverAccountType } = event.arguments;
   return creditAccount(athleteId, unitAccountId, amount, addenda, description, receiverName, receiverRoutingNumber, receiverAccountNumber, receiverAccountType)
}