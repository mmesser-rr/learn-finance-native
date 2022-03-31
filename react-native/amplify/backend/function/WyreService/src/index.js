/*
Use the following code to retrieve configured secrets from SSM:

const aws = require('aws-sdk');

const { Parameters } = await (new aws.SSM())
  .getParameters({
    Names: ["API_KEY","WYRE_TOKEN"].map(secretName => process.env[secretName]),
    WithDecryption: true,
  })
  .promise();

Parameters will be of the form { Name: 'secretName', Value: 'secretValue', ... }[]
*/
/* Amplify Params - DO NOT EDIT
	API_THEPLAYERSCOMPANY_ATHLETETABLE_ARN
	API_THEPLAYERSCOMPANY_ATHLETETABLE_NAME
	API_THEPLAYERSCOMPANY_GRAPHQLAPIENDPOINTOUTPUT
	API_THEPLAYERSCOMPANY_GRAPHQLAPIIDOUTPUT
	API_THEPLAYERSCOMPANY_GRAPHQLAPIKEYOUTPUT
	API_THEPLAYERSCOMPANY_RECENTTRANSACTIONTABLE_ARN
	API_THEPLAYERSCOMPANY_RECENTTRANSACTIONTABLE_NAME
Amplify Params - DO NOT EDIT */

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
 const { createWyreAccount } = require("./workflows/createWyreAccount.js");
 const { debitWyreAccount } = require("./workflows/debitAccount.js");
 const { creditWyreAccount } = require("./workflows/creditAccount");
 const { getAthleteWyreAccount } = require("./workflows/getAthleteWyreAccount");
 const {getWyreTransactionById} = require("./workflows/getWyreTransactionById");
 const {listAllWyreTransaction} = require("./workflows/getAllWyreTransaction");
 //const {listWyreBalanceHistory} = require("./workflows/listWyreBalanceHistory");
 //const {createAthleteWryeToken} = require("./workflows/createAthleteWryeToken");
 //const {wyreAccountStatement} = require("./workflows/wyreAccountStatement");
 const {wyreWebhook} = require("./workflows/wyreWebhook");
 
 const resolvers = Object.freeze({
   createWyreAccount: (event) => createWyreAccount(event.arguments.athleteId),
   debitWyreAccount: (event) => debitWyreAccount(event),
   creditWyreAccount: (event) => creditWyreAccount(event),
 
   //createAthleteWryeToken: (event) => createAthleteWryeToken(event),
   //wyreAccountStatement: (event) => wyreAccountStatement(event.arguments.athleteId),
 
   getWyreTransactionById: (event) => getWyreTransactionById(event.arguments.unitAccountId, event.arguments.unitTransactionId),
   listAllWyreTransaction: (event) => listAllWyreTransaction(event.arguments.athleteId),
 
   //listWyreBalanceHistory: (event) => listWyreBalanceHistory(event.arguments.athleteId),
   getAthleteWyreAccount: (event) => getAthleteWyreAccount(event.arguments.athleteId)
 });
 
 
 const fallback = (event) => Promise.reject(`No handler defined for fieldName: ${event.fieldName}`);
 exports.handler = async (event) => (resolvers[event.fieldName] || fallback)(event);
 
 
 