const unit = require("../wrappers/unit");
const tpc = require("../wrappers/tpc");
const {R,propEq, find} = require("ramda");
const {axios} = require("../env");

const getOrCreateProcessorToken = (athlete, plaidAccountId, amount, description,idempotencyKey) => {
  if(athlete?.plaidToken == null && !athlete?.unitLookup?.custId && !athlete?.accounts){
    Promise.reject(`This account needs to be linked to plaid ${athleteId} or user doesn't have unit account`)
  }
  const unitAccountId = find(propEq('podName', 'SPENDING'))(athlete?.accounts.items).unitAccountId
  if(athlete.unitPlaidProcessorToken?.plaidAccountId !== null && athlete.unitPlaidProcessorToken?.plaidAccountId === plaidAccountId){
      return unit.plaidPayment(unitAccountId, athlete.unitPlaidProcessorToken.processorToken, description, amount, idempotencyKey, athlete.unitToken)
      .then(res => tpc.persistTransaction(axios, res.transactionId, athlete.id, res.amount, res.status, res.createdAt, false, res.direction, res.transactionType, athlete.podSettings, idempotencyKey))
  }else{
     return tpc.createProcessorToken(athlete.plaidToken, plaidAccountId)
     .then(res => tpc.updateAthleteAccount(axios, athlete.id, {plaidAccountId: plaidAccountId, processorToken: res}))
     .then(res => unit.plaidPayment(unitAccountId, res, description, amount, idempotencyKey))
     .then(res => tpc.persistTransaction(axios, res.transactionId, athlete.id, res.amount, res.status, res.createdAt, false, res.direction, res.transactionType, athlete.podSettings, idempotencyKey))
  }
}

// const plaidPayment = (athleteId, plaidAccountId, amount, description, idempotencyKey) => tpc.getAthlete(athleteId).then(athlete => 
//   (athlete?.plaidToken != null && athlete?.unitLookup?.custId && athlete?.accounts) ? 
//      createPlaidRequest(athlete, plaidAccountId, amount, description, idempotencyKey) : 
//     Promise.reject(`This account needs to be linked to plaid ${athleteId} or user doesn't have unit account`)
// );

module.exports.plaidPayment = async (event) => {
  const {athleteId, plaidAccountId, amount, description, idempotencyKey} = event.arguments;
  axios.defaults.headers["Authorization"] = event.request.headers.authorization; 
  return tpc.getAthlete(axios, athleteId).then(res => getOrCreateProcessorToken(res, plaidAccountId, amount, description, idempotencyKey))
}