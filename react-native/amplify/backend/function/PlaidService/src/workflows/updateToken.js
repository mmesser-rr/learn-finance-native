const plaid = require("../wrappers/plaid");
const tpc = require("../wrappers/tpc");
const {getPlaidAccount} = require("./getPlaidAccount");
const { validateUser } = require("./validateUser");


const updateToken = (event, athleteId, token) => tpc.getAthlete(validateUser(event), athleteId).then(athlete => 
  (athlete?.unitLookup?.custId != null) ? 
       plaid.updateToken(token)
      .then(access_token => tpc.addPlaidToken(athleteId, access_token)) :
    //  .then(getPlaidAccount(athleteId)) :
      Promise.reject(`Athlete doesn't have account ${athleteId}`)
);

module.exports.updateToken = async (event) => {
  const {athleteId, accessToken} = event.arguments;
   return updateToken(event, athleteId, accessToken)
}
