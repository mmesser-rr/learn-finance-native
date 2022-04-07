const plaid = require("../wrappers/plaid");
const tpc = require("../wrappers/tpc");
const {axios} = require("../env");

const getPlaidAccounts = (athlete) => {
    const token = athlete?.plaidToken;
    if (!token) {
        throw new Error("Looks like this athlete haven't linked plaid, use the createLink");
      }
    
  return plaid.getPlaidAccount(token)
    .catch(err => {
      throw new Error(`Failed to creat link in Plaid. Reason: ${JSON.stringify(err)}`);
    });
}

module.exports.getPlaidAccounts = async (event, athleteId) => {
  axios.defaults.headers["Authorization"] = event.request.headers.authorization; 
  return tpc.getAthlete(axios, athleteId).then(res => getPlaidAccounts(res));
}