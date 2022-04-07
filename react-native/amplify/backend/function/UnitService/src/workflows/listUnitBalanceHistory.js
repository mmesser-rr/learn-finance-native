const unit = require("../wrappers/unit");
const tpc = require("../wrappers/tpc");
const {axios} = require("../env");

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

// const listUnitBalanceHistory = (athleteId) => tpc.getAthlete(athleteId).then(athlete => 
//   (athlete != null) ? 
//   getUnitBalanceHistory(athlete) : 
//     Promise.reject(`No athlete found with id ${athleteId}`)
// )


module.exports.listUnitBalanceHistory = async (event, athleteId) => {
axios.defaults.headers["Authorization"] = event.request.headers.authorization; 
return tpc.getAthlete(axios, athleteId).then(res => getUnitBalanceHistory(res))
}
