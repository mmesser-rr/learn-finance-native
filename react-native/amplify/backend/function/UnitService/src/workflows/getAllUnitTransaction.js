const unit = require("../wrappers/unit");
const tpc = require("../wrappers/tpc");
const { validateUser } = require("./validateUser");

const getUnitAllTransactions = (unitCustomerId) => {
  return unit.getAllUnitTransaction(unitCustomerId)
    .catch(err => {
      throw new Error(`Failed to reach Unit. Reason: ${JSON.stringify(err)}`);
    });
}

const getUnitTransactions = (event, athleteId) => tpc.getAthlete(validateUser(event),athleteId).then(athlete => 
    (athlete != null) ? 
    getUnitAllTransactions(athlete.unitLookup.custId) : 
      Promise.reject(`No athlete found with id ${athleteId}`)
  )
  

module.exports = {
    getAllUnitTransaction: getUnitTransactions
}
