/* Amplify Params - DO NOT EDIT
	API_THEPLAYERSCOMPANY_GRAPHQLAPIENDPOINTOUTPUT
	API_THEPLAYERSCOMPANY_GRAPHQLAPIIDOUTPUT
	API_THEPLAYERSCOMPANY_GRAPHQLAPIKEYOUTPUT
	ENV
	REGION
Amplify Params - DO NOT EDIT */
const { createAccount } = require("./workflows/createAccount.js");
const { createAppAndAccount } = require("./workflows/createAppAndAccount");

const resolvers = Object.freeze({
  openAccount: (event) => createAccount(event.arguments.athlete),
  openAppAndAccount: (event) => createAppAndAccount(event.arguments.ssn, event.arguments.athleteId)
});

const fallback = (event) => Promise.reject(`No handler defined for fieldName: ${event.fieldName}`);

exports.handler = async (event) => (resolvers[event.fieldName] || fallback)(event);
