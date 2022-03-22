const unit = require("../wrappers/unit");
const tpc = require("../wrappers/tpc");

const createAtleteUnitToken = (athlete, verificationCode, verificationToken) => {
  const custId = athlete?.unitLookup?.custId;

  if (custId === undefined) {
    throw new Error("Athlete does not have a unit customer id. Has their unit application been approved?");
  }

  return unit.createAtleteUnitToken(custId, verificationCode, verificationToken)
 // .then(res => tpc.updateAthleteAccount(res.attributes.token, res.attributes.token))
    .catch(err => {
      throw new Error(`Failed to reach Unit. Reason: ${JSON.stringify(err)}`);
    });
}

module.exports.createAtleteUnitToken = async (event) => {
  const {athleteId, verificationCode, verificationToken} = event.arguments;
   return tpc.getAthlete(athleteId).then(athlete => createAtleteUnitToken(athlete, verificationCode, verificationToken)) 
}