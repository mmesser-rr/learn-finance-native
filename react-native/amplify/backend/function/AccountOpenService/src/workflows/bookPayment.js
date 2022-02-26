const unit = require("../wrappers/unit");
const tpc = require("../wrappers/tpc");

const createBookRequest = (athlete, amount, accountId, description, name, routingNumber, accountNumber, accountType) => {
  // const accounts = athlete?.accounts;

  // if (accounts.length !== 0 && accounts.unitAccountId.includes(accountId)) {
  //      throw new Error("Looks like this athlete is using invalid banking");
  // }

  return unit.bookPayment(amount, accountId, description, name, routingNumber, accountNumber, accountType)
    .catch(err => (err?.appId)
    )
}

const bookPayment = (athleteId, amount, accountId, description, name, routingNumber, accountNumber, accountType) => tpc.getAthlete(athleteId).then(athlete => 
  (athlete != null) ? 
    createBookRequest(athlete, amount, accountId, description, name, routingNumber, accountNumber, accountType) : 
    Promise.reject(`No athlete found with id ${athleteId}`)
);

module.exports.bookPayment = async (event) => {
  const {athleteId, amount, accountId, description, name, routingNumber, accountNumber, accountType} = event.arguments;
  //const athleteId = "f021851d-51ea-4f02-b9d7-e2ee7b8034fb";
   return bookPayment(athleteId, amount, accountId, description, name, routingNumber, accountNumber, accountType)
}