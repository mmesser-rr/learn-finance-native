const { Unit } = require("@unit-finance/unit-node-sdk");
const axios = require('axios');

const getEnv = (varName, required = true) => {
  const varValue = process.env[varName];

  return varValue;
}

const unitFromEnv = new Unit(getEnv('UNIT_TOKEN'), getEnv('UNIT_API_URL'));
const axiosFromEnv = axios.create({
  baseURL: getEnv("API_THEPLAYERSCOMPANY_GRAPHQLAPIENDPOINTOUTPUT") || "127.0.0.1",
  headers: {
    'x-api-key': getEnv("API_THEPLAYERSCOMPANY_GRAPHQLAPIKEYOUTPUT") || "key"
  }
});

module.exports = {
  unit: unitFromEnv,
  axios: axiosFromEnv
}
