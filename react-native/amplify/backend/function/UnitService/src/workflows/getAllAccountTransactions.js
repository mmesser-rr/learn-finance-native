const unit = require("../wrappers/unit");
const tpc = require("../wrappers/tpc");
const { validateUser } = require("./validateUser");

const getUnitAllTransactions = (unitCustomerId) => {
  const custId = athlete?.unitLookup?.custId;

  if (custId === undefined) {
    throw new Error("Athlete does not have a unit customer id. Has their unit application been approved?");
  }

  return unit.getAllUnitTransaction(unitCustomerId)
    .catch(err => {
      throw new Error(`Failed to reach Unit. Reason: ${JSON.stringify(err)}`);
    });
}

// const getUnitTransactions = (athleteId, unitCustomerId) => tpc.getAthlete(athleteId).then(athlete => 
//     (athlete != null) ? 
//     getUnitAllTransactions(unitCustomerId) : 
//       Promise.reject(`No athlete found with id ${athleteId}`)
//   )
  

module.exports = {
    getAllUnitTransaction:(event, athleteId) => tpc.getAthlete(validateUser(event), athleteId).then(res => getUnitAllTransactions(res.unitLookup.custId))
}
