/* Amplify Params - DO NOT EDIT
	API_THEPLAYERSCOMPANY_ATHLETETABLE_ARN
	API_THEPLAYERSCOMPANY_ATHLETETABLE_NAME
	API_THEPLAYERSCOMPANY_GRAPHQLAPIENDPOINTOUTPUT
	API_THEPLAYERSCOMPANY_GRAPHQLAPIIDOUTPUT
	API_THEPLAYERSCOMPANY_GRAPHQLAPIKEYOUTPUT
	API_THEPLAYERSCOMPANY_RECENTTRANSACTIONTABLE_ARN
	API_THEPLAYERSCOMPANY_RECENTTRANSACTIONTABLE_NAME
	AUTH_THEPLAYERSCOMPANY2DB5774E2DB5774E_USERPOOLID
	FUNCTION_PLAIDSERVICE_NAME
	FUNCTION_PLAYERVERIFYSERVICE_NAME
	FUNCTION_THEPLAYERSCOMPANY2DB5774E2DB5774EPOSTCONFIRMATION_NAME
	FUNCTION_WEBHOOKSERVICE_NAME
Amplify Params - DO NOT EDIT */
const { createAndPersistAccount } = require("./workflows/createAccount.js");
const { createAppAndAccount } = require("./workflows/createAppAndAccount");
const { debitAccount } = require("./workflows/debitAccount.js");
const { creditAccount } = require("./workflows/creditAccount");
const { bookPayment } = require("./workflows/bookPayment");
const { plaidPayment } = require("./workflows/plaidPayment");
const {podSettings} = require("./workflows/podSettings");
const { getAthleteUnitAccounts } = require("./workflows/getAllAccounts");
const {getAthleteUnitAccountById} = require("./workflows/getAthleteAccountById");
const {getUnitTransactionById} = require("./workflows/getUnitTransactionById");
const {getAllUnitTransaction} = require("./workflows/getAllUnitTransaction");
const {listUnitBalanceHistory} = require("./workflows/listUnitBalanceHistory");
const {createAthleteUnitToken} = require("./workflows/createAthleteUnitToken");
const {unitAccountStatement} = require("./workflows/unitAccountStatement");
const {athleteUnitTokenVerification} = require("./workflows/athleteUnitTokenVerification");

const resolvers = Object.freeze({
  openAccount: (event) => createAndPersistAccount(event, event.arguments.athleteId, event.arguments.podName),
  bookPayment: (event) => bookPayment(event),
  debitAccount: (event) => debitAccount(event),
  creditAccount: (event) => creditAccount(event),
  createPlaidPayment: (event) => plaidPayment(event),
  podSettings: (event) => podSettings(event),
  createAthleteUnitToken: (event) => createAthleteUnitToken(event),
  unitAccountStatement: (event) => unitAccountStatement(event,event.arguments.athleteId),
  athleteUnitTokenVerification: (event) => athleteUnitTokenVerification(event, event.arguments.athleteId), 

  getUnitTransactionById: (event) => getUnitTransactionById(event.arguments.unitAccountId, event.arguments.unitTransactionId),
  listAllUnitTransactions: (event) => getAllUnitTransaction(event, event.arguments.athleteId),

  listUnitBalanceHistory: (event) => listUnitBalanceHistory(event, event.arguments.athleteId),
  listAthleteUnitAccounts: (event) => getAthleteUnitAccounts(event, event.arguments.athleteId),
  getAthleteUnitAccountById: (event) => getAthleteUnitAccountById(event, event.arguments.athleteId, event.arguments.unitAccountId),
  openAppAndAccount: (event) => createAppAndAccount(event, event.arguments.ssn, event.arguments.athleteId)
});


const fallback = (event) => Promise.reject(`No handler defined for fieldName: ${event.fieldName}`);

exports.handler = async (event) => (resolvers[event.fieldName] || fallback)(event);


