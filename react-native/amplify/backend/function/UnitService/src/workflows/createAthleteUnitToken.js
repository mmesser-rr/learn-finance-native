const unit = require("../wrappers/unit");
const tpc = require("../wrappers/tpc");
const { validateUser } = require("./validateUser");

const createAthleteUnitToken = (event, athlete, verificationCode, verificationToken) => {
  const custId = athlete?.unitLookup?.custId;
  let response = "";

  if (custId === undefined) {
    throw new Error("Athlete does not have a unit customer id. Has their unit application been approved?");
  }

  return unit.createAthleteUnitToken(custId, verificationCode, verificationToken)
  .then(res => response = res)
  .then(res => tpc.updateAthleteUnitToken(athlete.id, res.token))
  .then(res => res = {type: response.type, attributes: {expiresIn: response.expiresIn}} )
    .catch(err => {
      throw new Error(`Failed to reach Unit. Reason: ${JSON.stringify(err)}`);
    });
}

module.exports.createAthleteUnitToken = async (event) => {
  const {athleteId, verificationCode, verificationToken} = event.arguments;
   return tpc.getAthlete(validateUser(event), athleteId).then(athlete => createAthleteUnitToken(event, athlete, verificationCode, verificationToken)) 
}