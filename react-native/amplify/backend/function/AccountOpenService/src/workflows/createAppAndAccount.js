const { createAndPersistAccount } = require("./createAccount");
const unit = require("../wrappers/unit");
const tpc = require("../wrappers/tpc");

const createAppAndAccount = (ssn, athlete) => {
  const custId = athlete?.unitLookup?.custId;

  if (custId !== undefined) {
    throw new Error("Looks like this athlete is already affiliated with a Unit customer. Continuing will overwrite and lose current unit data. Bailing");
  }

  return unit.createApplication(ssn, athlete)
    .catch(err => tpc.addUnitDataToAthlete(athlete.id, err))
    .then(res => tpc.addUnitDataToAthlete(athlete.id, res))
    .then(res => createAndPersistAccount(athlete.id));
}

const createAppAndAccountFromId = (ssn, athleteId) => tpc.getAthlete(athleteId).then(athlete => 
  (athlete != null) ? 
    createAppAndAccount(ssn, athlete) : 
    Promise.reject(`No athlete found with id ${athleteId}`)
);

module.exports = {
  createAppAndAccount: createAppAndAccountFromId
}
