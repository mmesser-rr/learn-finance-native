const tpc = require("../wrappers/tpc");
const wyre = require("../wrappers/wyre");

const createWyreAccount = (athlete) => {
  const custId = athlete?.unitLookup?.custId;
  const wyreId = athlete?.wryeAccountId;
  
  if (custId === undefined || wyreId) {
    throw new Error("Athlete does not have a unit customer id or already have a wyre account");
  }
  return wyre.createAccount(athlete)
    .then(res => tpc.updateWyreAccoundId(athlete.id, res.id))
    .catch(err => {
      throw new Error(`Failed to create account in Wrye. Reason: ${JSON.stringify(err)}`);
    });
}

module.exports = {
    createWyreAccount: (athleteId) => tpc.getAthlete(athleteId).then(athlete => createWyreAccount(athlete))
}