const wyre = require("../wrappers/wyre");
const tpc = require("../wrappers/tpc");

const getAthleteWyreAccountById = (wyreAccountId) => {
  return wyre.getAthleteWyreAccount(wyreAccountId)
    .catch(err => {
      throw new Error(`Failed to reach wyre. Reason: ${JSON.stringify(err)}`);
    });
}

const getAthleteWyreAccount = (athleteId, wyreAccountId) => tpc.getAthlete(athleteId).then(athlete => 
  (athlete != null && athlete?.wyreAccountId != undefined) ? 
  getAthleteWyreAccountById(wyreAccountId) : 
    Promise.reject(`No athlete found with id ${athleteId}`)
)

module.exports = {
  getAthleteWyreAccount: getAthleteWyreAccount
}


