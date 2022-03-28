const tpc = require("../wrappers/tpc");
const {getUnitTransactionById} = require("./getUnitTransactionById");
const crypto = require('crypto');
const webHookSecret = "133tgtu7924efvfh76y";

const unitWebhook = (data) => {
  const signature = data.header;//("x-unit-signature")
  let hmac = crypto.createHmac('sha1', webHookSecret)
 // hmac.update(JSON.stringify(data.body))

  if(hmac.digest('base64') !== signature) {
    updateTransactionList(data.data.id, data.data.relationships.transaction.data.id)
  }
  else {
      return ({response: "status(500)", message: "Signatures error!"})
  }
}
const updateTransactionList = (unitAccountId, unitTransactionId) => {
  return getUnitTransactionById(unitAccountId, unitTransactionId)
  .then(res => console.log("<<<<<<<<<<<<<,",res))
  .then(res => tpc.updateTransaction(res))
  .catch(err => {
    throw new Error(`Failed to connect. Reason: ${JSON.stringify(err)}`);
  });
}
module.exports.unitWebhook = async (event) => {
  return unitWebhook(event.arguments)
}
//relationships.payment.data.id