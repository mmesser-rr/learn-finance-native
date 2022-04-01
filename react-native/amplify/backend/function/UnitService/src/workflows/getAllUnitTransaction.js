const unit = require("../wrappers/unit");
const tpc = require("../wrappers/tpc");
const {axios} = require("../env");

const getUnitAllTransactions = (unitCustomerId) => {
  return unit.getAllUnitTransaction(unitCustomerId)
    .catch(err => {
      throw new Error(`Failed to reach Unit. Reason: ${JSON.stringify(err)}`);
    });
}

// const getUnitTransactions = (athleteId) => tpc.getAthlete(athleteId).then(athlete => 
//     (athlete != null) ? 
//     getUnitAllTransactions(athlete.unitLookup.custId) : 
//       Promise.reject(`No athlete found with id ${athleteId}`)
//   )
  

module.exports.getAllUnitTransaction = async (event, athleteId) => {
  axios.defaults.headers["Authorization"] = event.request.headers.authorization; 
return tpc.getAthlete(axios, athleteId).then(res => getUnitAllTransactions(res.unitLookup.custId))
}