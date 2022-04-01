const { createAndPersistAccount } = require("./createAccount");
const { repeat, map } = require("ramda");
const unit = require("../wrappers/unit");
const tpc = require("../wrappers/tpc");
const { validateUser } = require("./validateUser");
const {axios} = require("../env");

/********************************************* /

Note : The app creates 3 accounts on setup

*********************************************/
const availableName = ["SAVINGS", "SPENDING","INVESTMENTS"];

const createAppAndAccount = (athlete, ssn, event) => {
  const custId = athlete?.unitLookup?.custId;

  if (custId) {
    throw new Error("Looks like this athlete is already affiliated with a Unit customer. Continuing will overwrite and lose current unit data. Bailing");
  }

  return unit.createApplication(ssn, athlete)
    .catch(err => (err?.appId) ?
      Promise.reject(tpc.addUnitDataToAthlete(axios, athlete.id, err))
      : Promise.reject(JSON.stringify(err))
    )

    .then(res => tpc.addUnitDataToAthlete(axios, athlete.id, res))
    .then(res => Promise.all(
      map(pod => createAndPersistAccount(event, athlete.id, pod), availableName)
    ));
}

module.exports.createAppAndAccount = async (event, ssn, athleteId) => {
  const authCheck = validateUser(event);
  axios.defaults.headers["Authorization"] = authCheck; 
  return tpc.getAthlete(axios, athleteId).then(res => createAppAndAccount(res, ssn, event));
}