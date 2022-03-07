const plaid = require("../wrappers/plaid");
const tpc = require("../wrappers/tpc");
const {getPlaidAccount} = require("./getPlaidAccount");


const updateToken = (athleteId, token) => tpc.getAthlete(athleteId).then(athlete => 
  (athlete?.unitLookup?.custId != null) ? 
       plaid.updateToken(token)
      .then(access_token => tpc.addPlaidToken(athleteId, access_token))
      .then(getPlaidAccount(athleteId)):
      Promise.reject(`Athlete doesn't have account ${athleteId}`)
);

module.exports.updateToken = async (event) => {
  const {athleteId, accessToken} = event.arguments;
   return updateToken(athleteId, accessToken)
}



// const formatResponse = (token, accounts) => {
//   const plaidAccount = acc => getProcessor(acc, token);
//   forEach(plaidAccount, map(prop('account_id'), accounts))
//   processorToken(hardAccount, token)
// } tpc.addPlaidToken(athleteId, access_token)
