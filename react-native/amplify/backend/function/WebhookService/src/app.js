/*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
    http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/




const express = require('express')
const bodyParser = require('body-parser')
const crypto = require('crypto')
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')
const wrapper = require("./wrapper")


// declare a new express app
const app = express()
app.use(bodyParser.json())
app.use(awsServerlessExpressMiddleware.eventContext())

// app.use(bodyParser.json({
//   verify: function (req, res, buf) {
//      req.rawBody = buf.toString()
//   }
// }));

// Enable CORS for all methods
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "*")
  next()
});

const unitSecret = "" 


// app.post('/item', function(req, res) {
//   // Add your code here
//   res.json({success: 'post call succeed!', url: req.url, body: req.body})
// });

app.post('/webhook', function (request, response) {
  if(request?.header("x-unit-signature") != null){
    return unitWebhook(request, response)
  }
  // Return a response to acknowledge receipt of the event
  response.json({ received: true });
});

app.listen(3000, function() {
    console.log("App started")
});

const unitWebhook = (request, response) => {
  try {
    var signature = request.header("x-unit-signature")
    var hmac = crypto.createHmac('sha1', unitSecret)
    hmac.update(JSON.stringify(request.body))
    if(hmac.digest('base64') == signature) {
      switch (request.body.type) {
        case 'transaction.updated':
          console.log('Payment update!')
          updateTransactionList("unit", request.body.data.id, request.body.data.relationships.transaction.data.id)
          break;
        default:
          // Unexpected event type
          return response.status(400).end();
      }
    }
    else {
        response.status(500).send("Signatures didn't match!")
    }
  }
  catch (err) {
    response.status(400).send(`Webhook Error: ${err.message}`);
  }
}

const updateTransactionList = (type, accountId, transactionId) => {
  if(type === "unit"){
    return wrapper.getUnitTransactionById(accountId, transactionId)
    .then(res => console.log("<<<<<<<<<<<<<,",res))
    .then(res => tpc.updateTransaction(res))
    .catch(err => {
      throw new Error(`Failed to connect. Reason: ${JSON.stringify(err)}`);
    });
  }else{
    return wrapper.getWyreTransactionById(accountId, transactionId)
    .then(res => console.log("<<<<<<<<<<<<<,",res))
    .then(res => tpc.updateTransaction(res))
    .catch(err => {
      throw new Error(`Failed to connect. Reason: ${JSON.stringify(err)}`);
    });
  }

}

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app
