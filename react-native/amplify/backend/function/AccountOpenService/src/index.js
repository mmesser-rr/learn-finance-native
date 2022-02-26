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

const resolvers = Object.freeze({
  openAccount: (event) => createAndPersistAccount(event.arguments.athlete.id),
  bookPayment: bookPayment,
  debitAccount: debitAccount,
  creditAccount: creditAccount,
  getAthleteUnitAccounts: getAthleteUnitAccounts(event.arguments.athlete.id),
  getAthleteUnitAccountById: getAthleteUnitAccountById(event.arguments.athlete.id, event.arguments.unitAccountId),
  openAppAndAccount: (event) => createAppAndAccount(event.arguments.ssn, event.arguments.athleteId)
});

const fallback = (event) => Promise.reject(`No handler defined for fieldName: ${event.fieldName}`);

exports.handler = async (event) => (resolvers[event.fieldName] || fallback)(event);
