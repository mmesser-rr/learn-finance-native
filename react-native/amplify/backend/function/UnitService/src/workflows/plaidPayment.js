const unit = require("../wrappers/unit");
const tpc = require("../wrappers/tpc");
const {R,propEq, find} = require("ramda");
const { validateUser } = require("./validateUser");

const createPlaidRequest = (event, athlete, plaidAccountId, amount, description, idempotencyKey) => getOrCreateProcessorToken(event, athlete, plaidAccountId, amount, description,idempotencyKey);

const getOrCreateProcessorToken = (event, athlete, plaidAccountId, amount, description,idempotencyKey) => {
  const unitAccountId = find(propEq('podName', 'SPENDING'))(athlete?.accounts.items).unitAccountId
  if(athlete.plaidProcessorToken?.plaidAccountId !== null && athlete.plaidProcessorToken?.plaidAccountId === plaidAccountId){
      return unit.plaidPayment(unitAccountId, athlete.plaidProcessorToken.processorToken, description, amount, idempotencyKey, athlete.unitToken)
      .then(res => tpc.persistTransaction(event, res.transactionId, athlete.id, res.amount, res.status, res.createdAt, false, res.direction, athlete.podSettings, idempotencyKey))
  }else{
     return tpc.createProcessorToken(athlete.plaidToken, plaidAccountId)
     .then(res => tpc.updateAthleteAccount(event, athlete.id, {plaidAccountId: plaidAccountId, processorToken: res}))
     .then(res => unit.plaidPayment(unitAccountId, res, description, amount, idempotencyKey))
     .then(res => tpc.persistTransaction(event, res.transactionId, athlete.id, res.amount, res.status, res.createdAt, false, res.direction, athlete.podSettings, idempotencyKey))
  }
}

const plaidPayment = (event, athleteId, plaidAccountId, amount, description, idempotencyKey) => tpc.getAthlete(validateUser(event),athleteId).then(athlete => 
  (athlete?.plaidToken != null && athlete?.unitLookup?.custId && athlete?.accounts) ? 
     createPlaidRequest(event, athlete, plaidAccountId, amount, description, idempotencyKey) : 
    Promise.reject(`This account needs to be linked to plaid ${athleteId} or user doesn't have unit account`)
);

module.exports.plaidPayment = async (event) => {
  const {athleteId, plaidAccountId, amount, description, idempotencyKey} = event.arguments;
   return plaidPayment(event, athleteId, plaidAccountId, amount, description, idempotencyKey)
}