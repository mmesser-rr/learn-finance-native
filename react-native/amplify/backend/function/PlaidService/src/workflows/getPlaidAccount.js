const plaid = require("../wrappers/plaid");
const tpc = require("../wrappers/tpc");

const getPlaidAccount = (athlete) => {
    const token = athlete?.plaidToken?.access_token;
    if (!token) {
        throw new Error("Looks like this athlete haven't linked plaid, use the createLink");
      }
    
  return plaid.getPlaidAccount(token)
    .catch(err => {
      throw new Error(`Failed to creat link in Plaid. Reason: ${JSON.stringify(err)}`);
    });
}

module.exports = {
    getPlaidAccount: (athleteId) => tpc.getAthlete(athleteId).then(getPlaidAccount)
}
