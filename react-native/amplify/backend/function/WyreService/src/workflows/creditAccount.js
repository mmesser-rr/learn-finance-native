const wyre = require("../wrappers/wyre");
const tpc = require("../wrappers/tpc");
const {R,propEq, find} = require("ramda");
const {axios} = require("../env");

const getOrCreateProcessorToken = (athlete, plaidAccountId, amount, description,idempotencyKey) => {
if(athlete?.plaidToken == null && !athlete?.wyreAccountId && !athlete?.accounts){
    Promise.reject(`This account needs to be linked to plaid ${athleteId} or user doesn't have wyre account`)
  }
  const spendingAccountId = find(propEq('podName', 'SPENDING'))(athlete?.accounts.items)
  console.log(">>>>>>>>>>>", plaidAccountId )
  if(athlete?.wyrePlaidProcessorToken?.plaidAccountId !== undefined && athlete?.wyrePlaidProcessorToken?.plaidAccountId === plaidAccountId){
      return wyre.plaidPayment(spendingAccountId, athlete.wyrePlaidProcessorToken.processorToken, description, amount, idempotencyKey, athlete.wyreToken)
      .then(res => tpc.persistTransaction(axios, res.transactionId, athlete.id, res.amount, res.status, res.createdAt, false, res.direction, res.transansactionType, athlete.podSettings, idempotencyKey))
  }else{
     return tpc.createProcessorToken(athlete.plaidToken, plaidAccountId)
     .then(res => tpc.updateAthleteAccount(axios, athlete.id, {plaidAccountId: plaidAccountId, processorToken: res}))
     .then(res => wyre.plaidPayment(spendingAccountId, res, description, amount, idempotencyKey))
     .then(res => tpc.persistTransaction(axios, res.transactionId, athlete.id, res.amount, res.status, res.createdAt, false, res.direction, res.transansactionType, athlete.podSettings, idempotencyKey))
  }
}


module.exports.creditAccount = async (event) => {
  const {athleteId, plaidAccountId, amount, description, idempotencyKey} = event.arguments;
  axios.defaults.headers["Authorization"] = event.request.headers.authorization; 
  return tpc.getAthlete(axios, athleteId).then(res => getOrCreateProcessorToken(res, plaidAccountId, amount, description, idempotencyKey))
}