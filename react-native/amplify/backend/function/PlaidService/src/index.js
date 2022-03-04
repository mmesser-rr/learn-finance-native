/*
Use the following code to retrieve configured secrets from SSM:

const aws = require('aws-sdk');

const { Parameters } = await (new aws.SSM())
  .getParameters({
    Names: ["CLIENT_ID","SECRET_KEY"].map(secretName => process.env[secretName]),
    WithDecryption: true,
  })
  .promise();

Parameters will be of the form { Name: 'secretName', Value: 'secretValue', ... }[]
*/
/* Amplify Params - DO NOT EDIT
	ENV
	REGION
	API_THEPLAYERSCOMPANY_GRAPHQLAPIIDOUTPUT
	API_THEPLAYERSCOMPANY_GRAPHQLAPIENDPOINTOUTPUT
	API_THEPLAYERSCOMPANY_GRAPHQLAPIKEYOUTPUT
	FUNCTION_PLAYERVERIFYSERVICE_NAME
	FUNCTION_ACCOUNTOPENSERVICE_NAME
	API_THEPLAYERSCOMPANY_ATHLETETABLE_NAME
	API_THEPLAYERSCOMPANY_ATHLETETABLE_ARN
	API_THEPLAYERSCOMPANY_PHONECHALLENGETABLE_NAME
	API_THEPLAYERSCOMPANY_PHONECHALLENGETABLE_ARN
Amplify Params - DO NOT EDIT */

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
 const {updatePlaidToken} = require('./workflows/updateToken');
 const {createToken} = require('./workflows/createToken');
 const {processorToken} = require('./workflows/processorToken');
 const {getPlaidAccount} = require('./workflows/getPlaidAccount');

 const resolvers = {
	updatePlaidToken: updatePlaidToken,
  	createToken: createToken,
  	processorToken: processorToken,
  	getPlaidAccount: getPlaidAccount
 };
 
 const fallback = (event) => {throw new Error `No handler defined for fieldName: ${event.fieldName}`};
 
 exports.handler = async (event) => await (resolvers[event.fieldName] || fallback)(event);
 