const unit = require("../wrappers/unit");
const tpc = require("../wrappers/tpc");

const createPlaidRequest = (athlete, data) => getOrCreateProcessorToken(athlete, data).then (unit.getAthleteUnitAccountById(data.unitAccountId).then(res => (res.data.attributes.available >= data.amount)) ? 
  unit.plaidPayment(data) : 
  Promise.reject(`Athlet doesn't have enough balance for this transaction ${athleteId}`)
  );

const plaidPayment = (athleteId, data) => tpc.getAthlete(athleteId).then(athlete => 
  (athlete?.plaidToken?.accessToken != null) ? 
     createPlaidRequest(athlete, data) : 
    Promise.reject(`This account needs to be linked to plaid ${athleteId}`)
);

module.exports.plaidPayment = async (event) => {
  const {athleteId, data} = event.arguments;
   return plaidPayment(athleteId, data)
}
