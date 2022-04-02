const wyre = require("../wrappers/wyre");
const tpc = require("../wrappers/tpc");
const {axios} = require("../env");

const getAthleteWyreAccountById = (athlete) => {
  const wyreId = athlete?.wyreAccountId;
  
  if (wyreId === undefined) {
    throw new Error(`Athlete does not have a wyre account? ${athleteId}`);
  }

  return wyre.getAthleteWyreAccount(wyreId)
    .catch(err => {
      throw new Error(`Failed to reach wyre. Reason: ${JSON.stringify(err)}`);
    });
}

module.exports.getAthleteWyreAccount = async (event, athleteId) => {
  axios.defaults.headers["Authorization"] = event.request.headers.authorization; 
  return tpc.getAthlete(axios, athleteId).then(res => getAthleteWyreAccountById(res));
}