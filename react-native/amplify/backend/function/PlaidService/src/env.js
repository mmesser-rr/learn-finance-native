import { Configuration, PlaidApi, PlaidEnvironments } from 'plaid';
const fs = require('fs');
const { compose } = require("ramda");

const { Unit } = require("@unit-finance/unit-node-sdk");
const axios = require('axios');

const jsonFile = compose(JSON.parse, fs.readFileSync)("./defaultEnv.json")

const getEnv = (varName, required = true) => {
  const varValue = process.env[varName];

  if (required && (varValue == null || varValue === '')) {
    throw new Error(`Environment variable ${varName} not set`);
  }

  return varValue;
}

const getJson = (varName, required = true) => {
  const varValue = jsonFile[varName];

  if (required && (varValue == null || varValue === '')) {
    throw new Error(`${varName} not set in json`);
  }

  return varValue;
}

const getEnvOrJson = (varName, required = true) => getEnv(varName, false) || getJson(varName, required);

const configuration = new Configuration({
  basePath: PlaidEnvironments.sandbox,
  baseOptions: {
    headers: {
      'PLAID-CLIENT-ID': getEnvOrJson('CLIENT_ID'),
      'PLAID-SECRET': getEnvOrJson('SECRET_KEY'),
    },
  },
});

const devEnv = () => ({
  plaid: new PlaidApi(configuration),
  plaid: axios.create({
    baseURL: getEnvOrJson("API_THEPLAYERSCOMPANY_GRAPHQLAPIENDPOINTOUTPUT"),
    headers: {
      'x-api-key': getEnvOrJson("API_THEPLAYERSCOMPANY_GRAPHQLAPIKEYOUTPUT")
    }
  })
})

const liveEnv = () => ({
  plaid: new PlaidApi(configuration),
  plaid: axios.create({
    baseURL: getEnvOrJson("API_THEPLAYERSCOMPANY_GRAPHQLAPIENDPOINTOUTPUT"),
    headers: {
      'x-api-key': getEnvOrJson("API_THEPLAYERSCOMPANY_GRAPHQLAPIKEYOUTPUT")
    }
  })
});

const fetchDevOrLiveEnv = () => {
  const nodeEnv = getEnv('NODE_ENV');

  if (nodeEnv == 'production') {
    return liveEnv();
  } else if (nodeEnv == 'development') {
    return devEnv();
  }
}

module.exports = fetchDevOrLiveEnv();