const { createAndPersistAccount } = require("./createAccount");
const { repeat, map } = require("ramda");
const unit = require("../wrappers/unit");
const tpc = require("../wrappers/tpc");
const { validateUser } = require("./validateUser");

/********************************************* /

Note : The app creates 3 accounts on setup

*********************************************/
const availableName = ["SAVINGS", "SPENDING","INVESTMENTS"];

const createAppAndAccount = (event, ssn, athlete) => {
  const custId = athlete?.unitLookup?.custId;

  if (custId) {
    throw new Error("Looks like this athlete is already affiliated with a Unit customer. Continuing will overwrite and lose current unit data. Bailing");
  }

  return unit.createApplication(ssn, athlete)
    .catch(err => (err?.appId) ?
      Promise.reject(tpc.addUnitDataToAthlete(athlete.id, err))
      : Promise.reject(JSON.stringify(err))
    )

    .then(res => tpc.addUnitDataToAthlete(athlete.id, res))
    .then(res => Promise.all(
      map(pod => createAndPersistAccount(event, athlete.id, pod), availableName)
    ));
}


const createAppAndAccountFromId = (event, ssn, athleteId) => tpc.getAthlete(validateUser(event), athleteId).then(athlete => 
  (athlete != null) ? 
    createAppAndAccount(event, ssn, athlete) : 
    Promise.reject(`No athlete found with id ${athleteId}`)
);

module.exports = {
  createAppAndAccount: createAppAndAccountFromId
}