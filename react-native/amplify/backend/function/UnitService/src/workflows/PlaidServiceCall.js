const AWS = require('aws-sdk');
var lambda = new AWS.Lambda();

exports.handler = function(event, context) {
  var params = {
    FunctionName: 'PlaidService', // the lambda function we are going to invoke
    InvocationType: 'RequestResponse',
    LogType: 'Tail',
    Payload: '{ "name" : "Alex" }'
  };

  lambda.invoke(params, function(err, data) {
    if (err) {
      context.fail(err);
    } else {
      context.succeed('Lambda_B said '+ data.Payload);
    }
  })
};

module.exports.plaidServiceCall = async (event) => {
  const {athleteId, data} = event.arguments;
   return plaidServiceCall(athleteId, data)
}
