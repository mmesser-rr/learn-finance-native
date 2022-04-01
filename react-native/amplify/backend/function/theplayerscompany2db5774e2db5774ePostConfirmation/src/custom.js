/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
 var aws = require('aws-sdk')
 var ddb = new aws.DynamoDB()
 
 exports.handler = async (event, context) => {
     let date = new Date()
     if (event.request.userAttributes.sub) {
         let params = {
             Item: {
                 'id': {S: event.request.userAttributes.sub},
                 '__typename': {S: 'Athlete'},
                 'mobilePhone': {S: event.request.userAttributes.phone_number},
                 'createdAt': {S: date.toISOString()},
                 'isActive': {S: 'false'},
             },
             TableName: process.env.ATHLETETABLE
         }
 
         try {
             await ddb.putItem(params).promise()
             console.log("Success")
         } catch (err) {
             console.log("Error", err)
         }
 
         console.log("Success: Everything executed correctly")
         context.done(null, event)
 
     } else {
         console.log("Error: Nothing was written to DynamoDB")
         context.done(null, event)
     }
 };