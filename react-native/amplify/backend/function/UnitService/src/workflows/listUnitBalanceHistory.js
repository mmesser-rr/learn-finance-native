const unit = require("../wrappers/unit");
const tpc = require("../wrappers/tpc");
const { validateUser } = require("./validateUser");

const getUnitBalanceHistory = (athlete) => {
  const accounts = athlete.accounts.items;
  const custId = athlete?.unitLookup?.custId;

  if (accounts.length == 0) {
    throw new Error("Athlete doesn't have any account?");
  }

  return unit.listUnitBalanceHistory(custId)
    .catch(err => {
      throw new Error(`Failed to reach Unit. Reason: ${JSON.stringify(err)}`);
    });
}

const listUnitBalanceHistory = (event, athleteId) => tpc.getAthlete(validateUser(event),athleteId).then(athlete => 
  (athlete != null) ? 
  getUnitBalanceHistory(athlete) : 
    Promise.reject(`No athlete found with id ${athleteId}`)
)

module.exports = {
    listUnitBalanceHistory: listUnitBalanceHistory
}
