const plaid = require("../wrappers/plaid");
const tpc = require("../wrappers/tpc");
const { validateUser } = require("./validateUser");

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

module.exports = {
    createToken: (event, athleteId) => tpc.getAthlete(validateUser(event), athleteId).then(createToken)
}
