const unit = require("../wrappers/unit");
const tpc = require("../wrappers/tpc");

const createDebitRequest = (athlete, amount, accountId, description, name, routingNumber, accountNumber, accountType) => {
  const accounts = athlete?.accounts;

  if (accounts.length !== 0 && accounts.unitAccountId.includes(accountId)) {
       throw new Error("Looks like this athlete is using invalid banking");
  }

  return unit.debitAccount(amount, accountId, description, name, routingNumber, accountNumber, accountType)
    .catch(err => (err?.appId)
    )
}

const debitAccount = (athleteId, amount, accountId, description, name, routingNumber, accountNumber, accountType) => tpc.getAthlete(athleteId).then(athlete => 
  (athlete != null) ? 
    createDebitRequest(athlete, amount, accountId, description, name, routingNumber, accountNumber, accountType) : 
    Promise.reject(`No athlete found with id ${athleteId}`)
);

module.exports.debitAccount = async (event) => {
  const {athleteId, amount, accountId, description, name, routingNumber, accountNumber, accountType} = event.arguments;
   return debitAccount(athleteId, amount, accountId, description, name, routingNumber, accountNumber, accountType)
}