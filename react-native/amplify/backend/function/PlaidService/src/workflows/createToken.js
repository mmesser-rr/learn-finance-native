const plaid = require("../wrappers/plaid");
const tpc = require("../wrappers/tpc");

const createToken = (athleteId) => {
  return plaid.createToken(athleteId)
    .catch(err => {
      throw new Error(`Failed to creat link in Plaid. Reason: ${JSON.stringify(err)}`);
    });
}

module.exports = {
    createToken: (athleteId) => tpc.getAthlete(athleteId).then(createToken)
}
