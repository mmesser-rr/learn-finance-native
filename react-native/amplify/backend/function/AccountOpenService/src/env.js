const { Unit } = require("@unit-finance/unit-node-sdk");
const axios = require('axios');

const getEnv = (varName, required = true) => {
  const varValue = process.env[varName];
  if (required && (varValue == null || varValue === '')) {
    throw new Error(`Environment variable ${varName} not set`);
  }
  return varValue;
}

const unitFromEnv = new Unit(getEnv('UNIT_TOKEN'), getEnv('UNIT_API_URL'));
const axiosFromEnv = axios.create({
  baseUrl: getEnv("API_THEPLAYERSCOMPANY_GRAPHQLAPIENDPOINTOUTPUT"),
  headers: {
    'x-api-key': getEnv("API_THEPLAYERSCOMPANY_GRAPHQLAPIKEYOUTPUT")
  }
});
 
module.exports = {
  unit: unitFromEnv,
  axios: axiosFromEnv
}
