const tpc = require("../wrappers/tpc");
const wyre = require("../wrappers/wyre");
const {axios} = require("../env");

const createWyreAccount = (athlete) => {
  const custId = athlete?.unitLookup?.custId;
  const wyreId = athlete?.wyreAccountId;

  // if (custId === undefined || wyreId) {
  //   throw new Error("Athlete does not have a unit customer id or already have a wyre account");
  // }
  return wyre.createAccount(athlete)
    .then(res => tpc.updateWyreAccoundId(axios, athlete.id, res.id))
    .catch(err => {
      throw new Error(`Failed to create account in Wrye. Reason: ${JSON.stringify(err)}`);
    });
}


module.exports.createWyreAccount = async (event, athleteId) => {
  axios.defaults.headers["Authorization"] = event.request.headers.authorization; 
  return tpc.getAthlete(axios, athleteId).then(res => createWyreAccount(res))
}