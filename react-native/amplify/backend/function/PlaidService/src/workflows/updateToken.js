const plaid = require("../wrappers/plaid");
const tpc = require("../wrappers/tpc");
const {axios} = require("../env");


const updateToken = (athlete, token) => {
    const custId = athlete?.unitLookup?.custId

    
    if (custId === undefined) {
      throw new Error("Athlete does not have a unit customer id. Has their unit application been approved?");
    }
      return plaid.updateToken(token)
      .then(access_token => tpc.addPlaidToken(axios, athleteId, access_token))
    }

module.exports.updateToken = async (event) => {
  const {athleteId, accessToken} = event.arguments;
  axios.defaults.headers["Authorization"] = event.request.headers.authorization; 
  return tpc.getAthlete(axios, athleteId).then(res => updateToken(res, accessToken));
}