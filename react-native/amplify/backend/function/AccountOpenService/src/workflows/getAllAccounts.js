const unit = require("../wrappers/unit");
const tpc = require("../wrappers/tpc");

const getAllAthleteAccounts = (athlete) => {
  const custId = athlete?.unitLookup?.custId;
  const athleteId = athlete.id;

  if (custId === undefined) {
    throw new Error("Athlete does not have a unit customer id. Has their unit application been approved?");
  }

  return unit.getAllAthleteAccounts(custId)
    .catch(err => {
      throw new Error(`Failed to reach Unit. Reason: ${JSON.stringify(err)}`);
    });
}

module.exports = {
    getAllAthleteAccounts: (athleteId) => tpc.getAthlete(athleteId).then(getAllAthleteAccounts)
}
