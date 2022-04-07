/* Amplify Params - DO NOT EDIT
	API_THEPLAYERSCOMPANY_ATHLETETABLE_ARN
	API_THEPLAYERSCOMPANY_ATHLETETABLE_NAME
	API_THEPLAYERSCOMPANY_GRAPHQLAPIENDPOINTOUTPUT
	API_THEPLAYERSCOMPANY_GRAPHQLAPIIDOUTPUT
	API_THEPLAYERSCOMPANY_GRAPHQLAPIKEYOUTPUT
	FUNCTION_UNITSERVICE_NAME
Amplify Params - DO NOT EDIT */

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
//  const aws = require('aws-sdk')
//  const ses = new aws.SES()
 const {unit, axios} = require("./env")
 const listAthletes = require("./getAthlete");
 
 exports.handler = async (event) => {
     //listAthletes
     //unitAccountStatement
     const pageCount = 0;
     const generateAccountStatements = () => {
      return unit.statements.list({limit: 1000, offset: pageCount}).then(res =>  console.log(">>>>>>>>>>>>>>>", res))
      .catch(err => Promise.reject(`Failed to reach Unit API. Error: ${err.message}`));
    };

    const athletes = () => listAthletes(axios).then(res => console.log(">>>>>>>>>>>>>>>", res))

  //   get(statementId, customerId, isPDF = false) {
  //     const parameters = {
  //         ...(customerId && { "filter[customerId]": customerId })
  //     };
  //     const url = isPDF ? `/${statementId}/pdf` : `/${statementId}/html`;
  //     return this.httpGet(url, { params: parameters });
  // }
  return athletes()
    
  //  for (const streamedItem of generateAccountStatements.Records) {
  //    if (streamedItem.eventName === 'INSERT') {
  //      //pull off items from stream
  //      const firstName = streamedItem.dynamodb.NewImage.name.S
  //      const athleteEmail = streamedItem.dynamodb.NewImage.email.S
 
  //      await ses
  //          .sendEmail({
  //            Destination: {
  //              ToAddresses: [athleteEmail],
  //            },
  //            Source: process.env.SES_EMAIL,
  //            Message: {
  //              Subject: { Data: 'Account Statement' },
  //              Body: {
  //                Text: { Data: `Dear ${firstName}. Please find attached your monthly statement. ${candidateEmail}` },
  //              },
  //            },
  //          })
  //          .promise()
  //    }
  //  }
   //return { status: 'done' }
 }
 
