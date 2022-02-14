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
  createAccount: (event) => createAccount(event.arguments.athlete),
  createAppAndAccount: (event) => createAppAndAccount(event.arguments.ssn, event.arguments.athlete)
});

const fallback = (event) => {throw new Error(`No handler defined for fieldName: ${event.fieldName}`)};

exports.handler = async (event) => (resolvers[event.fieldName] || fallback)(event);
