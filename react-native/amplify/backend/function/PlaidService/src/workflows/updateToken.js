const plaid = require("../wrappers/plaid");
const tpc = require("../wrappers/tpc");
const createToken = require("./createToken");
const createProcessorToken = require("./processorToken");

const tokenFromPlaidParams = (athleteId, plaidResponse) => (
  {
    athleteId,
    unitAccountId: plaidResponse.data.id,
    routingCode: plaidResponse.data.attributes.routingNumber,
    accountNumber: plaidResponse.data.attributes.accountNumber
  }
);
const updatePlaidBackend = (athleteId, plaidResponse) => tpc.addPlaidToken(tokenFromPlaidParams(athleteId, plaidResponse));


const updateToken = (athleteId, token) => tpc.getAthlete(athleteId).then(athlete => 
  (athlete?.plaidLookup?.access_token != null) ? 
      plaid.updateToken(token, athleteId)
      .then(res => createProcessorToken(res.access_token, athleteId))
      .then(res => updatePlaidBackend(athleteId, res)) : 
       createToken(athleteId)
);

module.exports.updateToken = async (event) => {
  const {athleteId, token} = event.arguments;
   return updateToken(athleteId, token)
}

