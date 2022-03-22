const unit = require("../wrappers/unit");
const tpc = require("../wrappers/tpc");

const athleteUnitTokenVerification = (athlete) => {
  const custId = athlete?.unitLookup?.custId;

  if (custId === undefined) {
    throw new Error("Athlete does not have a unit customer id. Has their unit application been approved?");
  }

  return unit.athleteTokenVerification(custId)
    .catch(err => {
      throw new Error(`Failed to reach Unit. Reason: ${JSON.stringify(err)}`);
    });
}

module.exports = {
    athleteUnitTokenVerification: (athleteId) => tpc.getAthlete(athleteId).then(athleteUnitTokenVerification)
}
