/* Amplify Params - DO NOT EDIT
	API_THEPLAYERSCOMPANY_ATHLETEACCOUNTTABLE_ARN
	API_THEPLAYERSCOMPANY_ATHLETEACCOUNTTABLE_NAME
	API_THEPLAYERSCOMPANY_ATHLETETABLE_ARN
	API_THEPLAYERSCOMPANY_ATHLETETABLE_NAME
	API_THEPLAYERSCOMPANY_GRAPHQLAPIENDPOINTOUTPUT
	API_THEPLAYERSCOMPANY_GRAPHQLAPIIDOUTPUT
	API_THEPLAYERSCOMPANY_GRAPHQLAPIKEYOUTPUT
	ENV
	FUNCTION_UNITSERVICE_NAME
	REGION
Amplify Params - DO NOT EDIT */

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
 const aws = require('aws-sdk')
 const ses = new aws.SES()
 
 exports.handler = async (event) => {
     //listAthletes
     //unitAccountStatement
   for (const streamedItem of event.Records) {
     if (streamedItem.eventName === 'INSERT') {
       //pull off items from stream
       const firstName = streamedItem.dynamodb.NewImage.name.S
       const athleteEmail = streamedItem.dynamodb.NewImage.email.S
 
       await ses
           .sendEmail({
             Destination: {
               ToAddresses: [athleteEmail],
             },
             Source: process.env.SES_EMAIL,
             Message: {
               Subject: { Data: 'Account Statement' },
               Body: {
                 Text: { Data: `Dear ${firstName}. Please find attached your monthly statement. ${candidateEmail}` },
               },
             },
           })
           .promise()
     }
   }
   return { status: 'done' }
 }
 
