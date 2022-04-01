const unit = require("../wrappers/unit");
const tpc = require("../wrappers/tpc");
const { validateUser } = require("./validateUser");

const getAthleteUnitAccounts = (athlete) => {
  const custId = athlete?.unitLookup?.custId;
  const pods = athlete?.accounts?.items;

  if (custId === undefined) {
    throw new Error("Athlete does not have a unit customer id. Has their unit application been approved?");
  }

  return unit.getAllAthleteAccounts(custId)
    .catch(err => {
      throw new Error(`Failed to reach Unit. Reason: ${JSON.stringify(err)}`);
    });
}

module.exports = {
  getAthleteUnitAccounts: (event, athleteId) => tpc.getAthlete(validateUser(event), athleteId).then(getAthleteUnitAccounts)
}
