const plaid = require("../wrappers/plaid");
const tpc = require("../wrappers/tpc");
const { validateUser } = require("./validateUser");

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

module.exports = {
    getPlaidAccounts: (event, athleteId) => tpc.getAthlete(validateUser(event), athleteId).then(getPlaidAccounts)
}


