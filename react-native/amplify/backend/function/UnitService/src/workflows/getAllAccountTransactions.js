const unit = require("../wrappers/unit");
const tpc = require("../wrappers/tpc");
const {axios} = require("../env");


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
  

module.exports.getAllUnitTransaction = async (event, athleteId) => {
  axios.defaults.headers["Authorization"] = event.request.headers.authorization; 
return tpc.getAthlete(axios, athleteId).then(res => getUnitAllTransactions(res.unitLookup.custId))
}