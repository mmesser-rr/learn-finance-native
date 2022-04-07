const tpc = require("../wrappers/tpc");
const {getwyreTransactionById} = require("./getWyreTransactionById");
const crypto = require('crypto');
const webHookSecret = "133tgtu7924efvfh76y";

const wyreWebhook = (data) => {
  const signature = data.header;//("x-wyre-signature")
  let hmac = crypto.createHmac('sha1', webHookSecret)
 // hmac.update(JSON.stringify(data.body))

  if(hmac.digest('base64') !== signature) {
    updateTransactionList(data.data.id, data.data.relationships.transaction.data.id)
  }
  else {
      return ({response: "status(500)", message: "Signatures error!"})
  }
}
const updateTransactionList = (wyreAccountId, wyreTransactionId) => {
  return getWyreTransactionById(wyreAccountId, wyreTransactionId)
  .then(res => console.log("<<<<<<<<<<<<<,",res))
  .then(res => tpc.updateTransaction(res))
  .catch(err => {
    throw new Error(`Failed to connect. Reason: ${JSON.stringify(err)}`);
  });
}
module.exports.wyreWebhook = async (event) => {
  return wyreWebhook(event.arguments)
}
//relationships.payment.data.id


