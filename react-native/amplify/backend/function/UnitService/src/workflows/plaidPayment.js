const unit = require("../wrappers/unit");
const tpc = require("../wrappers/tpc");
const {R,propEq, find} = require("ramda");

const createPlaidRequest = (athlete, plaidAccountId, amount, description, idempotencyKey) => getOrCreateProcessorToken(athlete, plaidAccountId, amount, description,idempotencyKey);

const getOrCreateProcessorToken = (athlete, plaidAccountId, amount, description,idempotencyKey) => {
  const unitAccountId = find(propEq('podName', 'SPENDING'))(athlete?.accounts.items).unitAccountId
  if(athlete.plaidProcessorToken?.plaidAccountId !== null && athlete.plaidProcessorToken?.plaidAccountId === plaidAccountId){
      return unit.plaidPayment(unitAccountId, athlete.plaidProcessorToken.processorToken, description, amount, idempotencyKey, athlete.unitToken)
      .then(res => tpc.persistTransaction(res.transactionId, athlete.id, res.amount, res.status, res.createdAt, false, res.direction, athlete.podSettings, idempotencyKey))
  }else{
     return tpc.createProcessorToken(athlete.plaidToken, plaidAccountId)
     .then(res => tpc.updateAthleteAccount(athlete.id, {plaidAccountId: plaidAccountId, processorToken: res}))
     .then(res => unit.plaidPayment(unitAccountId, res, description, amount, idempotencyKey))
     .then(res => tpc.persistTransaction(res.transactionId, athlete.id, res.amount, res.status, res.createdAt, false, res.direction, athlete.podSettings, idempotencyKey))
  }
}

const plaidPayment = (athleteId, plaidAccountId, amount, description, idempotencyKey) => tpc.getAthlete(athleteId).then(athlete => 
  (athlete?.plaidToken != null && athlete?.unitLookup?.custId && athlete?.accounts) ? 
     createPlaidRequest(athlete, plaidAccountId, amount, description, idempotencyKey) : 
    Promise.reject(`This account needs to be linked to plaid ${athleteId} or user doesn't have unit account`)
);

module.exports.plaidPayment = async (event) => {
  const {athleteId, plaidAccountId, amount, description, idempotencyKey} = event.arguments;
   return plaidPayment(athleteId, plaidAccountId, amount, description, idempotencyKey)
}