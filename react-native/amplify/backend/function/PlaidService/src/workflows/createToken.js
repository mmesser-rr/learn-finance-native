const plaid = require("../wrappers/plaid");
const tpc = require("../wrappers/tpc");
const {axios} = require("../env");

const createToken = (athlete) => {
  const custId = athlete?.unitLookup?.custId;

  if (custId === undefined) {
    throw new Error("Athlete does not have a unit customer id. Has their unit application been approved?");
  }
  return plaid.createToken(athlete.id)
    .catch(err => {
      throw new Error(`Failed to creat link in Plaid. Reason: ${JSON.stringify(err)}`);
    });
 }


module.exports.createToken = async (event, athleteId) => {
  axios.defaults.headers["Authorization"] = event.request.headers.authorization; 
  return tpc.getAthlete(axios, athleteId).then(res => createToken(res));
}