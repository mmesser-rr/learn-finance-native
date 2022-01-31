/* Amplify Params - DO NOT EDIT
	API_THEPLAYERSCOMPANY_GRAPHQLAPIENDPOINTOUTPUT
	API_THEPLAYERSCOMPANY_GRAPHQLAPIIDOUTPUT
	API_THEPLAYERSCOMPANY_GRAPHQLAPIKEYOUTPUT
	API_THEPLAYERSCOMPANY_INVITETABLE_ARN
	API_THEPLAYERSCOMPANY_INVITETABLE_NAME
	ENV
	FUNCTION_INVITESERVICE_NAME
	REGION
Amplify Params - DO NOT EDIT *//* Amplify Params - DO NOT EDIT
	API_THEPLAYERSCOMPANY_GRAPHQLAPIENDPOINTOUTPUT
	API_THEPLAYERSCOMPANY_GRAPHQLAPIIDOUTPUT
	API_THEPLAYERSCOMPANY_GRAPHQLAPIKEYOUTPUT
	API_THEPLAYERSCOMPANY_INVITETABLE_ARN
	API_THEPLAYERSCOMPANY_INVITETABLE_NAME
	AUTH_THEPLAYERSCOMPANY_USERPOOLID
	ENV
	FUNCTION_INVITESERVICE_NAME
	REGION
Amplify Params - DO NOT EDIT */
"use strict"

const { initiatePhoneChallenge } = require("./initiatePhoneChallenge.js");
const { initiateEmailChallenge } = require("./initiateEmailChallenge.js");
const tryEmailChallenge = require("./tryEmailChallenge.js");
const tryPhoneChallenge = require("./tryPhoneCHallenge.js");

const resolvers = {
  initiatePhoneChallenge: initiatePhoneChallenge,
  initiateEmailChallenge: initiateEmailChallenge,
  tryPhoneChallenge: tryPhoneChallenge
  tryEmailChallenge: tryEmailChallenge
};

const fallback = (event) => {throw new Error(`No handler defined for fieldName: ${event.fieldName}`)};

exports.handler = async (event) => await (resolvers[event.fieldName] || fallback)(event);
