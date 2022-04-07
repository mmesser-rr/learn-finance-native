const wyre = require("../wrappers/wyre");
const tpc = require("../wrappers/tpc");
const {axios} = require("../env");

const getAllWyreTransactions = (wyreAccountId) => {
  return wyre.getAllWyreTransaction(wyreAccountId)
    .catch(err => {
      throw new Error(`Failed to reach wyre. Reason: ${JSON.stringify(err)}`);
    });
}


module.exports.getAllWyreTransaction = async (event, athleteId) => {
  axios.defaults.headers["Authorization"] = event.request.headers.authorization; 
  return tpc.getAthlete(axios, athleteId).then(athlete => (athlete?.wyreAccountId != undefined) ? getAllWyreTransactions(athlete.wyreAccountId) : Promise.reject(`Athlete doesn't have a wyre account`)
  )
}