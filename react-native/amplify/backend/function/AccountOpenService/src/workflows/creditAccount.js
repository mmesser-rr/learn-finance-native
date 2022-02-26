const unit = require("../wrappers/unit");
const tpc = require("../wrappers/tpc");

const createCreditRequest = (athlete, amount, accountId, description, name, routingNumber, accountNumber, accountType) => {
  const accounts = athlete?.accounts;

  if (accounts.length !== 0 && accounts.unitAccountId.includes(accountId)) {
       throw new Error("Looks like this athlete is using invalid banking");
  }

  return unit.creditAccount(amount, accountId, description, name, routingNumber, accountNumber, accountType)
    .catch(err => (err?.appId)
    )
}

const creditAccount = (athleteId, amount, accountId, description, name, routingNumber, accountNumber, accountType) => tpc.getAthlete(athleteId).then(athlete => 
  (athlete != null) ? 
    createCreditRequest(athlete, amount, accountId, description, name, routingNumber, accountNumber, accountType) : 
    Promise.reject(`No athlete found with id ${athleteId}`)
);

module.exports.creditAccount = async (event) => {
  const {athleteId, amount, accountId, description, name, routingNumber, accountNumber, accountType} = event.arguments;
   return creditAccount(athleteId, amount, accountId, description, name, routingNumber, accountNumber, accountType)
}