const unit = require("../wrappers/unit");
const tpc = require("../wrappers/tpc");

const createDebitRequest = (athleteId, amount, unitAccountId, description, receiverName, receiverRoutingNumber, receiverAccountNumber, receiverAccountType) => {
  const accounts = athlete?.accounts;

  if (accounts.length !== 0 && accounts.unitAccountId.includes(unitAccountId)) {
       throw new Error("Looks like this athlete is using invalid banking");
  }

  return unit.debitAccount(amount, unitAccountId, description,receiverName, receiverRoutingNumber, receiverAccountNumber, receiverAccountType)
    .catch(err => (err?.appId)
    )
}

const debitAccount = (athleteId, amount, unitAccountId, description, receiverName, receiverRoutingNumber, receiverAccountNumber, receiverAccountType) => tpc.getAthlete(athleteId).then(athlete => 
  (athlete != null) ? 
    createDebitRequest(athleteId, amount, unitAccountId, description, receiverName, receiverRoutingNumber, receiverAccountNumber, receiverAccountType) : 
    Promise.reject(`No athlete found with id ${athleteId}`)
);

module.exports.debitAccount = async (event) => {
  const {athleteId, amount, unitAccountId, description, receiverName, receiverRoutingNumber, receiverAccountNumber, receiverAccountType} = event.arguments;
   return debitAccount(athleteId, amount, unitAccountId, description, receiverName, receiverRoutingNumber, receiverAccountNumber, receiverAccountType)
}