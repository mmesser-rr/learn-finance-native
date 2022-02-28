/* Amplify Params - DO NOT EDIT
	API_THEPLAYERSCOMPANY_GRAPHQLAPIENDPOINTOUTPUT
	API_THEPLAYERSCOMPANY_GRAPHQLAPIIDOUTPUT
	API_THEPLAYERSCOMPANY_GRAPHQLAPIKEYOUTPUT
	ENV
	REGION
Amplify Params - DO NOT EDIT */
const { createAndPersistAccount } = require("./workflows/createAccount.js");
const { createAppAndAccount } = require("./workflows/createAppAndAccount");
const { debitAccount } = require("./workflows/debitAccount.js");
const { creditAccount } = require("./workflows/creditAccount");
const { bookPayment } = require("./workflows/bookPayment");
const { getAthleteUnitAccounts } = require("./workflows/getAllAccounts");
const {getAthleteUnitAccountById} = require("./workflows/getAthleteAccountById");
const {getUnitTransactionById} = require("./workflows/getUnitTransactionById");
const { event } = require("react-native-reanimated");

const resolvers = Object.freeze({
  openAccount: (event) => createAndPersistAccount(event.arguments.athlete.id),
  bookPayment: (event) => bookPayment(event),
  debitAccount: (event) => debitAccount(event),
  creditAccount: (event) => creditAccount(event),
  getUnitTransactionById: (event) => getUnitTransactionById(event.arguments.athleteId, event.arguments.unitTransactionId),
  getAthleteUnitAccounts: (event) => getAthleteUnitAccounts(event.arguments.athleteId),
  getAthleteUnitAccountById: (event) => getAthleteUnitAccountById(event.arguments.athleteId, event.arguments.unitAccountId),
  openAppAndAccount: (event) => createAppAndAccount(event.arguments.ssn, event.arguments.athleteId)
});

const fallback = (event) => Promise.reject(`No handler defined for fieldName: ${event.fieldName}`);

exports.handler = async (event) => (resolvers[event.fieldName] || fallback)(event);


