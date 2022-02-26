const unit = require("../wrappers/unit");
const tpc = require("../wrappers/tpc");

const getAthleteAccountById = (athlete, unitAccountId) => {
  const accounts = athlete.accounts;

  if (accounts.length !== 0 && accounts.unitAccountId.includes(unitAccountId)) {
    throw new Error("Athlete account doesn't match?");
  }

  return unit.getAthleteAccountById(unitAccountId)
    .catch(err => {
      throw new Error(`Failed to reach Unit. Reason: ${JSON.stringify(err)}`);
    });
}

module.exports = {
    getAthleteAccountById: (athleteId, unitAccountId) => tpc.getAthlete(athleteId).then(getAthleteAccountById(unitAccountId))
}
