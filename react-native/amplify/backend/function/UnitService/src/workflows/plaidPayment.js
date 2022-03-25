const unit = require("../wrappers/unit");
const tpc = require("../wrappers/tpc");

const createPlaidRequest = (athlete, plaidAccountId, amount, description, idempotencyKey) => getOrCreateProcessorToken(athlete, plaidAccountId, amount, description,idempotencyKey);

const getOrCreateProcessorToken = (athlete, plaidAccountId, amount, description,idempotencyKey) => {
  if(athlete.plaidProcessorToken?.plaidAccountId !== null && athlete.plaidProcessorToken?.plaidAccountId === plaidAccountId){
      return unit.plaidPayment(athlete.accounts.items[0].unitAccountId, athlete.plaidProcessorToken.processorToken, description, amount, idempotencyKey, athlete.unitToken)
      .then(res => tpc.persistTransaction(res.transactionId, athlete.id, res.amount, res.status, res.createdAt, false, res.direction, athlete.podSettings, idempotencyKey))
  }else{
     return tpc.createProcessorToken(athlete.plaidToken, plaidAccountId)
     .then(res => tpc.updateAthleteAccount(athlete.id, {plaidAccountId: plaidAccountId, processorToken: res}))
     .then(res => unit.plaidPayment(athlete.accounts.items[0].unitAccountId, res, description, amount, idempotencyKey))
     .then(res => tpc.persistTransaction(res.transactionId, athlete.id, res.amount, res.status, res.createdAt, false, res.direction, athlete.podSettings, idempotencyKey))
  }
}

const plaidPayment = (athleteId, plaidAccountId, amount, description, idempotencyKey) => tpc.getAthlete(athleteId).then(athlete => 
  (athlete?.plaidToken != null) ? 
     createPlaidRequest(athlete, plaidAccountId, amount, description, idempotencyKey) : 
    Promise.reject(`This account needs to be linked to plaid ${athleteId}`)
);

module.exports.plaidPayment = async (event) => {
  const {athleteId, plaidAccountId, amount, description, idempotencyKey} = event.arguments;
   return plaidPayment(athleteId, plaidAccountId, amount, description, idempotencyKey)
}